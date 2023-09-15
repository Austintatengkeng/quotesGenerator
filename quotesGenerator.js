//initialize different components of quotes
const subjects = ['Life', 'Love', 'Success', 'Friendship', 'Happines'];
const verbs = ['insipires', 'nurtures', 'brings', 'fuels', 'embraces']; 
const objects = ['joy', 'growth', 'fullfillment', 'connections', 'positivity'];

//give a random
const randomSelector = arr => Math.floor(Math.random() * arr.length);

//Generate random quotes
const generateQuote = () => `${subjects[randomSelector(subjects)]} ${verbs[randomSelector(verbs)]} ${objects[randomSelector(objects)]}.`;

console.log(generateQuote());