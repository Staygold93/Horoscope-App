// fetching API data function 
function horoscopeDetials(zodiacSign){
    const URL ="https://aztro.sameerkumar.website/";
    fetch(`${URL}?sign=${zodiacSign}&day=today`,{
        method: 'POST'
    })
    .then(response => response.json())
    .then(showHoroscopeDetails); 
}

// function to render the API data into the modal 
function showHoroscopeDetails(response,zodaicSign){
    let current_date = document.getElementById('current_date');
    let today = new Date().toString().split(' ').splice(1,3).join(' ');
    current_date.innerText = today;

    let lucky_time = document.getElementById('lucky_time');
    lucky_time.innerText= `${response.lucky_time}`;

    let lucky_number = document.getElementById('lucky_number');
    lucky_number.innerText = `${response.lucky_number}`;
    
    let color = document.getElementById('color');
    color.innerText = `${response.color}`;

    let mood = document.getElementById('mood');
    mood.innerText = `${response.mood}`;

    let description = document.getElementById('description');
    description.innerText = `${response.description}`;
}