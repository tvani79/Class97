
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC6ZdOWqOv59UbrIh_YG3zpgUG-zqnX4F8",
      authDomain: "kwitter-test-83f47.firebaseapp.com",
      databaseURL: "https://kwitter-test-83f47-default-rtdb.firebaseio.com",
      projectId: "kwitter-test-83f47",
      storageBucket: "kwitter-test-83f47.appspot.com",
      messagingSenderId: "964153419668",
      appId: "1:964153419668:web:ce4999c1887496d3bd9181"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + " !";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

function getData() {
firebase.database().ref("/").on('value', function(snapshot) {
document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
Room_names = childKey;
     //Start code
console.log("room name" + Room_names);
row = "<div class='room_name' id= "+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}