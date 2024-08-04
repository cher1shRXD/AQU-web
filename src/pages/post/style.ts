import styled from "styled-components";

export const Container = styled.div`
  width:100vw;
  height:100vh;
  padding-top:150px;
  box-sizing:border-box;
`
export const Main = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  flex-direction:column;
  padding: 20px 0;
  box-sizing:border-box;
`
export const Image = styled.img`
  height: 500px;
  border-radius:20px;
  overflow:none;
`
export const VideoWrap = styled.div`
  width: 90%;
  max-width: 900px;
  aspect-ratio: 16/9;
  border-radius: 20px;
  position: relative;
  overflow: none;
`;
export const Video = styled.video`
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
  border-radius:20px;
  outline:none;
  border:none;
`;

export const TitleWrap = styled.div`
  width:90%;
  max-width:900px;
  display:flex;
  flex-direction:column;
  border-bottom:1px solid #ccc;
  margin-top:20px;
  padding-bottom:10px;

`
export const Title = styled.h1`
  color:white;
`
export const Author = styled.h3`
  color:white;
  font-weight:300;
`
export const InteractionWrap = styled.div`
  width:100%;
  max-width:80px;
  height:40px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  align-self:flex-end;
`

export const Interaction = styled.img`
  height:90%;
  cursor: pointer;
`
export const DescripitionWrap = styled.div`
  font-size:16px;
  width:90%;
  max-width:900px;
  height:200px;
  box-sizing:border-box;
  padding:10px;
  color: #e5e5e5;
`