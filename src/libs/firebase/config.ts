import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzs6IcfW1KKqmVGUCQwo1YpDew0SWyVco",
  authDomain: "todoay-todo.firebaseapp.com",
  projectId: "todoay-todo",
  storageBucket: "todoay-todo.appspot.com",
  messagingSenderId: "564167384454",
  appId: "1:564167384454:web:e7d9dfd91889049775e007",
  measurementId: "G-LBL5ZG34XV",
};

export const app = initializeApp(firebaseConfig);
