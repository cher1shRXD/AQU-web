import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #2b2b2b;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  @media (max-width: 600px) {
    height: 100px;
  }
`;
export const ButtonWrap = styled.div`
  width:160px;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
export const LoginButton = styled(Link)`
  border: 1px #007bff solid;
  border-radius: 5px;
  text-decoration: none;
  color: #007bff;
  width:70px;
  height:30px;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const SignupButton = styled(Link)`
  border: 1px #ccc solid;
  border-radius: 5px;
  text-decoration: none;
  color: #ccc;
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoWrap = styled.div`
  width: 210px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    width: 130px;
  }
`;
export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 80px;
  object-fit: cover;
  object-position: center;
  @media (max-width: 600px) {
    width: 70px;
    height: 70px;
  }
`;
export const LogoTitle = styled.h1`
  color: white;
  font-size: 50px;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
  align-self: flex-end;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    font-size:30px;
  }
`;
export const LogOut = styled.button`
  background-color: #ff6969;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  color: white;
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  @media (max-width: 600px) {
    width:70px;
    height:30px;
    font-size: 14px;
  }
`;