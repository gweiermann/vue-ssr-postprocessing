import './assets/main.css'

import { createApp } from 'vue$'
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";

createApp({
    components: {
        HelloWorld,
        TheWelcome
    }
}).mount('#app')
