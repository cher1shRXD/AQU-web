import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:270px;
  background-color:white;
  transition: all 0.5s 0.1s;
  &:hover{
    transform:translateY(-20px);
  }
  cursor: pointer;
  color:#2b2b2b;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`
export const TextWrap = styled.div`
  width:100%;
  height:30px;
  display:flex;
  align-items:center;
  padding:0 10px;
  box-sizing:border-box;
  color:black;
`
export const FileType = styled.div`
  width:100%;
  height:calc(100% - 90px);
  margin:0;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const FileTypeIcon = styled.img`
  width:40%;
`