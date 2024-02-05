import home from "./pages/home.js";
import about from "./pages/about.js";

function route() {
  //console.log(location)

  switch (location.hash.replace('#', '')) {
    case "about":
      console.log("ABOUT")
      $('main').html(about())
      break;
    case "":
      console.log("HOME", home())
      $('main').html(home())
      break;
    default:
      console.log("404 You've broken the internet")
  }

}

window.onhashchange = route
window.onload = route
