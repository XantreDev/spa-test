import React from 'react'
import { viewType } from '../SearchResults/SearchResults'
import ResultsCardContainer from './ResultsCardContainer/ResultsCardContainer';
import ResultsLineContainer from './ResultesLineContainer/ResultsLineContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import VideoWrapper from '../VideoWrapper/VideoWrapper';
import { searchState } from './../../../state/reducers/searchStateReducer';

type gridContainerTypes = typeof ResultsCardContainer | typeof ResultsLineContainer

const containerSwitcher: {[key in viewType]: gridContainerTypes} = {
    'cards': ResultsCardContainer,
    'list': ResultsLineContainer
}

export interface viewInterface{
    type: viewType
}

const ResultsGrid: React.FC<viewInterface> = ({type}) => {
    const GridContainer = containerSwitcher[type]

    const lastStorage: searchState = useSelector((state: RootState) => state.lastSearchState)
    const needCount = lastStorage.requiredCount
    const results = lastStorage?.result?.results
    const showableResults = results?.filter((data, index) => index < (needCount ?? 12))

    return (
        <GridContainer>
            {
                showableResults?.map(videoInfo => <VideoWrapper key={videoInfo.url} data={videoInfo} type={type}/>)
            }
        </GridContainer>
  )
}

export default ResultsGrid