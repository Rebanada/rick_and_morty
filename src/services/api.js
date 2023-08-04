const dataApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => {
            const cleanData = data.results.map((rick) => {
                return {
                    image: rick.image,
                    name: rick.name,
                    status: rick.status,
                    species: rick.species,
                    planet: rick.location.name,
                    episodes: rick.episode,
                    id: rick.id,
                };
            });
            return cleanData;
        });
        
};

export default dataApi;