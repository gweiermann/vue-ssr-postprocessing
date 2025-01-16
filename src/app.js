import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import {createSSRApp} from "vue$";

export default function createVueApp(template) {
    return createSSRApp({
        template,
        components: {
            HelloWorld,
            TheWelcome
        }
    })
}