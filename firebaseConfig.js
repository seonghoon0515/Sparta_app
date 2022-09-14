import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyBX3dZ0AeNl5E7Y9GLdCk0UeAmWdoEYePE",
  authDomain: "sparta-myhoneytip-578ad.firebaseapp.com",
  databaseURL: "https://sparta-myhoneytip-578ad-default-rtdb.firebaseio.com",
  projectId: "sparta-myhoneytip-578ad",
  storageBucket: "sparta-myhoneytip-578ad.appspot.com",
  messagingSenderId: "582008688582",
  appId: "1:582008688582:web:156a733239cd3e1ab46cc7",
  measurementId: "G-NQ4071TM82"
};

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()