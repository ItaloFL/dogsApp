import styled from "styled-components";



export const ButtonDelete = styled.button`
  background: #ddd;
  padding: .3rem .6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: .875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: .4rem;
  transition: .1s;

  &:focus,
  &:hover {
    outline: none;
    background: white;
    box-shadow: 0 0 0 3px #eee;
    border-color: #333;
  }
`