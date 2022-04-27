  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBZcy9zFF5Gp7J9i1IDgQMg1mXsnvGQEJM",
    authDomain: "anatieandacesde.firebaseapp.com",
    projectId: "anatieandacesde",
    storageBucket: "anatieandacesde.appspot.com",
    messagingSenderId: "843104609782",
    appId: "1:843104609782:web:2eb7ad9ee70e4c19ba93d7",
    measurementId: "G-KEPMSWR7CZ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);