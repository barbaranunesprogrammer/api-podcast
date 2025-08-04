import { repoPodcast } from "../repositories/podcast-repository";

export const serviceListEpisodes = async ()=>{
    const data =  await repoPodcast();//chama a função repositoryPodcast que le o arquivo podcasts.json
  return data;
}