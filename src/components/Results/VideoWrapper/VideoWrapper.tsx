import React from "react";
import { VideoData } from "../../../types/stateTypes";
import { viewInterface } from "../ResultsGrid/ResultsGrid";
import { viewType } from "../SearchResults/SearchResults";
import VideoCardWrapper from "./VideoCardWrapper/VideoCardWrapper";
import VideoLineWrapper from "./VideoLineWrapper/VideoLineWrapper";

type gridContainerTypes = typeof VideoCardWrapper | typeof VideoLineWrapper;

const containerSwitcher: { [key in viewType]: gridContainerTypes } = {
    cards: VideoCardWrapper,
    list: VideoLineWrapper,
};

interface proxyWrapperInterface extends viewInterface {
    data: VideoData;
}

export interface cardData extends VideoData {
    viewsCountCaption: string;
}

const VideoWrapper: React.FC<proxyWrapperInterface> = ({ type, data }) => {
    const WrapperComponent = containerSwitcher[type];

    const getCountOfViewsCaption = (count: number) => {
        let unitsKeyword: viewsUnits = "";
        type viewsUnits = "" | "тыс." | "млн";
        if (count > 1_000_000) {
            count /= 1_000_000;
            unitsKeyword = "млн";
        } else if (count > 1_000) {
            count /= 1_000;
            unitsKeyword = "тыс.";
        }
        count = Math.round(count);
        const unitSpacing = unitsKeyword !== "" ? " " : "";

        return `${count} ${unitsKeyword}${unitSpacing} просмотров`;
    };

    const countOfViewsCaption = getCountOfViewsCaption(data.viewsCount);

    return (
        <WrapperComponent viewsCountCaption={countOfViewsCaption} {...data} />
    );
};

export default VideoWrapper;
