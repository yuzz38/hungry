var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
     
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.paddingTop = '20px';
    } 
  });
}
$(".f-item-click").click(function(){
  $(".f-item-order-inner").toggleClass("f-item-order-inner--active");
  $(".main-acc").toggleClass("main-acc--active");
});
$(".header-menu").click(function(e){
  e.preventDefault();
  $(".header-menu-items").toggleClass("header-menu-items--active");
});