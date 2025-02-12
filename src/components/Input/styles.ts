import styled from "@emotion/styled"

export const InputContainer = styled.div`
  width: 710;
  height: 48;
  top: 200px;
  left: 605px;
  gap: 14px;
  `

export const InputElement = styled.input`
   padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  outline: none;
  background: rgba(255, 255, 255, 0.3);
  color: white;

  &::placeholder {
    color: #a19f9f;
  }
`

export const ErrorMessage = styled.div`
  height: 18px;
  color: red;
  font-size: 18px;
`
