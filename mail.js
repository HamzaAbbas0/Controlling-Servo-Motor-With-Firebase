/*const firebaseConfig = {
    apiKey: "AIzaSyAN85KNgBXkM3mglfO7nPFN5U5Sy2tbV3M",
    authDomain: "servo-web.firebaseapp.com",
    databaseURL: "https://servo-web-default-rtdb.firebaseio.com",
    projectId: "servo-web",
    storageBucket: "servo-web.appspot.com",
    messagingSenderId: "946745822389",
    appId: "1:946745822389:web:7a978da251a023e35502fc"
  };*/

  const firebaseConfig = {
    apiKey: "AIzaSyDQJGsPVjfcvEtNUqONvgYTJdfO5ehz35o",
    authDomain: "sevocontrolling.firebaseapp.com",
    databaseURL: "https://sevocontrolling-default-rtdb.firebaseio.com",
    projectId: "sevocontrolling",
    storageBucket: "sevocontrolling.appspot.com",
    messagingSenderId: "313825512942",
    appId: "1:313825512942:web:49591bb72a14649360d2ff"
  };

firebase.initializeApp(firebaseConfig);

//reference to my database
var contactFormDB =firebase.database().ref("Servo_Motor_X_AXIS_Data");
var contactFormDB1 =firebase.database().ref("Servo_Motor_Y_AXIS_Data");
/*document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('slider');
    console.log(name);
    var servo =servo
    contactFormDB.set({servo:name});
    //saveMessages(name)
}
/*const saveMessages =(name)=>{
    var newContactForm= contactFormDB.push();

    newContactForm.set({
        servo:name,
    })
}
const getElementVal =(id) =>{
    return document.getElementById(id).value;
}*/

document.getElementById('slider')
    .addEventListener('input', evt => {
        a=evt.target.value
        contactFormDB.set({x_axis:a});
  console.log(a)
  var range=document.getElementById('slider')
  var output = document.getElementById("demo1");
  output.innerHTML = range.value;
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  
});

document.getElementById('slider1').addEventListener('input', evt => {
    b=evt.target.value
    slider.innerHTML = this.value;
    contactFormDB1.set({y_axis:b});
        
console.log(b)
var range=document.getElementById('slider1')
var output = document.getElementById("demo");
output.innerHTML = range.value;
slider.oninput = function() {
    output.innerHTML = this.value;
  }

});

