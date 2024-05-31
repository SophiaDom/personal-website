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