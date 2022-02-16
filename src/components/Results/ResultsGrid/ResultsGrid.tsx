import React from 'react'
import { viewType } from '../SearchResults/SearchResults'
import ResultsCardContainer from './ResultsCardContainer';
import ResultsLineContainer from './ResultsLineContainer';

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

    const results = []

    return (
        <GridContainer>

        </GridContainer>
  )
}

export default ResultsGrid