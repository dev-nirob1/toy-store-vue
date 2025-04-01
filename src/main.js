import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BaseImage from './components/element/BaseImage.vue'
import BaseButton from './components/element/BaseButton.vue'
import InputField from './components/element/InputField.vue'
import FormComponent from './components/widgets/FormComponent.vue'
import BaseTitle from './components/element/BaseTitle.vue'
import HeroTitle from './components/element/HeroTitle.vue'
import BaseTextArea from './components/element/BaseTextArea.vue'
import ListItem from './components/element/ListItem.vue'
import BaseParagraph from './components/element/BaseParagraph.vue'

const app = createApp(App)
app.use(router)

// Register global components
app.component('HeroTitle', HeroTitle)
app.component('BaseTitle', BaseTitle)
app.component('BaseImage', BaseImage)
app.component('BaseButton', BaseButton)
app.component('InputField', InputField)
app.component('BaseTextArea', BaseTextArea)
app.component('FormComponent', FormComponent)
app.component('ListItem', ListItem)
app.component('BaseParagraph', BaseParagraph)


app.use(createPinia())

app.mount('#app')
