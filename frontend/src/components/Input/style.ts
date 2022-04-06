import styled from "styled-components";




export const InputWrapper = styled.div`
  margin-bottom: 1rem;


  .form-input {
    border: 1px solid #eee;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: .8rem;
    border-radius: .4rem;
    background-color: #eee;
    transition: .2s;


    &:hover,
    &:focus {
      outline: none;
      border-color: #fb1;
      background-color: white;
      box-shadow: 0 0 0 3px #fea;
    }
  }

  .input-label {
    display: block;
    font-size: 1rem;
    line-height: 1;
    padding-bottom: .5rem;
  }

  .error-message {
    color: red;
  }
`