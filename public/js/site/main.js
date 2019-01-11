/*=================================================================
  Product detail page - Main image change when clicking thumbnails
==================================================================*/
$("#thumbnails img").on("click", function (e) {
  e.preventDefault()
  $("#main-image a").attr("href", $(this).attr("src"))
  $("#main-image img").attr("src", $(this).attr("src"))
})


/*=================================================================
  Product detail page - Selected color preview 
==================================================================*/
const changPreviewColor = () => {
  let selectedColor = $(".product-color-select option:selected").val()
  $(".product-color-preview").css("background-color", selectedColor)
}
$(".product-color-select").change(function () {
  changPreviewColor()
})
changPreviewColor()


/*=================================================================
  Products page - Sidebar
==================================================================*/
$("#menu-toggle").on("click", function (e) {
  e.preventDefault()
  $("#wrapper").toggleClass("toggled")
})


// TODO: modify this 
/*=================================================================
  Login
==================================================================*/
// I stored one id/pw on my firebase auth account
// - test@test.com / test123
/*
$("#login").on("click", function (e) {
  const auth = firebase.auth()

  // Get values from email/password input
  const email = $("#inputEmail").val()
  const password = $("#inputPassword").val()

  // prevent submitting form
  e.preventDefault()

  // firebase auth method referred from - 
  // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signInWithEmailAndPassword
  auth.signInWithEmailAndPassword(email, password)
    .then(function (user) {
      console.log(user)
      alert("logged in successfully")
      window.location = '/'
      $("#hi").hide()
    }).catch(function (error) {
      alert(error.message)
    })
})
*/
// I stored one id/pw on my firebase auth account in main.hbs
$("#signup").on("click", function (e) {
// Get values from email/password input
  const name = $("firstName").val()
  const email = $("#emailAddress").val()
  const password = $("#password").val()
  // prevent submitting form
  e.preventDefault()

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result)=>{
    console.log(result);

    var user = firebase.auth().currentUser;

user.updateProfile({
displayName: name,
photoURL: ""
}).then(() => {
console.log("login success");
// Update successful.
}).catch((error)=> {
console.log(error.message);
// An error happened.
});

  })
  .catch((error) => {

    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    console.log(errorMessage);
  });
  $("#logout").on("click", function (e) {

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("login success");
    alert("signout");
  }).catch(function(error) {
    console.log("fail");

    // An error happened.
  });
});
})