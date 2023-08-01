import useAuthForm from "../../hooks/useAuthForm";

export function EmailInputContainer({ dataTestId }: { dataTestId: string }) {
  const { isValid, validationMsg, handleFieldChange } = useAuthForm("signIn");

  return (
    <>
      <input
        type="text"
        placeholder="아이디"
        data-testid={dataTestId}
        onChange={(e) => handleFieldChange("email", e.target.value)}
      ></input>
      {!isValid ? <p>{validationMsg}</p> : null}
    </>
  );
}

export function PasswordInputContainer({ dataTestId }: { dataTestId: string }) {
  const { isValid, validationMsg, handleFieldChange } = useAuthForm("signIn");
  return (
    <>
      <input
        type="password"
        placeholder="비밀번호"
        data-testid={dataTestId}
        onChange={(e) => handleFieldChange("password", e.target.value)}
      ></input>
      {!isValid ? <p>{validationMsg}</p> : null}
    </>
  );
}

export function SubmitInput({ dataTestId, text }: { dataTestId: string; text: string }) {
  return <input type="submit" data-testid={dataTestId} value={text}></input>;
}
