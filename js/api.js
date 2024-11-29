
const BASE_URL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com';

// Hämta API-nyckeln
export const getApiKey = async () => {
  const response = await fetch(`${BASE_URL}/keys`, { method: 'POST' });
  if (!response.ok) throw new Error('Failed to fetch API key');
  return response.json(); // Returnerar objektet: key och apinyckeln
};

// Hämta himlakroppar
export const getBodies = async (apiKey) => {
  const response = await fetch(`${BASE_URL}/bodies`, {
    method: 'GET',
    headers: { 'x-zocom': apiKey },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch celestial bodies: ${response.status}`);
  }

  const data = await response.json(); // Läser body och returnerar JSON
  console.log('API Response:', data); 
  return data;
};
