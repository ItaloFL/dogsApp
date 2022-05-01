import styled from 'styled-components'
import visualizarImg from '../../../../assets/visualizacao.svg'

export const FeedItemWrapper = styled.li`
  :nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    :nth-child(2) {
      grid-column: initial;
      grid-row: span initial;
    }
  }

  display: grid;
  border-radius: 0.2rem;
  overflow: hidden;
  cursor: pointer;

  div {
    grid-area: 1/1;
  }

  span {
    color: white;
    grid-area: 1/1;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: transparent;
    
    :hover {
      display: flex;
      background: rgba(0, 0, 0, 0.3);
      color: white;

      ::before {
        display: initial;
      }
    }

    ::before {
      width: 16px;
      height: 10px;
      content: '';
      display: inline-block;
      margin-right: .25rem;
      background: url(${visualizarImg}) no-repeat;
      display: none;
    } 
  }
`
