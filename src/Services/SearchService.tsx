import axios from "axios";

export interface videoData{
    title: string,
    image: string,
    channelTitle: string,
    viewsCount: number,
    url: string
}

export interface resultObject{
    totalResults: number,
    results: videoData[]
}

export default class searchService{
    private static apiKey = 'AIzaSyC3j5_7o6AmAJfHsbZvPW1gHImYEzQ8z_U'
    private static apiUrl = 'https://www.googleapis.com/youtube/v3'
    private static searchUrl = '/search'
    private static videosUrl = '/videos' 
    private static part = 'snippet'

    static searchParams = {
        key: this.apiKey,
        part: 'snippet',
        maxResults: 50,
        type: 'video'
    }

    static getVideoStatisticParams = {
        part: 'statistics',
        key: this.apiKey
    }

    static axiosYTInstance = axios.create({
        baseURL: this.apiUrl,
    })

    static async findVideos(searchRequest: string){
        const response = await this.axiosYTInstance({
            url: this.searchUrl,
            params: {
                ...this.searchParams,
                q: searchRequest
            }
        })

        const allIds = response.data.items.map((item: any) => item.id.videoId)
        console.log(allIds)
        const videoStatistics = await this.findVideoStatistics(allIds)
        console.log(videoStatistics)
        const videosData = response.data.items

        const results: videoData[] = []

        for (let i = 0; i < videosData.length; i++){
            results.push({
                title: String(videosData[i].snippet.title),
                channelTitle: String(videosData[i].snippet.channelTitle),
                viewsCount: Number(videoStatistics[i].statistics.viewCount),
                image: String(videosData[i].snippet.thumbnails.default.url),
                url: `https://youtu.be/${videosData[i].id.videoId}`
            })
        }

        const totalResults = Number(response.data.pageInfo.totalResults)

        const result: resultObject = {
            results,
            totalResults
        }

        return result
    }

    private static async findVideoStatistics(ids: string[]) {
        // axios({}).
        const params = new URLSearchParams()
        ids.forEach(id => params.append('id', id))
        params.append('part', this.getVideoStatisticParams.part)
        params.append('key', this.getVideoStatisticParams.key)

        const response = await this.axiosYTInstance({
            url: this.videosUrl,
            params 
        })

        return response.data.items
    }

    private static toResultsObject(data: {}){

    } 
}

// const quokka = 'aboba'

// var data
// searchService.findVideos('123').then(response => {
//     console.log(response)
// })