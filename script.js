const elements = document.querySelectorAll('.s,.o,.p,.h');
const topics = document.querySelector('.topics');

const delay = 0; // 2000ms = 2 seconds delay before adding.hide class
const duration = 1000; // 1000ms = 1 second transition duration

setTimeout(() => {
    elements.forEach(element => {
      element.classList.add('hide');
      element.addEventListener('transitionend', () => {
        element.style.display = 'none';
        topics.style.display = 'block'; // show the topics div
      });
    });
    document.body.classList.add('background-fade-out');
  }, delay);





const borderElements = document.querySelectorAll('.portfolio,.inspiration,.information');

function randomizeBorderRadius(element) {
    element.style.borderRadius = `${Math.random() * 200}px ${Math.random() * 200}px ${Math.random() * 200}px ${Math.random() * 200}px`;
}
  
borderElements.forEach((element) => {
    // Set the initial transition property
    element.style.transition = 'border-radius 5.5s';
  
    randomizeBorderRadius(element); // call the function immediately on page load

// Start the animation loop
    setTimeout(() => {
        setInterval(() => {
          randomizeBorderRadius(element);
        }, 2000); // update every 5 seconds
      }, 0)
}); // start the interval after 0ms (i.e., immediately)






const portfolioH2 = document.querySelector('.portfolio h2');
const inspirationH2 = document.querySelector('.inspiration h2');
const informationH2 = document.querySelector('.information h2');
const contentDiv = document.querySelector('.content');
const sections = document.querySelectorAll('.portfolio,.inspiration,.information');
const categoryElements = document.querySelectorAll('.category');

portfolioH2.addEventListener('click', (e) => {
  toggleSection(e.target.parentNode);
});

inspirationH2.addEventListener('click', (e) => {
  toggleSection(e.target.parentNode);
});

informationH2.addEventListener('click', (e) => {
  toggleSection(e.target.parentNode);
});

function toggleSection(section) {
  if (section.classList.contains('active')) {
    // Restore sections to initial state
    sections.forEach((s) => {
      s.classList.remove('active');
      s.classList.remove('hidden');
      s.querySelector('span').classList.remove('hidden');
    });
    contentDiv.innerHTML = ''; // Clear the content div
    contentDiv.style.backgroundColor = ''; // Restore default background color
  } else {
    // Hide all sections except the clicked one
    sections.forEach((s) => {
      if (s !== section) {
        s.classList.remove('active');
        s.classList.add('hidden');
        s.querySelector('span').classList.remove('hidden');
      }
    });
    section.classList.add('active');
    section.classList.remove('hidden');
    section.querySelector('span').classList.remove('hidden');
    contentDiv.style.backgroundColor = 'black';
    generateCards(portfolioItems, contentDiv); // Generate cards for all items
  }
}


