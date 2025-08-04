import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-services"
import { serviceFilterEpisodes } from "../services/filter-episodes";
import { StatusCode } from "../utils/status-code";


export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
  const content = await serviceListEpisodes();


    response.writeHead(StatusCode.OK, { 'content-type': "application/json" });//cabeçalho da resposta
    response.end(
        JSON.stringify(content) //converte o objeto em string JSON e envia a resposta
           
      
    )
}

export const getFilterEpisodes = async (request: IncomingMessage, response: ServerResponse) => {
const content = await serviceFilterEpisodes(request.url)
  
    response.writeHead(StatusCode.OK, { 'content-type': "application/json" });//cabeçalho da resposta
    response.end(
        JSON.stringify(content) //converte o objeto em string JSON e envia a resposta
    )
};
