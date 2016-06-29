// var i;
// var tabContent = document.querySelector(".tabContent");
var data = {
    red: {
        title: 'Red',
        body: 'Red is the color at the longer-wavelengths end of the spectrum of visible light next to orange, at the opposite end from violet.[3] Red color has a predominant light wavelength of roughly 620–740 nanometres. Light with a longer wavelength than red but shorter than terahertz radiation and microwave is called infrared.'
    },
    green: {
        title: 'Green',
        body: 'Green is the color between blue and yellow on the spectrum of visible light. It is evoked by light with a predominant wavelength of roughly 495–570 nm. In the subtractive color system, used in painting and color printing, it is created by a combination of yellow and blue, or yellow and cyan; in the RGB color model, used on television and computer screens, it is one of the additive primary colors, along with red and blue, which are mixed in different combinations to create all other colors.'
    },
    blue: {
        title: 'Blue',
        body: 'Blue is the colour between violet and green on the optical spectrum of visible light. Human eyes perceive blue when observing light with a wavelength between 450 and 495 nanometres. Blues with a higher frequency and thus a shorter wavelength gradually look more violet, while those with a lower frequency and a longer wavelength gradually appear more green. Pure blue, in the middle, has a wavelength of 470 nanometres. In painting and traditional colour theory, blue is one of the three primary colours of pigments, along with red and yellow, which can be mixed to form a wide gamut of colours. Red and blue mixed together form violet, blue and yellow together form green. Blue is also a primary colour in the RGB colour model, used to create all the colours on the screen of a television or computer monitor.'
    }
};

window.addEventListener('hashchange', function() {
    var dataToRender = location.hash.slice(1);
    renderContent(dataToRender);
});

function renderContent(whatContent) {
    document.querySelector('#tabContent h1').textContent = data[whatContent].title;
    document.querySelector('#tabContent p').textContent = data[whatContent].body;
}
renderContent('red');
// var tabLinks = document.querySelectorAll(".tabLinks");
//
//
// function showContent(evt) {
//     for (i = 0; i < tabLinks.length; i++) {
//         tabContent[i].style.display = "none";
//     }
//     for (i = 0; i < tabLinks.length; i++) {
//         tabContent[i].classList.remove('active');
//     }
//     evt.target.classList.add('active');
//
// }
// for (i = 0; i < tabLinks.length; i++) {
//     console.log(tabLinks[i]);
//     tabLinks[i].addEventListener('click', showContent);
// }
//
// showContent();
