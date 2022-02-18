import React from 'react'
import FavoriteResults from '../components/FavoriteRequests/FavoriteRequests'
import Head from '../components/Head/Head'
import ModalWindow from '../components/ModalWindow/ModalWindow'
import PageContainer from '../UI/Container/PageContainer'
import Header from '../UI/Header/Header'

const FavoritesPage = () => {
  return (
    <React.Fragment>

        <Head />
        <PageContainer>
            <Header> Избранное </Header>    
            <FavoriteResults />
            
        </PageContainer>
        <ModalWindow/>
    </React.Fragment>
  )
}

export default FavoritesPage