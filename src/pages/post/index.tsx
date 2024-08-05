import { useLocation, useParams } from 'react-router-dom';
import * as S from './style';
import { useEffect, useState } from 'react';
import { Board } from '../../types/board/board.type';
import axios from 'axios';
import instance from '../../libs/axios/customAxios';
import NotificationService from '../../libs/toastify/notificationService';
import { userStore } from '../../store/userStore';

const Post = () => {
  const [detail, setDetail] = useState<Board>();
  const [fileType, setFileType] = useState("");
  const user = userStore(state=>state.user);
  const location = useLocation();

  const getFileType = (url: any) => {
    const extension = url.split(".").pop().toLowerCase();
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];
    const videoExtensions = ["mp4", "mov", "avi", "mkv", "webm"];

    if (imageExtensions.includes(extension)) {
      return "image";
    } else if (videoExtensions.includes(extension)) {
      return "video";
    } else {
      return "unknown";
    }
  };

  const param = useParams();

  const detailReq = async () => {
    const res = await axios.get(`https://api-aqu.p-e.kr/boards/${param.id}`);
    setDetail(res.data);
  }

  useEffect(()=>{
    detailReq();
  },[]);

  useEffect(()=>{
    if(detail && detail.url && detail.url !== '') {
      setFileType(getFileType(detail.url));
    }
  },[detail]);

  const downloadReq = async () => {
    try {
      if(detail) {
        const fileName = detail.url.split("/").pop();
        const response = await instance.get(`/upload/download/${fileName}`, {
          responseType: "blob"
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));

        const link = document.createElement("a");
        link.href = url;
        if(fileName){
          link.setAttribute("download", fileName);
        }
        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);  
      }
    } catch (err:any) {
      if (err.response && err.response.status === 404) {
        NotificationService.error("파일을 찾을 수 없습니다.");
      } else {
        NotificationService.error("파일 다운로드 중 오류가 발생했습니다.");
      }
    }
  };

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      NotificationService.success("클립보드에 링크가 복사되었습니다.");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <S.Container>
      <S.Main>
        {detail && fileType !== "unknown" ? (
          fileType === "video" ? (
            <S.VideoWrap>
              <S.Video
                src={detail.url}
                controls
                controlsList="nodownload noremoteplayback"
                onContextMenu={(e) => {
                  e.preventDefault();
                }}
              />
            </S.VideoWrap>
          ) : (
            <S.Image src={detail.url} />
          )
        ) : (
          <S.Image src="/assets/documentType.svg" />
        )}
        <S.TitleWrap>
          <S.Title>{detail?.title}</S.Title>
          <S.Author>{detail?.author.username}</S.Author>
          <S.InteractionWrap>
            {user.role === "MEMBER" && (
              <S.Interaction src="/assets/download.svg" onClick={downloadReq} />
            )}
            <S.Interaction
              src="/assets/link.svg"
              onClick={() => {
                handleCopyClipBoard(
                  `https://aqu-cloud.kro.kr${location.pathname}`
                );
              }}
            />
          </S.InteractionWrap>
        </S.TitleWrap>
        <S.DescripitionWrap>
          <span>게시일: {detail?.createdAt}</span>
          <br />
          <S.Descripition>{detail && detail.description}</S.Descripition>
        </S.DescripitionWrap>
      </S.Main>
      <S.Footer>
        <p>
          제작자: cher1shRXD(김태우)
          <br />
          <br />
          <a href="tel:01048901466">Tel. 010-4890-1466</a>
        </p>
        <p style={{ alignSelf: "flex-end" }}>
          &copy; 2024. A.Q.U(아꾸) all rights reserved
        </p>
      </S.Footer>
    </S.Container>
  );
}

export default Post