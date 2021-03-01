const search = document.getElementById('search');
const matchlist = document.getElementById('match-list');
//search states.json and filter it
const searchStates = async searchText => {
const res = await fetch('states.json');   
const states = await res.json();

console.log(states);
// get matches to current text input 
//let matches = states.filter(states => {
// const regex = new RegExp('^${searchText}', 'gi'); 
//    return states.name.match(regex) || state.abbr.match(regex);
// });
// console.log(matches);   
};
search.addEventListener('input',() => searchStates(search.value));
