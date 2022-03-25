import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importacion de estilos
import './assets/tailwind.css'

// Importación de firebase
// Importacion de firebase
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDoc, doc, addDoc, setDoc } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth"
import firebase from "firebase/compat/app"
import "firebase/compat/storage"
import "firebase/compat/auth"
import "firebase/compat/firestore"

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

// Comprobar el login del usuario
firebase.auth().onAuthStateChanged(async user => {

    var role = false
    if (user) {
        const docRef = doc(db, 'roles', user.uid)
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) { // Si existe guarda el rol
            role = docSnap.data().isAdmin
            console.log(docSnap.data());
        } else { // Si no existe lo inicializamos a false
            setDoc(docRef, {
                email: user.email,
                isAdmin: false
            })
        }
    }

    store.dispatch("fetchUser", {user, role});
});

var storage = firebase.storage()
// Inicialización firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

createApp(App).use(store).use(router).mount('#app')

export { db, auth, storage }
