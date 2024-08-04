import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100vh;
  overflow-y:scroll;
  box-sizing:border-box;
  padding-top:70px;
`
export const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 10px;
  padding-top: 20px;
  grid-auto-rows: 400px;
  box-sizing: border-box;
  grid-gap: 30px;
  gap: 30px;
  margin-bottom: 50px;
`;