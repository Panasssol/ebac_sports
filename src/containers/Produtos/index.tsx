import { Produto as ProdutoType } from '../../types'
import ProdutoComponent from '../../components/Produto'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  isLoading: boolean
}

const ProdutosComponent = ({ produtos, isLoading }: Props) => {
  if (isLoading) {
    return <h2>Carregando...</h2>
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <ProdutoComponent key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent