import { ChangeEventHandler } from "react"
import { InputWrapper } from "./style"

type PropsInput = {
  label: string
  type: string
  name: string
  value: string
  onChange: ChangeEventHandler
  validate: () => boolean;
  onBlur: () => boolean;
  error: string | null;
}

export const Input = ({ label, type, name, value, onChange, error, onBlur }: PropsInput) => {
  return (
    <InputWrapper>
      <label className="form-label" htmlFor={name}>{label}</label>
      <input className="form-input" id={name} name={name} value={value} onChange={onChange} onBlur={onBlur}/>
      {error && <p className="error-message">{error}</p>}
    </InputWrapper>
  )
}
