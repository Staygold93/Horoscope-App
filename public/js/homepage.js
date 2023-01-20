// function to select a zodiac card 
function selectCard(zodiacSign){
    horoscopeDetials(zodiacSign);
    changeImage(zodiacSign);
}

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

// / function to change the image based of of Zodiac Sign
function changeImage(zodaicSign){
    let zodiacPic = document.getElementById('zodaicPic'); 
    
    if (zodaicSign=='aries'){
      zodiacPic.setAttribute("src",`./images/constellations/aries.jpg`);
    }
    else if(zodaicSign=='taurus'){
          zodiacPic.setAttribute("src",`./images/constellations/taurus.jpg`);
    }
    else if(zodaicSign=='gemini'){
          zodiacPic.setAttribute("src",`./images/constellations/gemini.jpg`);
    }
    else if(zodaicSign=='cancer'){
          zodiacPic.setAttribute("src",`./images/constellations/cancer.jpg`);
    }
    else if(zodaicSign=='leo'){
          zodiacPic.setAttribute("src",`./images/constellations/leo.jpg`);
    }
    else if(zodaicSign=='virgo'){
          zodiacPic.setAttribute("src",`./images/constellations/virgo.jpg`);
    }
    else if(zodaicSign=='libra'){
          zodiacPic.setAttribute("src",`./images/constellations/libra.jpg`);
    }
    else if(zodaicSign=='scorpio'){
          zodiacPic.setAttribute("src",`./images/constellations/scorpio.jpg`);
    }
    else if(zodaicSign=='sagittarius'){
          zodiacPic.setAttribute("src",`./images/constellations/sagittarius.jpg`);
    }
    else if(zodaicSign=='capricorn'){
          zodiacPic.setAttribute("src",`./images/constellations/capricorn.jpg`);
    }
    else if(zodaicSign=='aquarius'){
          zodiacPic.setAttribute("src",`./images/constellations/aquarius.jpg`);
    }
    else {
          zodiacPic.setAttribute("src",`./images/constellations/pisces.jpg`);
    }
}