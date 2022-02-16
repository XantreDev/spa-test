import React from 'react'
import { viewInterface } from '../ResultsGrid/ResultsGrid'
import { viewType } from '../SearchResults/SearchResults'
import VideoCardWrapper from './VideoCardWrapper/VideoCardWrapper'
import VideoLineWrapper from './VideoLineWrapper/VideoLineWrapper'


type gridContainerTypes = typeof VideoCardWrapper | typeof VideoLineWrapper

const containerSwitcher: {[key in viewType]: gridContainerTypes} = {
    'cards': VideoCardWrapper,
    'list': VideoLineWrapper
}

interface proxyWrapperInterface extends viewInterface {
    data: cardData
}

export interface cardData{}


const VideoWrapper: React.FC<proxyWrapperInterface> = ({type, data}) => {
    const WrapperComponent = containerSwitcher[type]
    return (
        <WrapperComponent {...data}/>
  )
}

export default VideoWrapper