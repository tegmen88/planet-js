
// // Rendera planeter på sidan
export const renderPlanets = (bodies, onPlanetClick) => {
    const list = document.getElementById('planet-list');
    list.innerHTML = ''; // Rensa tidigare innehåll om det finns
  
    bodies.forEach((body) => {
      const planetDiv = document.createElement('div');
      planetDiv.className = 'planet';
  
      // Dynamisk stil baserat på data
      const size = Math.sqrt(body.circumference) / 5; // Skala ned storleken
      planetDiv.style.width = `${size}px`;
      planetDiv.style.height = `${size}px`;
      planetDiv.style.borderRadius = '50%';
    //   planetDiv.style.backgroundColor = body.type === 'planet' ? '#3498db' : '#f39c12'
      planetDiv.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
  
      planetDiv.textContent = body.name; // Planetens namn
      planetDiv.addEventListener('click', () => onPlanetClick(body)); // Klickhändelse
      list.appendChild(planetDiv);
    });
  };
    
  
  // Visa overlay med information om en planet
  export const showOverlay = (body) => {
    const overlay = document.getElementById('overlay');
  
    // Namn och beskrivning
    document.getElementById('planet-name').textContent = body.name;
    document.getElementById('planet-latin-name').textContent = body.latinName;
    document.getElementById('planet-desc').textContent = body.desc;
  
    // Detaljer i grid-layout
    // document.getElementById('circumference').textContent = `${body.circumference} km`;
    // document.getElementById('distance-from-sun').textContent = `${body.distance} km`;
    
    // Formatera tal med tusentalsavgränsare
    const formatNumber = (number) => new Intl.NumberFormat('sv-SE').format(number);
  
    // Lägg till formaterade värden med styling
    document.getElementById('circumference').innerHTML = `
        <span class="formatted-value">${formatNumber(body.circumference)}</span>
        <span class="unit">km</span>
    `;
    
    document.getElementById('distance-from-sun').innerHTML = `
        <span class="formatted-value">${formatNumber(body.distance)}</span>
        <span class="unit">km</span>
    `;
    
    document.getElementById('max-temp').textContent = `${body.temp.day}°C`;
    document.getElementById('min-temp').textContent = `${body.temp.night}°C`;
  
    // Månar
    const moonsList = document.getElementById('moons');
    moonsList.innerHTML = ''; // Rensa tidigare innehåll

    if (body.moons && body.moons.length > 0) {
      body.moons.forEach((moon) => {
        const moonItem = document.createElement('li');
        moonItem.textContent = moon;
        moonsList.appendChild(moonItem);
      });
    } else {
      const noMoons = document.createElement('li');
      noMoons.textContent = 'Inga månar';
      moonsList.appendChild(noMoons);
    }
  
      // Lägg till en unik klass om kroppen är solen
    //   if (body.name === 'Solen') {
    //     overlay.classList.add('sun-overlay');
    //   } else {
    //     overlay.classList.remove('sun-overlay');
    //   }
  
  
      // Generera 30 stjärnor
      for (let i = 0; i < 30; i++) {
        const star = document.createElement('div');
        star.className = 'stars';
    
        // Slumpmässiga positioner
        const x = Math.random() * 100; // Mellan 0% och 100%
        const y = Math.random() * 100;
    
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
    
        // Slumpmässig storlek
        const size = Math.random() * 3 + 1; // Mellan 1px och 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
    
        overlay.appendChild(star);
      }
  
      if (!overlay) {
        console.error('Element med id "overlay" hittades inte.');
        return;
      }
    
  
    // Visa overlay
    overlay.classList.remove('hidden');
  };
  
  export const hideOverlay = () => {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('hidden');
    console.log("closied overlay");
  };
  
  // Eventlyssnare för att stänga overlay
 // document.getElementById('close-overlay').addEventListener('click', hideOverlay);
  //const overlay = document.getElementById('overlay');
  
// en lyssnare för tangenttryckningar
document.addEventListener('keydown', (event) => {
    const overlay = document.getElementById('overlay');
    
    if ((event.key === 'Escape' || event.key === 'Enter') || !overlay.classList.contains('hidden')) {
      hideOverlay(); 
    } 

    // else if (!overlay.classList.contains('hidden')) {
    //   hideOverlay();
    // }
  });
  