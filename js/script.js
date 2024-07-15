//CREO ARRAY//
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
 
//ASSEGNO LA VARIABILE//
let itemsContent = ''; //DEFINIZIONE VARIABILE CONTENTENTE IMMAGINI//
let activeElement = 0;// DEFINIZIONE VARIABILE CONTENENTE L'INDICE DELL'IMMAGINE//

const prev = document.querySelector('prev.');

const next = document.querySelector('next.');

//AVVIO IL CICLO DELL'ARRAY CONCATENATO IN HTML CON LE IMMAGINI E IL TESTO//
images.forEach((elem) => {
    itemsContent +=  `
    <div class="image position-relative h-100 d-none">
        <img src="./${elem.image}" class="main-image" alt="${elem.title}">
         <div class="txt-image">
             <h3>${elem.title}</h3>
             <p>${elem.text}</p>
         </div>
    </div>`

    
});
//RECUPERO IL PRIMO ELEMENTO CON LA CLASSE IMAGE//
document.querySelector('#my-carousel-container .images').innerHTML = itemsContent;
// RECUPERO IL PRIMO ELEMENTO CON LA CLASSE IMAGE CHE CONTIENE ANCHE LA CLASSE D-NONE//
console.log(document.querySelectorAll('.image'));
console.log(document.querySelectorAll('.image')[activeElement]);



let allImages = document.querySelectorAll('.image');//RECUPERO GLI ELEMENTI CON LA CLASSE IMAGE//
allImages[activeElement].classList.remove('d-none');//RIMUOVO LA CLASSE D-NONE AL PRIMO ELEMENTO//
//DEFINISCO LA FUNZIONALITA' DEL CLICK SULLA FRECCIA DESTRA//
next.addEventListener('click', function() {
    allImages[activeElement].classList.add('d-none');//AGGIUNGO LA CLASSE D-NONE ALL'ELEMENTO//

    if(activeElement == allImages.length - 1) {
        activeElement = 0;
    }
    else {
        activeElement++;
    }
    

    allImages[activeElement].classList.remove('d-none');//RIMUOVO LA CLASSE D-NONE//
});



