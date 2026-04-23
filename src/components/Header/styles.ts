import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: #fff;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  margin-top: 16px;

  h1 {
    color: #eb9b00;
  }

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 8px;
    }

    .favoritos {
      margin-right: 24px;
    }
  }
`