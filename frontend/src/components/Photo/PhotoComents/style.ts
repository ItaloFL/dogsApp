import styled from 'styled-components'

export const ComentsWrapper = styled.ul`
  overflow-y: auto;
  word-break: break-word;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.2;
    padding: 0 2rem;
  }

  ::-webkit-scrollbar {
    
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #eee;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 10px;
  }
`
