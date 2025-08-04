import { repoPodcast } from "../repositories/podcast-repository";

export const serviceFilterEpisodes = async (podcastName: string|null) => {
    // A responsabilidade do serviço é apenas aplicar a regra de negócio,
    // não parsear a URL. Ele recebe o nome do podcast já limpo.
    const data = await repoPodcast(podcastName);
    return data;
};