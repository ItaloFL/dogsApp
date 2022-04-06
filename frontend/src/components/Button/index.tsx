import { StyledButton } from './style'

type PropsButton = {
  children: any
}

export const Button = ({children, ...props}: PropsButton) => {
  return (
    <StyledButton {...props}>{children}</StyledButton>
  )
}