import fs from "fs";//parcote que ja vem no node.js serve para manipular arquivos;
import path from "path";//le diretorios especificos 
import { PodcastModel } from "../models/podcast-model";



const pathData = path.join(__dirname,"../repositories/podcasts.json");//pega o diretorio do arquivo podcasts.json .
export const repoPodcast = async (podcastName?:string):Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");//le o arquivo podcasts.json
   let jsonFile = JSON.parse(rawData);//transforma o texto data em json.

    if(podcastName){
        jsonFile = jsonFile.filter((podcast:PodcastModel)=> podcast.podcastName.toLowerCase() === podcastName.toLowerCase());//filtra o jsonFile para retornar apenas o podcast com o nome especificado
    }
   
    return jsonFile;//retorna o jsonFile que contem os dados do podcasts.json

}
