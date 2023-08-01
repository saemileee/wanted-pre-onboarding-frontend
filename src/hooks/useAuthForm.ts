import { useState } from "react";
import useValidation from "./useValidation";
import * as AuthType from "../interface/Auth";

function useAuthForm(type?: AuthType.Type) {
  // 훅을 다시 쓸 때 마다 아래 함수가 초기화 되기 때문에 상태관리 방법을 바꿔야함
  const [formData, setFormData] = useState<AuthType.Form>({
    email: "",
    password: "",
  });

  const { isValid, validationMsg, handleValidator } = useValidation();

  const handleFieldChange = (field: AuthType.Field, value: string) => {
    console.log(formData);
    handleValidator(field, value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return { isValid, validationMsg, formData, handleFieldChange, handleSubmit };
}

export default useAuthForm;
