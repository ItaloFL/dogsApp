import { useState } from 'react'

type IType = {
  regex: RegExp
  message: string
}

type IValidations = {
  [type: string]: IType
}

const validations: IValidations = {
  email: {
    regex:
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    message: 'Preencha um email válido'
  }
}

export const useForm = (type?: string | false) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState<null | string>(null)

  function validate(value: string) {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if (type && !validations[type].regex.test(value)) {
      setError(validations[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({ target }: any) {
    if(error) validate(target.value)
    setValue(target.value)
  }

  return { value, setValue, onChange, validate: () => validate(value), onBlur: () => validate(value), error}
}
