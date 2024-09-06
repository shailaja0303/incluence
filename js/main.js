function toggleLanguage() {
  const content = document.getElementById("content");
  const langIcon = document.getElementById("language-icon");
  const currentLang = langIcon.textContent;

  if (currentLang === "EN") {
    langIcon.textContent = "RU";
    content.querySelector(".en").classList.add("hidden");
    content.querySelector(".ru").classList.remove("hidden");
  } else {
    langIcon.textContent = "EN";
    content.querySelector(".en").classList.remove("hidden");
    content.querySelector(".ru").classList.add("hidden");
  }
}

// Initialize the content based on the default language
document.addEventListener("DOMContentLoaded", function () {
  // Optionally set the initial language based on user preference or default
});

// add header and footer to all pages

// Load header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("header").innerHTML = data));

// Load footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

// Load the Lottie animation
var annni = lottie.loadAnimation({
  container: document.getElementById("lottie-container"), // The container element
  renderer: "svg", // Use 'svg' renderer
  loop: true, // Loop the animation
  autoplay: true, // Start playing automatically
  path: "https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e7ae0a3d160ce4d071b3fba_home-page.json", // Path to the animation JSON
});
var ani1 = lottie.loadAnimation({
  container: document.getElementById("lottie-container1"), // The container element
  renderer: "svg", // Use 'svg' renderer
  loop: true, // Loop the animation
  autoplay: true, // Start playing automatically
  path: "https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e7ae0a3d160ce4d071b3fba_home-page.json", // Path to the animation JSON
});
var lottieAnimation = lottie.loadAnimation({
    container: document.getElementById('lottie-container-service'), // the container for the animation
    renderer: 'svg', // use svg rendering
    loop: true, // loop the animation
    autoplay: true, // start automatically
    path: 'https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e7ae0a3d160ce4d071b3fba_home-page.json' // the path to the animation JSON file
  });
  
var animation = lottie.loadAnimation({
  container: document.querySelector(".lottie-steps"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e85992c05cae10de8d612c5_Steps.json",
//   path: "image/5e8c1092a4cc2dddaf9549f9_build.json",
});
var anima1 = lottie.loadAnimation({
    container: document.getElementById('lottie-animation'), // The container element
    renderer: 'svg', // Use 'svg' renderer
    loop: true, // Loop the animation
    autoplay: true, // Start playing automatically
    path: 'https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e8c1092a4cc2dddaf9549f9_build.json' // Path to the animation JSON
});
var circle = lottie.loadAnimation({
    container: document.getElementById('lottie-circle'), // The container element
    renderer: 'svg', // Use 'svg' renderer
    loop: true, // Loop the animation
    autoplay: true, // Start playing automatically
    path: 'https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e7f96e90c4ef4e215f8818b_service-3-page.json' // Path to the animation JSON
});
var orangestep = lottie.loadAnimation({
    container: document.getElementById('lottie-orangestep'), // the container for the animation
    renderer: 'svg', // use svg rendering
    loop: true, // loop the animation
    autoplay: true, // start automatically
    path: 'https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e85977852b076f766129086_Steps_orange.json' // the path to the animation JSON file
  });
  var circle1 = lottie.loadAnimation({
    container: document.getElementById('lottie-circle1'), // the container for the animation
    renderer: 'svg', // use svg rendering
    loop: true, // loop the animation
    autoplay: true, // start automatically
    path: 'https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e7af59f2c9596484af93ff8_service_3.json' // the path to the animation JSON file
  });
  var circle2 = lottie.loadAnimation({
    container: document.getElementById('lottie-circle2'), // the container for the animation
    renderer: 'svg', // use svg rendering
    loop: true, // loop the animation
    autoplay: true, // start automatically
    path: 'https://cdn.prod.website-files.com/5e5e9c49552a6004e4cd9c1f/5e7af59f2c9596484af93ff8_service_3.json' // the path to the animation JSON file
  });

