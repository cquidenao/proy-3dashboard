// Exporta esta función para usarla en app.js
export async function fetchExchangeRates() {
    try {
        // Envía una solicitud GET a la API de Frankfurter para obtener las tasas de cambio más recientes
        const response = await fetch(`https://api.frankfurter.app/latest`);

        // Verifica si la respuesta no es exitosa
        if (!response.ok) {
            throw new Error(`La solicitud a la API falló con el estado ${response.status}`);
        }

        // Analiza el cuerpo de la respuesta como JSON
        const data = await response.json();

        // Devuelve los datos de las tasas de cambio
        return data.rates;
    } catch (error) {
        // Si ocurre un error durante la solicitud o el análisis, relanza el error
        throw error;
    }
}
