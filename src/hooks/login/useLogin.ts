
import React, { useCallback, useState } from "react";
import { LoginType } from "../../types/login/login.type.js";
import axios from "axios";
import NotificationService from "../../libs/toastify/notificationService";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [usernameValid, setUsernameValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleLoginData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      initValidState();
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    },
    [setLoginData]
  );

  const initValidState = () => {
    setPasswordValid(true);
    setUsernameValid(true);
  };

  const submit = async () => {
    if (loginData.username.length > 0 && loginData.password.length > 0) {
      setLoading(true);
      if (!loading) {
        try {
          const res = await axios.post(
            `https://api-aqu.p-e.kr/auth/login`,
            loginData
          );
          localStorage.setItem("ACCESS_TOKEN", res.data.accessToken);
          localStorage.setItem("REFRESH_TOKEN", res.data.refreshToken)
          NotificationService.success("로그인되었습니다.");
          navigate('/')
        } catch (err: any) {

          if (err.response.status === 404) {
            NotificationService.error('아이디을 확인해주세요.');
            setUsernameValid(false);
          }

          if (err.response.status === 401) {
            NotificationService.error("비밀번호를 확인해주세요.");
            setPasswordValid(false);
          }
        } finally {
          setLoading(false);
        }
      }
    } else {
      NotificationService.error("입력창을 모두 채워주세요.");
      if (loginData.username.length <= 0) {
        setUsernameValid(false);
      }
      if (loginData.password.length <= 0) {
        setPasswordValid(false);
      }
    }
  };

  return {
    loginData,
    handleLoginData,
    submit,
    loading,
    passwordValid,
    usernameValid,
  };
};
export default useLogin;