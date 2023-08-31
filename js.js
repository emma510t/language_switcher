"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

//console.log(texts[locale].texts);

//let locale = document.querySelector("option").value;

document.querySelectorAll("option").forEach((opt) => {
  opt.addEventListener("click", skiftText);
});
function skiftText(evt) {
  let locale = evt.target.value;

  console.log("heyo");

  texts[locale].texts.forEach((textob) => {
    console.log(textob.text);
    document.querySelector(textob.location).textContent = textob.text;
  });
}

//document.querySelector(texts[locale].texts[i].location).textContent = texts[locale].texts[i].text;
//document.querySelector(texts[locale].texts[0].location).textContent = texts[locale].texts[0].text;

/* let loact = "location";

document.querySelector("body.[da.loact]").textContent = texts[locale].texts[textt];
document.querySelector("body.[da.locat]").textContent = texts.da.texts[1].text;

function danskText() {
  document.querySelector(location).textContent = texts.da.texts.text;
}
 */
