import { FilterPodcastModel } from "../models/filter-podcast-model";
import { repositoryPodcast  } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string): Promise<FilterPodcastModel> => {
 
    const data = await repositoryPodcast(podcastName);

  
    const responseFormat: FilterPodcastModel = {
        statusCode: StatusCode.NoContent,
        body: [],
    };

   
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
        responseFormat.body = data;
    }

    return responseFormat;
};