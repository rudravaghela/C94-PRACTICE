
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAevIa4-QDFuuIa0qOwQu1sZurer1zIzAo",
    authDomain: "kwitter-8cc73.firebaseapp.com",
    databaseURL: "https://kwitter-8cc73-default-rtdb.firebaseio.com",
    projectId: "kwitter-8cc73",
    storageBucket: "kwitter-8cc73.appspot.com",
    messagingSenderId: "646103554819",
    appId: "1:646103554819:web:34dc5bb9c7ad80bdf46736"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
      });
  }