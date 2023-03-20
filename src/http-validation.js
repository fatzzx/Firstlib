function filteringLink(arrLinks) {
  return arrLinks.map((objectLink) => Object.values(objectLink).join());
}

async function statusCheck(listUrls) {
  const arrayStatus = await Promise.all(
      listUrls.map(async (url) => {
        try {
            const response = await fetch(url);
            return response.status;
        } catch(error){
            return handlerErrors(error);
        }
    })
  );
  return arrayStatus;
}

function handlerErrors (error){
    if (error.cause.code === 'ENOTFOUND'){
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}

export default async function validList(linkList) {
  const links = filteringLink(linkList);
  const status =  await statusCheck(links);
  return linkList.map((objects, i) => ({
    ...objects, 
    status: status[i]
  }));
}


