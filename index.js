const toggleSwitch = document.querySelector(".slider");
const basicPrice = document.getElementById("basic");
const professionalPrice = document.getElementById("professional");
const masterPrice = document.getElementById("master");
let clicked = false;
toggleSwitch.addEventListener('click', function(){
if(!clicked){
    basicPrice.innerHTML = "<p>&dollar;19.99</p>";
    professionalPrice.innerHTML = "<p>&dollar;24.99</p>";
    masterPrice.innerHTML = "<p>&dollar;39.99</p>";
    clicked = true;/*When the toggle switch is clicked, 
    the event listener function is triggered. 
    Inside the function, an if statement checks the value of clicked. 
    If clicked is false, it means the toggle switch is in the initial state, 
    so the prices in the basic, professional, and master sections are updated to the lower values. 
    After updating the HTML, clicked is set to true to indicate that the toggle switch has been clicked.*/
}else{
clicked = false;
basicPrice.innerHTML = "<p>&dollar;199.99</p>";
professionalPrice.innerHTML = "<p>&dollar;249.99</p>";
masterPrice.innerHTML = "<p>&dollar;399.99</p>";
}
});










/*
// Get the toggle switch input element
const toggleSwitch = document.getElementById('switch');

// Add event listener to the toggle switch
toggleSwitch.addEventListener('change', function() {
  // Get all the section elements
  const sections = document.querySelectorAll('.container section');

  // Loop through each section
  sections.forEach(function(section) {
    // Get the price element within the section
    const priceElement = section.querySelector('p');

    // Get the current price value
    const currentPrice = priceElement.textContent;

    // Toggle the price between annually and monthly
    if (toggleSwitch.checked) {
      if (section.classList.contains('basic')) {
        priceElement.innerHTML = '&dollar;199.99';
      } else if (section.classList.contains('professional')) {
        priceElement.innerHTML = '&dollar;249.99';
      } else if (section.classList.contains('master')) {
        priceElement.innerHTML = '&dollar;399.99';
      }
    } else {
      if (section.classList.contains('basic')) {
        priceElement.innerHTML = '&dollar;19.99';
      } else if (section.classList.contains('professional')) {
        priceElement.innerHTML = '&dollar;24.99';
      } else if (section.classList.contains('master')) {
        priceElement.innerHTML = '&dollar;39.99';
      }
    }
  });
});
*/
