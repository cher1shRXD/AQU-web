import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SignupType } from "../../types/signup/signup.type.js";
import NotificationService from "../../libs/toastify/notificationService";

const useSignup = () => {
  const [signupData, setSignupData] = useState<SignupType>({
    username: "",
    password: "",
  });
  const [passwordChk, setPasswordChk] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const [usernameValid, setUsernameValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [passwordChkValid, setPasswordChkValid] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSignupData = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSignupData((prev) => ({ ...prev, [name]: value.trim() }));
    },
    [setSignupData]
  );

  useEffect(() => {
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    if (regex.test(signupData.password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [signupData.password]);

  useEffect(() => {
    if (signupData.username.trim().length >= 4) {
      setUsernameValid(true);
    } else {
      setUsernameValid(false);
    }
  }, [signupData.username]);

  const handlePasswordChk = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordChk(e.currentTarget.value);
  };

  useEffect(() => {
    if (passwordChk === signupData.password) {
      setPasswordChkValid(true);
    } else {
      setPasswordChkValid(false);
    }
  }, [passwordChk, signupData.password]);

  const submit = async () => {
    if (
      signupData.password.trim().length > 0 &&
      passwordChk.trim().length > 0 &&
      signupData.username.trim().length > 0
    ) {
      setLoading(true);
      if (!loading) {
        if (!usernameValid && !passwordChkValid && !passwordValid) {
          NotificationService.error('모든조건을 충족시켜 주세요.');
          return;
        }
        try {
          await axios.post(`https://api-aqu.p-e.kr/auth/signup`, signupData);
          NotificationService.success("회원가입 성공");
          navigate("/login");
        } catch (err: any) {
          if (err.response.status === 409) {
            setUsernameValid(false);
            NotificationService.error("해당 아이디는 이미 사용중입니다.");
          }
        } finally {
          setLoading(false);
        }
      }
    } else {
      NotificationService.error("입력창을 모두 채워주세요.");
    }

  };

  return {
    signupData,
    handleSignupData,
    submit,
    loading,
    usernameValid,
    handlePasswordChk,
    passwordChk,
    passwordChkValid,
    passwordValid,
  };
};
export default useSignup;
