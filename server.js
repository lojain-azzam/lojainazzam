
// Require the necessary modules
const express = require('express');
const axios = require('axios');
const app = express();
const ejs = require('ejs');


app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    try {
       


        const pokemonIds = [2, 66, 71];
        const pokemonData = await Promise.all(pokemonIds.map(async (id) => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            return {
                
                name: response.data.name,
                order: response.data.order,
                type: response.data.types.map((type) => type.type.name).join('/'),
                image: response.data.sprites.front_default,
            };
        }));
 



        res.render('index', { pokemonData });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while fetching Pokémon data');
    }
});
// Start the server
app.listen(2224, () => {
    console.log('Server started on port 2224');
    console.log(' http://localhost:2224/');


});




















// // Require the necessary modules
// const express = require('express');
// const axios = require('axios');
// const app = express();
// const ejs = require('ejs');
// app.set('view engine', 'ejs');



// app.get('/', async (req, res) => 
// {


//   try {

//     const pokemonIds = [1, 22, 2];
//     const pokemonData = await Promise.all(pokemonIds.map(async (id) => {
//       const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
//       return {

//         name: response.data.name,

//         type: response.data.types.map((type) => type.type.name).join('/'),       
//         image: response.data.sprites.front_default,

//       };
//     }));

  
//     res.render('index', { pokemonData }); } 


//   catch (error) 
//   {
//     console.error(error);
//     res.status(500).send('An error occurred while fetching Pokémon data');
//   }
// });




// // Start the server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });
