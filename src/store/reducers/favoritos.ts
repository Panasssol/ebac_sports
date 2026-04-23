import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../types'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const jaFavoritado = state.itens.find((item) => item.id === produto.id)

      if (jaFavoritado) {
        // Se já é favorito, remove (desfavoritar)
        state.itens = state.itens.filter((item) => item.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions

export default favoritosSlice.reducer