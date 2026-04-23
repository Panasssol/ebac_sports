import styled from 'styled-components'

export const Produto = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Capa = styled.div`
  img {
    max-width: 100%;
  }
`

export const Titulo = styled.h3`
  font-size: 14px;
  margin: 8px 0;
`

export const Prices = styled.p`
  font-size: 14px;
  margin-bottom: 12px;

  span {
    display: block;
    text-decoration: line-through;
  }
`

export const BtnComprar = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #000;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin-top: 8px;

  &:hover {
    background-color: #eb9b00;
  }
`