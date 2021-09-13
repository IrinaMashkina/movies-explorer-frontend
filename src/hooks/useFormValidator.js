import { useCallback, useState } from "react";

function useFormValidator() {
  const [inputValues, setInputValues] = useState({});
  const [errorMessages, setErrorMessages] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleInputChange(e) {
    setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    });
    setErrorMessages({
      ...errorMessages,
      [e.target.name]: e.target.validationMessage,
    });
    
    setIsValid(e.target.closest(".forms").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setInputValues(newValues);
      setErrorMessages(newErrors);
      setIsValid(newIsValid);
    },
    [setInputValues, setErrorMessages, setIsValid]
  )

  return {setInputValues, inputValues, errorMessages, isValid, handleInputChange, resetForm };

}

export default useFormValidator;
