import chalk from "chalk";
import fs from "fs";


function errorMessage(error) {
  throw new Error(
    console.log(chalk.red(error.code, "Erro ao tentar achar o diretorio"))
  );
}

function extractLinks(text) {
    const regex =/\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const links = [...text.matchAll(regex)];
    const results = links.map(links => ({[links[1]]: links[2]}));
    return results.length !== 0 ? results: 'não há links no arquivo';
}


async function getFile(filePath) {
    try {
        const encoding = 'utf-8';
        const text = await fs.promises.readFile(filePath ,encoding);
        const links = extractLinks(text);
        return links;
    } catch (error){
        errorMessage(error);
    }
}


export default getFile;
