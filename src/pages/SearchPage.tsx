import React from 'react'
import Head from '../components/Head/Head';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import Results from '../components/Results/Results';
import Search from '../components/Search/Search';
import useSyncSearch from '../hooks/useSyncSearch';

const SearchPage = () => {
    const canShow = useSyncSearch();

    return (
    <div>
    <React.Fragment>
        <Head />
        {canShow ? <Results /> : <Search />}
        <ModalWindow/>
    </React.Fragment>
    </div>
  )
}

export default SearchPage