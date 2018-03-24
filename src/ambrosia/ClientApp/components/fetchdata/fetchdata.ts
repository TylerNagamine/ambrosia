import Vue from 'vue';

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

export default Vue.extend({
    data() {
        return {
            forecasts: [] as WeatherForecast[],
        };
    },
    mounted() {
        fetch('api/SampleData/WeatherForecasts')
        .then(response => response.json() as Promise<WeatherForecast[]>)
        .then(data => {
            this.forecasts = data;
        });
    },
});
