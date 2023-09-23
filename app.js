// Importa los módulos necesarios desde fetch.js
import { fetchExchangeRates } from './fetch.js';

async function renderizarGrafico() {
    try {
        // Obtiene los datos de tasas de cambio usando la función fetchExchangeRates
        const tasasCambio = await fetchExchangeRates();

        // Extrae los símbolos de las monedas como etiquetas y los valores de las tasas de cambio
        const monedas = Object.keys(tasasCambio);
        const valoresTasasCambio = Object.values(tasasCambio);

        // Obtiene el elemento canvas para renderizar el gráfico
        const ctx = document.getElementById("graficoTasasCambio");

        // Crea un gráfico de barras utilizando Chart.js
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: monedas,
                datasets: [
                    {
                        label: "Tasas de Cambio",
                        data: valoresTasasCambio,
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        borderColor: "rgba(75, 192, 192, 1)",
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
                plugins: {
                    title: {
                        display: true,
                        text: "Tasas de Cambio",
                        padding: {
                            top: 50,
                            bottom: 30,
                        },
                    },
                },
            },
        });
    } catch (error) {
        // Maneja los errores si la obtención o renderización del gráfico falla
        console.error("Error al obtener las tasas de cambio:", error);
    }
}

// Llama a la función renderizarGrafico para mostrar el gráfico
renderizarGrafico();
