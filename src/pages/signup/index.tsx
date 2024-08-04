import useSignup from "../../hooks/signup/useSignup";
import * as S from "./style";

const Signup = () => {

  const { ...signup } = useSignup();

  return (
    <S.Container>
      <S.SignupForm>
        <h2 style={{ color: "white", marginBottom: "20px" }}>
          아꾸클라우드 회원가입
        </h2>
        <S.InputWrap>
          <S.Input
            type="text"
            placeholder="아이디"
            name="username"
            onChange={signup.handleSignupData}
            style={
              !signup.usernameValid && signup.signupData.username.length > 0
                ? { border: "#FF6969 1px solid" }
                : {}
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                signup.submit();
              }
            }}
          />
          {!signup.usernameValid && signup.signupData.username.length > 0 && (
            <S.RegexMsg>공백을 제외한 4글자 이상 작성해주세요.</S.RegexMsg>
          )}
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="password"
            placeholder="비밀번호"
            name="password"
            onChange={signup.handleSignupData}
            style={
              !signup.passwordValid && signup.signupData.password.length > 0
                ? { border: "#FF6969 1px solid" }
                : {}
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                signup.submit();
              }
            }}
          />
          {!signup.passwordValid && signup.signupData.password.length > 0 && (
            <S.RegexMsg>
              영문, 숫자, 특수문자를 포함해 8글자 이상 작성해주세요.
            </S.RegexMsg>
          )}
        </S.InputWrap>
        <S.InputWrap>
          <S.Input
            type="password"
            placeholder="비밀번호 확인"
            onChange={signup.handlePasswordChk}
            style={
              !signup.passwordChkValid && signup.passwordChk.length > 0
                ? { border: "#FF6969 1px solid" }
                : {}
            }
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                signup.submit();
              }
            }}
          />
          {!signup.passwordChkValid && signup.passwordChk.length > 0 && (
            <S.RegexMsg>비밀번호가 틀립니다.</S.RegexMsg>
          )}
        </S.InputWrap>
        <S.Navigate to="/login">회원이신가요?</S.Navigate>
        <S.Button onClick={signup.submit} disabled={signup.loading}>
          {!signup.loading ? "회원가입" : "회원가입 중..."}
        </S.Button>
      </S.SignupForm>
    </S.Container>
  );
};

export default Signup;
