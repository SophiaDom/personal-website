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