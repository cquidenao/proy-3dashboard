// Exporta esta función para usarla en app.js
export async function fetchExchangeRates() {
    try {
        const response = await fetch("https://api.frankfurter.app/latest");
        if (!response.ok) {
            throw new Error(`La solicitud a la API falló con el estado ${response.status}`);
        }
        const data = await response.json();
        return data.rates;
    } catch (error) {
        throw error;
    }
}