import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1E88E5',
                secondary: '#D81B60',
                accent: '#1565C0',
                error: '#B71C1C',
            },
        },
    },
});