import { getApiKey, getBodies } from './api.js';
import { renderPlanets, showOverlay, hideOverlay } from './ui.js';

(async () => {
  try {

    // Hämta API-nyckeln
    const apiKeyResponse = await getApiKey();
    const apiKey = apiKeyResponse.key;

    // Hämta himlakroppar
    const response = await getBodies(apiKey);
    const bodies = response.bodies || response;
    console.log('Celestial bodies:', bodies);

    // Rendera planeter på sidan
    renderPlanets(bodies, (body) => showOverlay(body));

    // Lägg till eventlyssnare för att stänga overlay
    document.getElementById('close-overlay').addEventListener('click', hideOverlay);

  } catch (error) {
    console.error('Error:', error.message);
  }
})();
