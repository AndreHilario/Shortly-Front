import { MenuUrlContainer, UrlWrapper, ShowUrls, DeleteUrls } from "./styledMenuUrl";
import trash from "../../assets/Trash.png";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import apiAuth from "../../services/apiAuth";

export default function MenuUrlPage() {

  const [urlContent, setUrlContent] = useState([]);

  const { user, setUser } = useContext(UserContext);

  useEffect(() => {

    apiAuth
      .getUrlsUser(user.token)
      .then((res) => {
        setUrlContent(res.data);
        const { name } = res.data;
        setUser({ name, token: user.token })
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }, [user.token, setUser]);

  function deleteUrls(urlId) {

    apiAuth
      .deleteUrls(user.token, urlId)
      .then(() => {
        console.log("Url deleted");
        window.location.reload();
      })
      .catch(err => alert(err.response.data));
  }

  function openOneUrl(shortUrl) {

    apiAuth
      .openUrl(shortUrl)
      .then(console.log("Url opened"))
      .catch(err => alert(err))
  }

  return (
    <MenuUrlContainer>
      <UrlWrapper>
        {urlContent && urlContent.shortenedUrls && urlContent.shortenedUrls.length > 0 ? (
          urlContent.shortenedUrls.map((url) => (
            <span key={url.id}>
              <ShowUrls>
                <p>{url.url}</p>
                <p onClick={() => openOneUrl(url.shortUrl)}>{url.shortUrl}</p>
                <p>{url.visitCount}</p>
              </ShowUrls>
              <DeleteUrls>
                <img onClick={() => deleteUrls(url.id)} src={trash} alt="Trash icon" />
              </DeleteUrls>
            </span>
          ))
        ) : (
          <p>No URLs found!</p>
        )}
      </UrlWrapper>
    </MenuUrlContainer>
  );
}