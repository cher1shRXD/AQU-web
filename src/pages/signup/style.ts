import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #2b2b2b;
`;

export const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #3f3f3f;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  @media (max-width: 600px) {
    padding: 15px;
  }
`;
export const InputWrap = styled.div`
  margin-bottom:15px;
`

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #5f5f5f;
  background-color: #5f5f5f;
  color: white;
  &::placeholder {
    color: #ccc;
  }
  border-radius: 3px;
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

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;

  &:active {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Navigate = styled(Link)`
  font-size: 15px;
  margin-bottom: 15px;
  color: #F1F1F1;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  width: 7rem;
`;

export const RegexMsg = styled.p`
  color: #ff6969;
  font-size: 13px;
  margin-top: 5px;
  height: 5px;
`;