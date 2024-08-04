import * as S from './style';
import instance from '../../libs/axios/customAxios';
import { userStore } from '../../store/userStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const setUser = userStore(state=>state.setUser);
  const user = userStore(state=>state.user);
  const clearUser = userStore((state) => state.clearUser);

  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  const navigate = useNavigate();

  const userReq = async () => {
    const res = await instance.get('/auth/me');
    setUser(res.data);
  }

  useEffect(()=>{
    if(accessToken){
      userReq();
    }
  },[]);

  const logOut = () => {
    localStorage.clear();
    clearUser();
  }

  

  return (
    <S.Container>
      <S.LogoWrap 
        style={{cursor:'pointer'}}
        onClick={()=>{
          navigate('/');
        }}
      >
        <S.LogoImg src='/assets/logo.jpeg'/>
        <S.LogoTitle>Cloud</S.LogoTitle>
      </S.LogoWrap>
      {user.id !== 0 ? (
        <S.LogOut onClick={logOut}>
          로그아웃
        </S.LogOut>
      ) : (
        <S.ButtonWrap>
          <S.LoginButton to="/login">로그인</S.LoginButton>
          <S.SignupButton to="/signup">회원가입</S.SignupButton>
        </S.ButtonWrap>
      )}
    </S.Container>
  );
}

export default Header