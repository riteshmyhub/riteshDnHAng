function navBarColor() {
  document.getElementById("top_contact_bar").style.background = "#D9D9D9";
  document.getElementById("ico_search_bar_moving").style.border =
    "1px solid white";
  document.getElementById("bgNavBar").style.background = "transparent";
  document.getElementById("logo_control_sub_home").style.width = "230px";
}
function navBarColorBefore() {
  document.getElementById("top_contact_bar").style.background = "#F5F5F5";
  document.getElementById("ico_search_bar_moving").style.border =
    "1px solid #E8E8E8";
  document.getElementById("bgNavBar").style.background = "white";
  document.getElementById("logo_control_sub_home").style.width = "180px";
}

//
function mainProducthoverin() {
  document.getElementById("style-3").style.height = "500px";
}
function mainProducthoverout() {
  document.getElementById("style-3").style.height = "auto";
}

// script for full page js plugin
$(document).ready(function () {
  $(".horizontals").pagepiling({
    menu: null,
    direction: "horizontal",
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: "swing",
    loopBottom: false,
    loopTop: false,
    css3: true,
    menu: "#menu",
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: ".section",
    animateAnchor: false,

    //events
    onLeave: function (index, nextIndex, direction) {},
    afterLoad: function (anchorLink, index) {},
    afterRender: function () {},
  });
});
