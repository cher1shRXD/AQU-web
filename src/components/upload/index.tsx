import { useRef, useState } from 'react'
import * as S from './style'
import instance from '../../libs/axios/customAxios';
import NotificationService from '../../libs/toastify/notificationService';
import { cachingStore } from '../../store/cachingStore';

const Upload = () => {

  const [modalState, setModalState] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const setCachingState = cachingStore(state=>state.setCachingState);

  const handleModal = () => {
    setModalState(!modalState);
    if(modalState) {
      setDescription("");
      setTitle("");
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  }

  const fileInputRef = useRef<HTMLInputElement|null>(null);

  const handleButtonClick = () => {
    if(fileInputRef.current){
      fileInputRef.current.click();
    }
  };

  const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }

  const submit = async () => {
    const formData = new FormData();
    if(file && title.trim() !== "" && description.trim() !== ""){
      setLoading(true);
      formData.append("file", file);
      const url = await instance.post("/upload/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await instance.post('/boards',{title,description,url:url.data.url});
      setCachingState(true);
      handleModal();
      setLoading(false);
    }else{
      NotificationService.warn('제목, 설명을 입력했는지, 파일을 업로드 했는지 확인해주세요.');
    }
  }

  return (
    <S.Container>
      <S.Button onClick={handleModal}>업로드</S.Button>
      {modalState && (
        <S.ModalShadow>
          <S.ModalWrap>
            <S.ModalHeader>
              <h1 style={{ fontSize: "25px" }}>파일업로드</h1>
              <img
                src="/assets/close.svg"
                style={{ height: "60%", cursor: "pointer" }}
                onClick={handleModal}
              />
            </S.ModalHeader>
            <S.ModalMain>
              <S.TitleInput
                placeholder="제목을 입력해주세요."
                onChange={handleTitle}
                value={title}
              />
              <S.DescriptionArea
                placeholder="설명을 입력해주세요"
                onChange={handleDescription}
                value={description}
              ></S.DescriptionArea>
              <S.ButtonWrap>
                {file !== null ? (
                  <S.UploadedButton onClick={clearFile}>
                    <img src="/assets/check.svg" />
                    업로드 완료
                  </S.UploadedButton>
                ) : (
                  <S.FileUploadContainer>
                    <S.HiddenFileInput
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*, video/*"
                    />
                    <S.UploadButton onClick={handleButtonClick}>
                      <img src="/assets/upload.svg" />
                      파일 업로드
                    </S.UploadButton>
                  </S.FileUploadContainer>
                )}
                <S.SubmitButton onClick={submit} disabled={loading}>{!loading?"업로드":"업로드 중..."}</S.SubmitButton>
              </S.ButtonWrap>
            </S.ModalMain>
          </S.ModalWrap>
        </S.ModalShadow>
      )}
    </S.Container>
  );
}

export default Upload