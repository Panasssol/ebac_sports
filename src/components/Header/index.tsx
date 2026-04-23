import { useSelector } from 'react-redux'

import { RootState } from '../../store'

import * as S from './styles'

import cesta from '../../assets/cesta.png'

const Header = () => {
  // Lendo direto do store via useSelector — sem prop drilling
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    return (acc += item.preco)
  }, 0)

  return (
    <S.HeaderContainer>
      <h1>EBAC Sports</h1>
      <div>
        <span className="favoritos">
          {favoritos.length} <strong>favoritos</strong>
        </span>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total:{' '}
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(valorTotal)}
          </strong>
        </span>
      </div>
    </S.HeaderContainer>
  )
}

export default Header