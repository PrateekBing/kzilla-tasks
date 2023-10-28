const getPokemonDataAsyncAwait = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
      const data = await response.json();
      console.log('Using async/await:');
      console.log('Pokemon Name:', data.name);
      console.log('Abilities:', data.abilities.map(ability => ability.ability.name).join(', '));
    } catch (error) {
      console.error('Error fetching data using async/await:', error);
    }
  };
  
  getPokemonDataAsyncAwait();
//using Async Await to fetch data from the Pokemon API


  const getPokemonDataThenCatch = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/charizard')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => {
        console.log('Using .then()/.catch():');
        console.log('Pokemon Name:', data.name);
        console.log('Abilities:', data.abilities.map(ability => ability.ability.name).join(', '));
      })
      .catch(error => {
        console.error('Error fetching data using .then()/.catch():', error);
      });
  };
  
  getPokemonDataThenCatch();
//using .then() .catch() to fetch data from the Pokemon API