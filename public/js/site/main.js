/*=================================================================
  Product detail page - Main image change when clicking thumbnails
==================================================================*/
$("#thumbnails img").on("click", function (e) {
  e.preventDefault()
  $("#main-image a").attr("href", $(this).attr("src"))
  $("#main-image img").attr("src", $(this).attr("src"))
})


