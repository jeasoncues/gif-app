export const getGifs = async ( categories ) => {

    const url  = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( categories )}&limit=10&api_key=mZviDqjHs3fNVUCAHwJ2J32tzw0e2kmp`;
    const resp =  await fetch( url );
    const { data }  =  await resp.json();


    const gifs = data.map( gif => {
       return {
           id: gif.id,
           title: gif.title,
           url: gif.images?.downsized_medium.url
       }

    })

    return gifs;

  }