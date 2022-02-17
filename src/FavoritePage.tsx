import React from 'react'
import FavoriteResults from './components/FavoriteResults/FavoriteResults'
import Head from './components/Head/Head'
import ModalWindow from './components/ModalWindow/ModalWindow'

const FavoritePage = () => {
  return (
    <React.Fragment>

        <Head />
        <FavoriteResults />
        <ModalWindow/>
    </React.Fragment>
  )
}

export default FavoritePage