const portfolioItems = [
  {
    'img': 'portfolio/2D/animation.mp4',
    'title': 'Geometric Design Animation',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/animationflat.jpeg',
    'title': 'Geometric Design',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/cactus.jpg',
    'title': 'Abstract Digital Cactus Photo Collage',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/color1.png',
    'title': 'Abstract Digital Photo Collage',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/color2.jpg',
    'title': 'Abstract Digital Photo Collage: Alternate',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/powertripping.mp4',
    'title': 'Power Tripping Anti-Police Animation',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2d/process.mp4',
    'title': 'Process for "Abstract Digital Photo Collage"',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/timemapping.png',
    'title': 'Mapping Time Abstractly',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/tri.jpg',
    'title': 'Geometric Analogous Tripych',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/typecollage1.jpg',
    'title': 'Analogue Type Collage',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/typecollage2.jpg',
    'title': 'Analogue Type and Photo Collage',
    'category': ['2D'].toString()
  },
  {
    'img': 'portfolio/2D/typecollage3.jpeg',
    'title': 'Analogue Type Collage',
    'category': ['2D'].toString()
  },




  {
    'img': 'portfolio/fine/figure.jpeg',
    'title': 'Ink Life Figure Drawing',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/figurespread.jpg',
    'title': 'Sketchbook Spread of Life Figure Drawings',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/figurespread2.jpg',
    'title': 'Sketchbook Spread of Life Figure Drawings',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/handsandfeet.jpeg',
    'title': 'Hands and Feet Charcoal Study',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/klimt.jpeg',
    'title': 'Gustav Klimt Sketchbook Study',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/onefigure.jpg',
    'title': 'Minute Charcoal Gesture Drawing From Life',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/selfie.jpeg',
    'title': 'Charcoal Self Portrait',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/smoke.jpg',
    'title': 'Acrylic and Ink Drawing',
    'category': ['fine'].toString()
  },
  {
    'img': 'portfolio/fine/threefigures.jpg',
    'title': 'Minute Each Charcoal Gesture Drawing From Life',
    'category': ['fine'].toString()
  },




  {
    'img': 'portfolio/photography/abstract.jpg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/birds.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/bookbarn.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/bostonflowerss.jpeg',
    'title': 'Boston Flowers',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/bostongreen.jpeg',
    'title': 'Mossy Deck Boards',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/church.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/concert.jpeg',
    'title': 'Earworm',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/damos.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/empire.jpeg',
    'title': 'Passing Empire',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/green.jpg',
    'title': 'Snow',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/grunge.jpeg',
    'title': 'East Side',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/hands.jpeg',
    'title': 'Conversational',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/hike.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/landscape.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/leaves.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/mirror.jpg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/pool.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/product1.jpg',
    'title': 'Product Photo',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/product2.jpg',
    'title': 'Product Photo',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/product3.jpg',
    'title': 'Product Photo',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/product4.jpg',
    'title': 'Product Photo',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/shoppingcart.jpeg',
    'title': 'Abandoned Use',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/stairs.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/subway.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },
  {
    'img': 'portfolio/photography/trees.jpeg',
    'title': ' ',
    'category': ['photography'].toString()
  },




  {
    'img': 'portfolio/typography/bed.png',
    'title': 'Bed',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/book1.jpeg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/book1videomp4.mp4',
    'title': 'Common Misconception Book Interior Slideshow',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/book2.jpeg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/book2video.mp4',
    'title': 'Samsara: Interior Slideshow',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/book3.jpeg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/city.png',
    'title': 'City',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/clouds.jpg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/coverbook1.jpg',
    'title': 'Common Misconceptions Book Cover',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/coverbook2.jpg',
    'title': 'Samsara Book Cover',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/covers.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/covers2.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/covers3.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/covers4.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/covers5.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/covers6.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography'].toString()
  },
  // {
  //   'img': 'portfolio/typography/disappointed.png',
  //   'title': 'Disappointed',
  //   'category': ['typography'].toString()
  // },
  {
    'img': 'portfolio/typography/eggs.jpg',
    'title': 'Eggs',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/flower.png',
    'title': 'Flower',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/green.jpg',
    'title': 'Green',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/home.png',
    'title': 'Home',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/layer.png',
    'title': 'Layer',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/poster1.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/postersky.jpg',
    'title': 'Light Pollution Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/procrastinnate.jpg',
    'title': 'Procrastinate',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/sore.png',
    'title': 'Sore',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/spread.png',
    'title': 'Common Misconceptions Book Spread',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/tent.jpg',
    'title': 'Tent',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/typeface.jpg',
    'title': 'Triptych Typeface',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/typeface2.jpg',
    'title': 'Triptych Typeface',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/typeface3.jpg',
    'title': 'Triptych Typeface',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter2.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter3.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter4.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter5.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter6.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter7.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter8.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter9.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography'].toString()
  },




  {
    'img': 'portfolio/websites/classsite_1.mp4',
    'title': 'Class Site Screen Recording',
    'category': ['websites'].toString(),
    'link': 'https://sophiadom.github.io/core2_interaction/'
  },
  {
    'img': 'portfolio/websites/onbeginnings.mp4',
    'title': 'On Beginnings Screen Recording',
    'category': ['websites'].toString(),
    'link': 'https://sophiadom.github.io/core2_interaction/p1/index.html'
  },
  {
    'img': 'portfolio/websites/phaces.mp4',
    'title': 'Phaces Screen Recording',
    'category': ['websites'].toString(),
    'link': 'https://sophiadom.github.io/core2_interaction/p2/index.html'
  }
];


