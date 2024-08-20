// Módulo API
async function fetchFromAPI(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error al obtener datos de la API:', error.message);
    return [];
  }
}

// Funciones de la API de Zelda
async function fetchGames(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/games?limit=${limit}`);
}

async function fetchBosses(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/bosses?limit=${limit}`);
}

async function fetchDungeons(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/dungeons?limit=${limit}`);
}

async function fetchCharacters(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/characters?limit=${limit}`);
}

async function fetchCreatures(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/creatures?limit=${limit}`);
}

async function fetchItems(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/items?limit=${limit}`);
}

async function fetchPlaces(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/places?limit=${limit}`);
}

async function fetchWeapons(limit = 5) {
  return await fetchFromAPI(`https://zelda.fanapis.com/api/weapons?limit=${limit}`);
}

// Funciones de menú y ejecución
function showMenu() {
  return prompt(
    "Menú de Zelda API:\n" +
    "1. Mostrar 5 juegos de Zelda\n" +
    "2. Mostrar 10 juegos de Zelda\n" +
    "3. Mostrar 5 jefes de Zelda\n" +
    "4. Mostrar 10 jefes de Zelda\n" +
    "5. Mostrar 5 mazmorras de Zelda\n" +
    "6. Mostrar 10 mazmorras de Zelda\n" +
    "7. Mostrar 5 personajes de Zelda\n" +
    "8. Mostrar 10 personajes de Zelda\n" +
    "9. Mostrar 5 criaturas de Zelda\n" +
    "10. Mostrar 10 criaturas de Zelda\n" +
    "11. Mostrar 5 ítems de Zelda\n" +
    "12. Mostrar 10 ítems de Zelda\n" +
    "13. Mostrar 5 lugares de Zelda\n" +
    "14. Mostrar 10 lugares de Zelda\n" +
    "15. Mostrar 5 armas de Zelda\n" +
    "16. Mostrar 10 armas de Zelda\n" +
    "17. Mostrar 5 juegos, jefes y mazmorras de Zelda\n" +
    "18. Mostrar 10 personajes, criaturas y armas de Zelda\n" +
    "19. Mostrar 5 lugares y 5 armas de Zelda\n" +
    "20. Mostrar 10 juegos y 10 ítems de Zelda\n" +
    "0. Salir\n" +
    "Elige una opción:"
  );
}

async function executeOption(option) {
  let results = [];
  
  switch (option) {
    case "1":
      results = await fetchGames(5);
      break;
    case "2":
      results = await fetchGames(10);
      break;
    case "3":
      results = await fetchBosses(5);
      break;
    case "4":
      results = await fetchBosses(10);
      break;
    case "5":
      results = await fetchDungeons(5);
      break;
    case "6":
      results = await fetchDungeons(10);
      break;
    case "7":
      results = await fetchCharacters(5);
      break;
    case "8":
      results = await fetchCharacters(10);
      break;
    case "9":
      results = await fetchCreatures(5);
      break;
    case "10":
      results = await fetchCreatures(10);
      break;
    case "11":
      results = await fetchItems(5);
      break;
    case "12":
      results = await fetchItems(10);
      break;
    case "13":
      results = await fetchPlaces(5);
      break;
    case "14":
      results = await fetchPlaces(10);
      break;
    case "15":
      results = await fetchWeapons(5);
      break;
    case "16":
      results = await fetchWeapons(10);
      break;
    case "17":
      results = [...await fetchGames(5), ...await fetchBosses(5), ...await fetchDungeons(5)];
      break;
    case "18":
      results = [...await fetchCharacters(10), ...await fetchCreatures(10), ...await fetchWeapons(10)];
      break;
    case "19":
      results = [...await fetchPlaces(5), ...await fetchWeapons(5)];
      break;
    case "20":
      results = [...await fetchGames(10), ...await fetchItems(10)];
      break;
    case "0":
      console.log("Gracias por usar Zelda API 😋");
      return true;
    default:
      console.log("Opción no válida. Intenta de nuevo.");
      return false;
  }

  if (results.length > 0) {
    console.log(results.map((item, index) => `${index + 1}. ${item.name}`).join("\n"));
  } else {
    console.log("No se encontraron resultados, Paila mijo");
  }

  return false;
}

async function run() {
  let exit = false;
  while (!exit) {
    const option = showMenu();
    exit = await executeOption(option);
  }
}

// Ejecutar la aplicación
run();
