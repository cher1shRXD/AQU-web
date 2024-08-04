import styled from "styled-components";

export const Container = styled.div`
  width:100vw;
  height:100vh;
  overflow-y:scroll;
  box-sizing:border-box;
  padding-top:150px;
  box-sizing:border-box;
`
export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  place-items:center;
  padding: 50px;
  padding-top: 20px;
  grid-auto-rows: 270px;
  box-sizing: border-box;
  grid-gap: 30px;
  gap: 30px;
  margin-bottom: 50px;
`;

export const SearchConatiner = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
export const SearchInputWrap = styled.div`
  max-width: 700px;
  width:80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: calc(100% - 60px);
  height: 100%;
  padding: 0 20px;
  background-color: #5f5f5f;
  border: none;
  color: white;
  box-sizing: border-box;
  &::placeholder {
    color: #ccc;
  }
  font-size: 16px;
  transition: all 0.3s;
  outline: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #5f5f5f inset !important;
    box-shadow: 0 0 0 30px #5f5f5f inset !important;
    -webkit-text-fill-color: white !important;
  }
  border-radius: 50px 0 0 50px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const SearchBtn = styled.button`
  width: 60px;
  height: 100%;
  border: none;
  border-radius: 0 50px 50px 0;
  background-color: #5f5f5f;
  font-size: 20px;
`;