// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDIjey6qSWuZ3bMyJvCbjpGUjwfdjG-ko0",
    authDomain: "dashboard-84a76.firebaseapp.com",
    databaseURL: "https://dashboard-84a76.firebaseio.com",
    projectId: "dashboard-84a76",
    storageBucket: "dashboard-84a76.appspot.com",
    messagingSenderId: "210552530619",
    appId: "1:210552530619:web:3610fa9dd9bfa531a4eb9e",
    measurementId: "G-W8TE09FJQ1"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//var database = firebase.database().ref('eventsBookings');
//console.log("Firebase: ", firebase)


function makeBooking() {

    $('#loader').addClass('show');

    let client = $('#customerName').val()
        //var ref = firebase.database().ref('munchbowOrders');
    let booking = {
        "id": client.substring(0, 2) + Math.floor(Math.random() * 10000000 + 1),
        "Client": $('#customerName').val(),
        "Phone": $('#phone').val(),
        "Email": $('#email').val(),
        "ProposedDate": $('#proposed_date').val(),
        "Location": $('#location').val(),
        "EventType": $('#eventTypes').find('option:selected').text(),
        "NumberOfGuests": $('#numberOfPeople').find('option:selected').text()

    }
    firebase.database().ref('eventsBookings/' + booking.id).set(booking);


    alert("Your request has successfully been sent")


    // document.getElementById('myModal').dismiss = true;
    setTimeout(function() {

        window.location = 'index.html'
    }, 3000); // Delay 1sec for the file collection to be loaded completely...
}