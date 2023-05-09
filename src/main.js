import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBolt } from '@fortawesome/free-solid-svg-icons'

library.add(faBolt)

/* add font awesome icon component */
// createApp.component('font-awesome-icon', FontAwesomeIcon)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
