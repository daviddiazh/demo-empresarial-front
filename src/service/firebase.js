import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
        apiKey: "AIzaSyD33bYfYRzXTC6xkm2aA0w_LQV8qCOyqhY",
        authDomain: "app-questions-5b8c6.firebaseapp.com",
        projectId: "app-questions-5b8c6",
        storageBucket: "app-questions-5b8c6.appspot.com",
        messagingSenderId: "396055233774",
        appId: "1:396055233774:web:f8fba30d11d712d762dfff"
})

export const google = new firebase.auth.GoogleAuthProvider();