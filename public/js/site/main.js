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
