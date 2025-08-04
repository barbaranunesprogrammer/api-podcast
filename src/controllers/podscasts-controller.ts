import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services"
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { StatusCode } from "../utils/status-code";
import { URLSearchParams } from "url";


export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        const content = await serviceListEpisodes();

        response.writeHead(StatusCode.OK, { 'content-type': "application/json" });
        response.end(JSON.stringify(content));
    } catch (error) {
        console.error("Erro ao listar episódios:", error);
        response.writeHead(StatusCode.InternalServerError, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor. Verifique os logs." }));
    }
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
    try {
        // 1. Extrai a query string da URL da requisição
        const [, querystring] = request.url?.split("?") ?? ["", ""];
        const urlParams = new URLSearchParams(querystring);
        const podcastName = urlParams.get("podcastName");

        // 2. Valida se o parâmetro foi enviado. Se não, retorna um erro.
        if (!podcastName) {
            response.writeHead(StatusCode.BadRequest, { "Content-Type": "application/json" });
            return response.end(
                JSON.stringify({ message: "Parâmetro 'podcastName' é obrigatório." })
            );
        }

        // 3. Chama o serviço passando apenas o dado necessário (o nome do podcast)
        const content = await serviceFilterEpisodes(podcastName);

        response.writeHead(StatusCode.OK, { 'content-type': "application/json" });
        response.end(JSON.stringify(content));
    } catch (error) {
        console.error("Erro ao filtrar episódios:", error);
        response.writeHead(StatusCode.InternalServerError, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "Erro interno do servidor. Verifique os logs." }));
    }
}
