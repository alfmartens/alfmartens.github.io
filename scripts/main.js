const myImage = document.querySelector("img");
let myHeading = document.querySelector("h1");
const items = document.querySelectorAll("#myList li");

const myParagraph = document.getElementById("changingParagraph")

items.forEach(item => {
    item.addEventListener("click", () => {
        if (item.textContent == "Äppelviken") {
            myImage.src = "images/Appelviken,_Snackvägen_22,_2012.jpg";
            myImage.alt = "View of Äppelviken";
            myHeading.textContent = "Äppelviken";
            myParagraph.textContent = "When you go by Nockebybanan from Alvik, you'll first arrive at Äppelviken. " +
                                      "Äppelviken was mostly built during the 1910s and 1920s, and was the earliest built of the five districts. " +
                                      "In the eastern part of the area, houses were built in the 1910s in the National Romantic style. In the western part, " + 
                                      "which was built later, greater uniformity was sought and the houses were built in the 1920s Classicist style.";
        }
        else if (item.textContent == "Smedslätten") {
            myImage.src = "images/Smedslatten_2008c.jpg";
            myImage.alt = "View of Smedslätten";
           myHeading.textContent = "Smedslätten";
            myParagraph.textContent = "After Äppelviken, the next stop when you go by Nockebybanan from Alvik is Smedslätten. " +
                                      "This is a very attractive district that gives the impression of a small town idyll from " + 
                                      "the early 1920s with villas in lush gardens and with shops and a tram stop at the square. " +
                                      "Most of the houses from the early 1920s are built in 1 1/2 floors and often have decorative bay windows. " +
                                      "Near Lake Mälaren, 83 terraced houses of a very high standard were built much later, in the early 1960s.";
        }
        else if (item.textContent == "Ålsten") {
            myImage.src = "images/Alsten_4.jpg";
            myImage.alt = "View of Ålsten";
            myHeading.textContent = "Ålsten";
            myParagraph.textContent = "West of Smedslätten is Ålsten, famous for its terraced houses, the so called Per-Albin houses, " +
                                      "named after a former Swedish prime minister that lived in one of these. They were built from 1932 to 1933. " +
                                      "Detached villas were also built in Ålsten, mostly during the 1920s and 1930s.";
        }
        else if (item.textContent == "Höglandet") {
            myImage.src = "images/Hoglandet_1.jpg";
            myImage.alt = "View of Höglandet";
            myHeading.textContent = "Höglandet";
            myParagraph.textContent = "The next stop after Ålsten is Höglandet. This district was mostly built during the 1920s and 1930s. " +
                                      "It is the smallest of the five districts, both in terms of population and area. " +
                                      "The district's name comes from its highland location.";
        }
        else if (item.textContent == "Nockeby") {
            myImage.src = "images/Nockeby_2010b.jpg";
            myImage.alt = "View of Nockeby";
            myHeading.textContent = "Nockeby";
            myParagraph.textContent = "The last stop of Nockebybanan when you travel from Alvik is Nockeby itself. " +
                                      "Nockeby's detached housing is very uniformly designed, with two-story houses with gable roofs. " +
                                      "All were built between 1929 and 1933.";
        }
    })
})
