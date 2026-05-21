const myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");
const items = document.querySelectorAll("#myList li");

const myParagraph = document.getElementById("changingParagraph")

items.forEach(item => {
    item.addEventListener("click", () => {
        if (item.textContent == "Äppelviken") {
            myImage.setAttribute("src", "images/Äppelviken,_Snäckvägen_22,_2012.jpg");
            myImage.setAttribute("alt", "View of Äppelviken");
            myHeading.textContent = "Äppelviken";
            myParagraph.textContent = "When you go by Nockebybanan from Alvik, you'll first arrive at Äppelviken. " +
                                      "Äppelviken was mostly built during the 1910s and 1920s, and was the earliest built of the five districts. " +
                                      "The houses are often in the National Romantic style or 1920s classicism.";
        }
        else if (item.textContent == "Smedslätten") {
            myImage.setAttribute("src", "images/Smedslatten_2008c.jpg");
            myImage.setAttribute("alt", "View of Smedslätten");
           myHeading.textContent = "Smedslätten";
            myParagraph.textContent = "After Äppelviken, the next stop when you go by Nockebybanan from Alvik is Smedslätten. " +
                                      "This district was built mostly during the 1920s.";
        }
        else if (item.textContent == "Ålsten") {
            myImage.setAttribute("src", "images/Alsten_4.jpg");
            myImage.setAttribute("alt", "View of Ålsten");
            myHeading.textContent = "Ålsten";
            myParagraph.textContent = "West of Smedslätten is Ålsten, famous for its townhouses, the so called Per-Albin houses, " +
                                      "named after a former Swedish prime minister that lived in one of these. They were built from 1932 to 1933. " +
                                      "Detached villas were also built in Ålsten, mostly during the 1920s and 1930s.";
        }
        else if (item.textContent == "Höglandet") {
            myImage.setAttribute("src", "images/Hoglandet_1.jpg");
            myImage.setAttribute("alt", "View of Höglandet");
            myHeading.textContent = "Höglandet";
            myParagraph.textContent = "The next stop after Ålsten is Höglandet. This district was mostly built during the 1920s and 1930s. " +
                                      "It is the smallest of the five districts, both in terms of population and area.";
        }
        else if (item.textContent == "Nockeby") {
            myImage.setAttribute("src", "images/Nockeby_2010b.jpg");
            myImage.setAttribute("alt", "View of Nockeby");
            myHeading.textContent = "Nockeby";
            myParagraph.textContent = "The last stop of Nockebybanan when you travel from Alvik is Nockeby itself. " +
                                      "This district was mostly built during the 1930s.";
        }
    })
})
