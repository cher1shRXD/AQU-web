import { useEffect, useState } from 'react';
import { Board } from '../../types/board/board.type';
import * as S from './style'
import { useNavigate } from 'react-router-dom';

const Article = ({item}:{item:Board}) => {

  const [fileType, setFileType] = useState("");
  const navigate = useNavigate();

  const getFileType = (url:any) => {
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
  }

  useEffect(()=>{
    setFileType(getFileType(item.url));
  },[]);

  return (
    <S.Container onClick={()=>{navigate(`/post/${item.id}`)}}>
      <S.TextWrap>{item.title}</S.TextWrap>
      <S.FileType>
        {
          fileType === 'unknown' ? (
            <S.FileTypeIcon src='/assets/documentType.svg'/>
          ) : (
            <>
              {
                fileType === 'video' ? (
                  <S.FileTypeIcon src='/assets/videoType.svg'/>
                ) : (
                  <S.FileTypeIcon src='/assets/pictureType.svg'/>
                )
              }
            </>
          )
        }
      </S.FileType>
      <S.TextWrap>by {item.author.username}</S.TextWrap>
      <S.TextWrap>{item.createdAt}</S.TextWrap>
    </S.Container>
  );
}

export default Article