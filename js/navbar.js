function classToggle() {
  let navs = document.querySelectorAll('.navbar-list');

  navs.forEach(nav => nav.classList.toggle('navbar-toggleshow'));
}

let button = document.querySelectorAll('.navbar-toggle');

  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', classToggle);
  }


$(".navbar-toggle").click(function(){
  $(".navbar-toggle").toggleClass("on off");
});
