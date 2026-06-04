const marvel_heros = ["thor", "ItronMan", "spiderman"]
const dc_heros = ["superman", "flas","batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const all_heros= marvel_heros.concat(dc_heros)

//console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]

//console.log(all_new_heros);


const anotherArray = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity)

// console.log(real_another_array);



console.log(Array.isArray("shefali"))
console.log(Array.from("shefali"));

console.log(Array.from({name: "shefali"}));   //Intersting 

const score1 =100

const score2 =100
const score3=100

console.log(Array.of(score1,score2,score3));




