import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD4wdgjnPnSzXitWpbN2JLEkoas43wOuf0',
  authDomain: 'graphiql-app-58f7b.firebaseapp.com',
  projectId: 'graphiql-app-58f7b',
  storageBucket: 'graphiql-app-58f7b.appspot.com',
  messagingSenderId: '818807668012',
  appId: '1:818807668012:web:d10f21dd64783e62974089',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
