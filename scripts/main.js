const myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");
const items = document.querySelectorAll("#myList li");

const myParagraph = document.getElementById("changingParagraph")

items.forEach(item => {
    item.addEventListener("click", () => {
        if (item.textContent == "Äppelviken") {
            myImage.setAttribute("src", "images/Äppelviken,_Snäckvägen_22,_2012.jpg");
            myHeading.textContent = "Äppelviken";
            myParagraph.textContent = "When you go by Nockebybanan from Alvik, you'll first arrive at Äppelviken. " +
                                      "Äppelviken was mostly built during the 1910s and 1920s, and was the earliest built of the five districts. " +
                                      "The houses are often in the National Romantic style or 1920s classicism.";
        }
        else if (item.textContent == "Smedslätten") {
            myImage.setAttribute("src", "images/Smedslatten_2008c.jpg");
            myHeading.textContent = "Smedslätten";
            myParagraph.textContent = "After Äppelviken, the next stop when you go by Nockebybanan from Alvik is Smedslätten.";
        }
        else if (item.textContent == "Ålsten") {
            myImage.setAttribute("src", "images/Alsten_4.jpg");
            myHeading.textContent = "Ålsten";
            myParagraph.textContent = "West of Smedslätten is Ålsten, famous for its townhouses, the so called Per-Albin houses, " +
                                      "named after a former Swedish prime minister that lived in one of these.";
        }
        else if (item.textContent == "Höglandet") {
            myImage.setAttribute("src", "images/Hoglandet_1.jpg");
            myHeading.textContent = "Höglandet";
            myParagraph.textContent = "The next stop after Ålsten is Höglandet.";
        }
        else if (item.textContent == "Nockeby") {
            myImage.setAttribute("src", "images/Nockeby_2010b.jpg");
            myHeading.textContent = "Nockeby";
            myParagraph.textContent = "The last stop of Nockebybanan when you travel from Alvik is Nockeby itself.";
        }
    })
})

/* myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Gamla_Årstabron,_april_2020.jpg") {
    myImage.setAttribute("src", "images/Nya-Årstabron-2012.jpeg");
    myList.innerHTML = '<li>' + 'Den nya, västra Årstabron som syns på bilden' + '</li>' + 
                       '<li>' + 'Den gamla, östra Årstabron som saknas på bilden' + '</li>'
    myHeading.textContent = 'Nya Årstabron'
  } else {
    myList.innerHTML = '<li>' + 'Den gamla, östra Årstabron som syns i förgrunden på bilden' + '</li>' + 
                       '<li>' + 'Den nya, västra Årstabron som skymtas i bakgrunden på bilden' + '</li>'

    myImage.setAttribute("src", "images/Gamla_Årstabron,_april_2020.jpg");
    myHeading.textContent = 'Gamla Årstabron'
  }
}); */
