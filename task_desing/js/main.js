"use strict";

//var banner_width = 936;
//var banners_ul = banners.getElementsByTagName('ul');
//console.log(banners_ul);
var buttons = switchers.children;

console.log(buttons);

[].forEach.call(buttons, function (button) {
  button.onclick = change_button;
});

function change_button() {
  console.log(this.getAttribute("data-banner"));
  [].forEach.call(buttons, function (button) {
    button.removeAttribute("class");
  });
  this.setAttribute("class", "button-select");
  change_banner(this.getAttribute("data-banner"));
}

function change_banner(number_banner) {
  console.log(bannersList);
  bannersList.setAttribute("class", "magrin-left" + number_banner);
}