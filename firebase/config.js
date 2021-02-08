import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBuqsURYN--OCas0QoQSs2GQDzO1U0O9u8',
    authDomain: 'mekoom-54844.firebaseapp.com',
    databaseURL: 'https://mekoom-54844.firebaseio.com',
    projectId: 'mekoom-54844',
    storageBucket: 'mekoom-54844.appspot.com',
    messagingSenderId: '395378633157',
    appId: '1:395378633157:web:1393f787d1a27e679043ac',
    measurementId: 'G-LHK61HCMH9',
};

console.log('apps', firebase.apps);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
