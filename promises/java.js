const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

// let promise = new Promise(function (resolve, reject) {
//   reject("I am wrong");
// });

// promise.then((result = {}), (error = {}));

const ALL_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
let promise = getPromise( ALL_POKEMONS_URL );

let cosumer = () => {
  promise.then(
    (result) => {
      console.console.log({ result });
    },
    (error) => {
      console.log({ error });
    }
  );
};

consumer();
