import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li{
    display: flex;
    flex-direction: column;
    background: #FFF;
    border-radius: 4px;
    padding: 28px;

    img{
      align-self: center;
      max-width: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 10px;
    }

    >span{
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button{
      background: #42124C;
      color: #FFF;
      border: 0;
      border-radius: 6px;
      overflox: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s
      &:hover{
        background: ${darken(0.03,"#42124C")}
      }

      div{
        display: flex;
        align-items: center;

        padding: 12px;
        background: rgba(0,0,0,0.3);

        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;

        svg{
          margin-right: 5px;
        }
      }

      span{
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }

`;
