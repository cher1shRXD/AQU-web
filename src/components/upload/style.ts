import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:70px;
  padding: 0 50px;
  display:flex;
  align-items:center;
  box-sizing:border-box;
`
export const Button = styled.button`
  border: none;
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
  font-size:20px;
  color:white;
  cursor: pointer;
  padding: 7px 15px;
`;

export const ModalShadow = styled.div`
  width:100vw;
  height:100vh;
  position:fixed;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.4);
  display:flex;
  justify-content:center;
  align-items:center;
`

export const ModalWrap = styled.div`
  width: 90%;
  max-width:700px;
  height:500px;
  background-color:white;
`
export const ModalHeader = styled.div`
  width:100%;
  height:50px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:0 10px;
  box-sizing:border-box;
`
export const ModalMain = styled.div`
  width:100%;
  height:calc(100% - 50px);
  padding:0 10px;
  box-sizing:border-box;
  display:flex;
  flex-direction:column;
  align-items:center;
`

export const HiddenFileInput = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const UploadButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  & > img {
    height: 20px;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    & > img {
      height:15px;
      margin-right: 5px;
    }
  }
`;

export const FileUploadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleInput = styled.input`
  width:80%;
  border:#ccc 1px solid;
  font-size:20px;
  outline:none;
  padding:10px;
  box-sizing:border-box;
  margin-top:20px;
`
export const DescriptionArea = styled.textarea`
  width: 80%;
  border: #ccc 1px solid;
  outline:none;
  padding:10px;
  font-size: 16px;
  resize: none;
  height: 50%;
  box-sizing: border-box;
  margin-top: 20px;
`;
export const ButtonWrap = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const UploadedButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #a2ca71;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  & > img {
    height: 20px;
    margin-right: 10px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    & > img {
      height: 15px;
      margin-right: 5px;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #387f39;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    background-color: #1a5319;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;