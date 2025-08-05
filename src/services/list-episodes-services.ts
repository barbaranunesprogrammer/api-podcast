import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async ()=>{
  let responseFormat :FilterPodcastModel ={
    statusCode:0,
    body:[]
  };
    const data =  await repositoryPodcast();//chama a função repositoryPodcast que le o arquivo podcasts.json
    
        if (data.length !== 0) {
            responseFormat.statusCode = StatusCode.OK;
            responseFormat.body = data;
        }
    
        return responseFormat;
    };
