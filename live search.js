const search = document.getElementById('search');
const matchlist = document.getElementById('match-list');
//search states.json and filter it
const searchStates = async searchText => {
const res = await fetch(states.json);   
const states = await res.json();

console.log(states);
// get matches to current text input 
let matches = states.filter(states => {
   const regex = new RegExp('^${searchText}', 'gi'); 
   return states.name.match(regex) || state.abbr.match(regex);
 });
    if (searchText.length === 0) {
        matches= [];
        matchlist.innerHTML = '';
    }
 outputhtml(matches);   
};
// show results in html 
const outputhtml = matches => {
    if(matches.length > 0){
        const html =matches.map(match => `
        <div class="card card-body mb-1">
         <h4>${match.name} (${match.abbr})<span class="text-primary">${match.capital}</span></h4> 
        <small>lat: ${match.lat} / long: ${match.long}</small>
        </div>
        `).join('');
        matchlist.innerHTML = html;
    }
}
search.addEventListener('input',() => searchStates(search.value));
