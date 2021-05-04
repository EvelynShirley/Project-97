var firebaseConfig = {
    apiKey: "AIzaSyDSOfqnhus914k4rs5hB_-wd8FMb-iDuIU",
    authDomain: "kwitter-e6d54.firebaseapp.com",
    databaseURL: "https://kwitter-e6d54-default-rtdb.firebaseio.com",
    projectId: "kwitter-e6d54",
    storageBucket: "kwitter-e6d54.appspot.com",
    messagingSenderId: "198276017801",
    appId: "1:198276017801:web:99ad50a4bc83bc961ce058"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("Username");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

  function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
      });

      localStorage.setItem("room_name",room_name);

      window.location="letschat_page.html";
  }

  function getData(){
    firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;
    });
});
  }

  getData();

  function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="letschat_page.html";
  }

  function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
  }