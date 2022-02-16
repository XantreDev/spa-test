import React from 'react'
import { viewType } from '../SearchResults/SearchResults'

export interface FilterData {
    selected: viewType, setter: (arg: viewType) => void
}

const ShowSelector: React.FC<FilterData> = ({selected, setter}) => {
  return (
    <div>ShowSelector</div>
  )
}

export default ShowSelector