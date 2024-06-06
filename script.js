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

const sections = document.querySelectorAll('.portfolio,.inspiration,.information');

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
      section.classList.remove('active');
      if (!document.querySelector('.section.active')) {
        sections.forEach((s) => {
          s.classList.remove('hidden');
          s.querySelector('span').classList.remove('hidden');
        });
      } else {
        sections.forEach((s) => {
          if (s !== section) {
            s.classList.add('hidden');
            s.querySelector('span').classList.remove('hidden');
          }
        });
      }
    } else {
      sections.forEach((s) => {
        s.classList.remove('active');
        s.classList.add('hidden');
        s.querySelector('span').classList.remove('hidden');
      });
      section.classList.add('active');
      section.classList.remove('hidden');
      section.querySelector('span').classList.remove('hidden');
    }
  }


const porfolioItems = [
  {
    'img': 'portfolio/2D/animation.mp4',
    'title': 'Geometric Design Animation',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/animationflat.jpeg',
    'title': 'Geometric Design',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/cactus.jpeg',
    'title': 'Abstract Digital Cactus Photo Collage',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/color1.png',
    'title': 'Abstract Digital Photo Collage',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/color2.jpeg',
    'title': 'Abstract Digital Photo Collage: Alternate',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/powertripping.mp4',
    'title': 'Power Tripping Anti-Police Animation',
    'category': ['2D']
  },
  {
    'img': 'process.mp4',
    'title': 'Process for "Abstract Digital Photo Collage"',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/timemapping.png',
    'title': 'Mapping Time Abstractly',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/tri.jpg',
    'title': 'Geometric Analogous Tripych',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/typecollage1.jpg',
    'title': 'Analogue Type Collage',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/typecollage2.jpg',
    'title': 'Analogue Type and Photo Collage',
    'category': ['2D']
  },
  {
    'img': 'portfolio/2D/typecollage3.jpeg',
    'title': 'Analogue Type Collage',
    'category': ['2D']
  },




  {
    'img': 'portfolio/fine/figure.jpeg',
    'title': 'Ink Life Figure Drawing',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/figurespread.jpg',
    'title': 'Sketchbook Spread of Life Figure Drawings',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/figurespread2.jpg',
    'title': 'Sketchbook Spread of Life Figure Drawings',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/handsandfeet.jpeg',
    'title': 'Hands and Feet Charcoal Study',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/klimt.jpeg',
    'title': 'Gustav Klimt Sketchbook Study',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/onefigure.jpg',
    'title': 'Minute Charcoal Gesture Drawing From Life',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/selfie.jpeg',
    'title': 'Charcoal Self Portrait',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/smoke.jpg',
    'title': 'Acrylic and Ink Drawing',
    'category': ['fine']
  },
  {
    'img': 'portfolio/fine/threefigures.jpg',
    'title': 'Minute Each Charcoal Gesture Drawing From Life',
    'category': ['fine']
  },




  {
    'img': 'portfolio/photography/abstract.jpg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/birds.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/bookbarn.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/bostonflowerss.jpeg',
    'title': 'Boston Flowers',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/bostongreen.jpeg',
    'title': 'Mossy Deck Boards',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/church.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/concert.jpeg',
    'title': 'Earworm',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/damos.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/empire.jpeg',
    'title': 'Passing Empire',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/green.jpg',
    'title': 'Snow',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/grunge.jpeg',
    'title': 'East Side',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/hands.jpeg',
    'title': 'Conversational',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/hike.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/landscape.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/leaves.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/mirror.jpg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/pool.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/product1.jpg',
    'title': 'Product Photo',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/product2.jpg',
    'title': 'Product Photo',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/product3.jpg',
    'title': 'Product Photo',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/product4.jpg',
    'title': 'Product Photo',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/shoppingcart.jpeg',
    'title': 'Abandoned Use',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/stairs.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/subway.jpeg',
    'title': ' ',
    'category': ['photography']
  },
  {
    'img': 'portfolio/photography/trees.jpeg',
    'title': ' ',
    'category': ['photography']
  },




  {
    'img': 'portfolio/typography/bed.png',
    'title': 'Bed',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/book1.jpeg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/book1videomp4.mp4',
    'title': 'Common Misconception Book Interior Slideshow',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/book2.jpeg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/book2video.mp4',
    'title': 'Samsara: Interior Slideshow',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/book3.jpeg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/city.png',
    'title': 'City',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/clouds.jpg',
    'title': 'Common Misconceptions Book: Process',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/coverbook1.jpeg',
    'title': 'Common Misconceptions Book Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/coverbook2.jpeg',
    'title': 'Samsara Book Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/covers.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/covers2.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/covers3.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/covers4.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/covers5.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/covers6.jpg',
    'title': 'Bach Keyboard Practice IV Record Cover',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/disappointed.png',
    'title': 'Disappointed',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/eggs.jpeg',
    'title': 'Eggs',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/flower.png',
    'title': 'Flower',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/green.jpeg',
    'title': 'Green',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/home.png',
    'title': 'Home',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/layer.png',
    'title': 'Layer',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/poster1.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/postersky.jpg',
    'title': 'Light Pollution Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/procrastinate.jpg',
    'title': 'Procrastinate',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/sore.png',
    'title': 'Sore',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/spread.png',
    'title': 'Spread',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/tent.jpg',
    'title': 'Sore',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/typeface.jpg',
    'title': 'Triptych Typeface',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/typeface2.jpg',
    'title': 'Triptych Typeface',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/typeface3.jpg',
    'title': 'Triptych Typeface',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter2.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter3.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter4.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter5.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter6.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter7.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter8.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },
  {
    'img': 'portfolio/typography/fluxusmanifestoposter9.jpg',
    'title': 'Fluxus Manifesto Poster',
    'category': ['typography']
  },




  {
    'img': 'portfolio/typography/classsite_1.mp4',
    'title': 'Class Site Screen Recording',
    'category': ['websites'],
    'link': 'https://sophiadom.github.io/core2_interaction/'
  },
  {
    'img': 'portfolio/typography/onbeginnings.mp4',
    'title': 'On Beginnings Screen Recording',
    'category': ['websites'],
    'link': 'https://sophiadom.github.io/core2_interaction/p1/index.html'
  },
  {
    'img': 'portfolio/typography/phaces.mp4',
    'title': 'Phaces Screen Recording',
    'category': ['websites'],
    'link': 'https://sophiadom.github.io/core2_interaction/p2/index.html'
  }
]