//casi no me sale está monda



const cabeceras = new Headers();
cabeceras.set("Content-Type","application/json");
cabeceras.set("Content-Encoding","Br");

async function peticion(url){
    const respuesta = await fetch(url);
    if(respuesta.ok){
        const info = await respuesta.json();
        return info;
    }else{
        return[];
    }
}

let urlfotos = "https://api.unsplash.com/photos"

async function traerfoto(){
    const fotos = await peticion(urlfotos);
    const listafotos = fotos.results;
    listafotos.forEach(function(fotos){
        console.log(fotos)
    });
}

traerfoto();