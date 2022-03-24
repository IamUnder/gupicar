import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importacion de estilos
import './assets/tailwind.css'

// Importación de firebase
// Importacion de firebase
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: process.env.VUE_APP_APIKEY,
    authDomain: process.env.VUE_APP_AUTHDOMAIN,
    projectId: process.env.VUE_APP_PROJECTID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_APPID,
    measurementId: process.env.VUE_APP_MESEASUREDMENTID
}

firebase.initializeApp(firebaseConfig)
var storage = firebase.storage()
// Inicialización firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

createApp(App).use(store).use(router).mount('#app')

export { db, auth, storage }
