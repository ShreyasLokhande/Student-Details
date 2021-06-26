import firebase from 'firebase'


var firebaseApp = firebase.initializeApp( {
    apiKey: "AIzaSyC1mty7280MEAyEYaDTZcDVQzrYn-A59Bg",
    authDomain: "engg-student.firebaseapp.com",
    projectId: "engg-student",
    storageBucket: "engg-student.appspot.com",
    messagingSenderId: "247707452282",
    appId: "1:247707452282:web:c3bf86e931588f58658cc3"
  })


var db = firebaseApp.firestore();


export {db};
