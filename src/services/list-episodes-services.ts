import { repositoryPodcast } from "../repositories/podcast-repository";

export const serviceListEpisodes = async ()=>{
    const data =  await repositoryPodcast();//chama a função repositoryPodcast que le o arquivo podcasts.json
  return data;
}