const cards = document.querySelectorAll('[data-card]');

categoryElements.forEach((category) => {
  category.addEventListener('click', () => {
    if (category.classList.contains('active')) {
      category.classList.remove('active');
      generateCards(portfolioItems, contentDiv); // show all cards
    } else {
      categoryElements.forEach((c) => c.classList.remove('active'));
      category.classList.add('active');
      filterCards(category.dataset.category);
    }
  });
});


function addCardEventListener(card) {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
}

cards.forEach((card) => {
  addCardEventListener(card);
});

function filterCards(category) {
  const filteredItems = portfolioItems.filter((item) => item.category.includes(category));
  generateCards(filteredItems, contentDiv);
}

function generateCards(portfolioItems, contentDiv) {
  if (!portfolioH2.classList.contains('active')) {
    contentDiv.innerHTML = ''; // clear the content div
    return;
  }
  const shuffledItems = shuffleArray(portfolioItems);
  let cardsHTML = '';
  shuffledItems.forEach((item) => {
    const maxWidth = window.innerWidth - 20; // subtract 20px from the viewport width
    const cardWidth = Math.min(getRandomWidth(), maxWidth); // ensure card width doesn't exceed max width
    const cardHTML = `
      <div class="card" style="width: ${cardWidth}px;">
        ${item.img.endsWith('.mp4')? `
          <a href="${item.link}" target="_blank">
            <video autoplay loop>
              <source src="${item.img}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <h2 class="video-title">${item.title}</h2> <!-- customize video title HTML -->
          </a>
        ` : `
          <img src="${item.img}" alt="${item.title}">
          <h2>${item.title}</h2>
        `}
      </div>
    `;
    cardsHTML += cardHTML;
  });
  contentDiv.innerHTML = cardsHTML;
}

cards.forEach((card) => {
  addCardEventListener(card);
});


function getRandomWidth() {
  return Math.floor(Math.random() * (300 - 200 + 1)) + 200; // generate a random width between 200px and 300px
}

// Add the shuffleArray function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


portfolioH2.addEventListener('click', () => {
  portfolioH2.classList.toggle('active');
  const categorySpans = document.querySelectorAll('.category');
  const contentDiv = document.querySelector('.content');

  if (portfolioH2.classList.contains('active')) {
    inspirationH2.style.display = 'none';
    informationH2.style.display = 'none';
    categorySpans.forEach(span => span.style.display = 'block'); // show span categories
    generateCards(portfolioItems, contentDiv); // generate cards
  } else {
    inspirationH2.style.display = 'block';
    informationH2.style.display = 'block';
    categorySpans.forEach(span => span.style.display = 'none'); // hide span categories
    const cards = contentDiv.querySelectorAll('.card'); // get all card elements
    cards.forEach(card => card.classList.add('hidden')); // add hidden class to cards
  }
});

inspirationH2.addEventListener('click', () => {
  inspirationH2.classList.toggle('active');
  const contentDiv = document.querySelector('.content');
  

  if (inspirationH2.classList.contains('active')) {
    portfolioH2.style.display = 'none';
    informationH2.style.display = 'none';
    const comingSoon = document.createElement('h3');
    comingSoon.textContent = 'Coming Soon!';
    contentDiv.appendChild(comingSoon);
  } else {
    portfolioH2.style.display = 'block';
    informationH2.style.display = 'block';
    const comingSoon = contentDiv.querySelector('h3');
    comingSoon.remove();
  }
});
