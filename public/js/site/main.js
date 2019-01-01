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
    }).catch(function (error) {
      alert(error.message)
    })
})