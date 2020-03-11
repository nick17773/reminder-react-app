import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCB7m51_oZK3939je7oemVzp0ZYrv5VAfI",
    authDomain: "reminder-3109d.firebaseapp.com",
    databaseURL: "https://reminder-3109d.firebaseio.com",
    projectId: "reminder-3109d",
    storageBucket: "reminder-3109d.appspot.com",
    messagingSenderId: "144750278413"
};
firebase.initializeApp(config);
export default firebase;