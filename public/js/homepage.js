// fetching API data function 
function horoscopeDetials(zodiacSign){
    const URL ="https://aztro.sameerkumar.website/";
    fetch(`${URL}?sign=${zodiacSign}&day=today`,{
        method: 'POST'
    })
    .then(response => response.json())
    .then(showHoroscopeDetails); 
}