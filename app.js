// Importa los módulos necesarios de fetch.js
import { fetchExchangeRates } from './fetch.js';

async function renderizarGrafico() {
    try {
        const tasasCambio = await fetchExchangeRates();

        const monedas = Object.keys(tasasCambio);
        const valoresTasasCambio = Object.values(tasasCambio);

        const ctx = document.getElementById("graficoTasasCambio");

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
        console.error("Error al obtener las tasas de cambio:", error);
    }
}

// Llama a la función renderizarGrafico para mostrar el gráfico
renderizarGrafico();
