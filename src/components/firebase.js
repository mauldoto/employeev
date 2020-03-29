import firebase from 'firebase'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp(process.env.VUE_FIREBASE_CONFIG)

export default firebaseApp.firestore()