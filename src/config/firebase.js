import firebase from "firebase";

const config = {
    apiKey: "AIzaSyB1TGmXLE0JsK8PI0yZIMwhQhOanhJO63c",
    authDomain: "sit-tam-sai.firebaseapp.com",
    databaseURL: "https://sit-tam-sai.firebaseio.com",
    projectId: "sit-tam-sai",
    storageBucket: "sit-tam-sai.appspot.com",
    messagingSenderId: "758854479849"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;

export const db = firebase.database();

export const getAll = (collection) => db.ref(`${collection}`)

export const getOne = (collection, attr) => db.ref(`${collection}/${attr}`)

export const insert = (collection, value) => db.ref(`${collection}`).set({ ...value })

export const auth = firebase.auth