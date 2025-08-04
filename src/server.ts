import * as http from 'http';
import { getFilterEpisodes, getListEpisodes } from './controllers/podscasts-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

const server = http.createServer(async(request : http.IncomingMessage, response : http.ServerResponse) => {// entra por uma request e sai pela response
    //querystring
    // Exemplo: http://localhost:3333/api/episode?podcastName=flow
    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];


    // Roteamento
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);

    } if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);

    }
});
const port = process.env.PORT 
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});