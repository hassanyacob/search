const search = document.getElementById('search');
const matchlist = document.getElementById('match-list');
//search states.json and filter it
const searchStates = async searchText =>{
const res = await fetch(state_capitals.json);   
const states = await res.json():

console.log(states);
}
search.addEventListener('input',() => searchStates(search.value));
