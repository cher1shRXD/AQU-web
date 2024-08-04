import useLogin from "../../hooks/login/useLogin";
import * as S from "./style";

const Login = () => {

  const { ...login } = useLogin();

  return (
    <S.Container>
      <S.LoginForm>
        <h2 style={{ color: "white" }}>아쿠클라우드 로그인</h2>
        <S.Input
          type="text"
          placeholder="아이디"
          name="username"
          onChange={login.handleLoginData}
          style={!login.usernameValid ? { border: "#FF6969 1px solid" } : {}}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              login.submit();
            }
          }}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={login.handleLoginData}
          style={!login.passwordValid ? { border: "#FF6969 1px solid" } : {}}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              login.submit();
            }
          }}
        />
        <S.Navigate to="/signup">처음이신가요?</S.Navigate>
        <S.Button onClick={login.submit} disabled={login.loading}>
          {!login.loading ? "로그인" : "로그인중..."}
        </S.Button>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
