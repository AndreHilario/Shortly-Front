import styled from "styled-components";
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



  return (
    <MenuUrlContainer>
      <UrlWrapper>
        {urlContent && urlContent.shortenedUrls && urlContent.shortenedUrls.length > 0 ? (
          urlContent.shortenedUrls.map((url) => (
            <span key={url.id}>
              <ShowUrls>
                <p>{url.url}</p>
                <p>{url.shortUrl}</p>
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

const MenuUrlContainer = styled.main`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 42px; 
    margin-top: 60px;
  `;

const UrlWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 41px;
    margin-bottom: 50px;
    span {
      display: flex;
    }
  `;

const ShowUrls = styled.div`
    width: 887px;
    height: 60px;
    background: #80CC74;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #FFFFFF;
      background-color: #80CC74;
      padding: 10px 15px;
      margin-right: 10px;
    }
  `;

const DeleteUrls = styled.div`
    width: 130px;
    height: 60px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0px 12px 12px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `;