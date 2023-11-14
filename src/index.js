import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function (e) {
  alert("Bana tıkladın!");
});

// Kodlar buraya gelecek!

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("mouseover", function (e) {
    e.target.style.filter = "grayscale(1)";
  });
  element.addEventListener("mouseout", function (e) {
    e.target.style.filter = null;
  });
});

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("dblclick", function (e) {
    e.target.style.transform = "scale(0.5)";
  });
  element.addEventListener("click", function (e) {
    e.target.style.transform = null;
  });
});

window.addEventListener("load", (e) => {
  setTimeout(() => {
    document.querySelector("body").style.background = "#D83F31";
  }, "2000");
});

document.querySelectorAll("nav a").forEach((a) => {
  a.addEventListener("focus", function (e) {
    e.target.style.background = "#DCBFFF";
    e.target.style.fontSize = "20px";
  });
  a.addEventListener("blur", function (e) {
    e.target.style.color = "#7743DB";
  });
});

const password = document.querySelector('input[type="password"]');
password.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
  event.target.style.background = "";
});

document.querySelector("input").addEventListener("keydown", (e) => {
  if (e.key == 7) {
    document.querySelector("body").style.backgroundColor = "#9D76C1";
  }
  console.log(e.key);
  e.target.value = e.target.value.toUpperCase();
});

window.addEventListener("scroll", (e) => {
  setTimeout(() => {
    document.querySelector("header").style.backgroundColor = `rgb(
            ${Math.random() * 200},
            ${Math.random() * 200},
            ${Math.random() * 200}
          )`;
  }, "3000");
});

document.querySelectorAll("p").forEach((element) => {
  element.addEventListener("wheel", function (e) {
    e.target.style.color = "#F2E8C6";
  });
});

document.getElementById("myText").addEventListener("select", myFunction);

function myFunction() {
  alert("You selected some text!");
}

document
  .getElementById("myCheckbox")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
