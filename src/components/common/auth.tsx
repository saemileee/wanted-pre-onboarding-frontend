export function IdInput({ dataTestId }: { dataTestId: string }) {
  return <input type="text" placeholder="아이디" data-testid={dataTestId}></input>;
}

export function PasswordInput({ dataTestId }: { dataTestId: string }) {
  return <input type="password" placeholder="비밀번호" data-testid={dataTestId}></input>;
}

export function SubmitInput({ dataTestId, text }: { dataTestId: string; text: string }) {
  return (
    <input type="submit" data-testid={dataTestId}>
      {text}
    </input>
  );
}
