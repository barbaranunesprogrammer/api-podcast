import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services"
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { StatusCode } from "../utils/status-code";
import { URL } from "url";
import { FilterPodcastModel } from "../models/filter-podcast-model";

enum ContentType { JSON = "application/json" }

export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        const content = await serviceListEpisodes();
        response.writeHead(StatusCode.OK, { "Content-Type": ContentType.JSON });
        response.end(JSON.stringify(content));
    } catch (error) {
        console.error("Erro ao listar episódios:", error);
        response.writeHead(StatusCode.InternalServerError, { "Content-Type": ContentType.JSON });
        response.write(JSON.stringify({ message: "Erro interno do servidor." }));
        response.end();
    }
};

export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse
) => {
    try {
      
        const fullUrl = new URL(request.url!, `http://${request.headers.host}`);
        const podcastName = fullUrl.searchParams.get("podcastName");

       
        if (!podcastName) {
            response.writeHead(StatusCode.BadRequest, { "Content-Type": ContentType.JSON });
            response.write(JSON.stringify({ message: "O parâmetro 'podcastName' é obrigatório." }));
            response.end();
        }

        const content: FilterPodcastModel = await serviceFilterEpisodes(podcastName);

        response.writeHead(content.statusCode, { "Content-Type": ContentType.JSON });
        response.write(JSON.stringify(content.body))
        response.end();
    } catch (error) {
        console.error("Erro ao filtrar episódios:", error);
        response.writeHead(StatusCode.InternalServerError, { "Content-Type": ContentType.JSON });
        response.write(JSON.stringify({ message: "Erro interno do servidor." }));
        response.end();
    }
};