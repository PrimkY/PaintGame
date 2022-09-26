import './assets/styles/style.scss';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import React, {createContext} from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { initializeApp } from "firebase/app";
import firebaseConfig from '/src/constants/Firebase'

firebase.initializeApp(firebaseConfig);


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
        <App/>
);
