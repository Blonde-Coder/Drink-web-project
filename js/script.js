const countryInput = document.getElementById('Country');
const yearInput = document.getElementById('year');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Clear any previous error messages

  // Country validation
  if (countryInput.value === 'Select a country') {
    countryInput.style.borderColor = "red";
  } else {
    countryInput.style.borderColor = "purple";
  }

  // Year validation
  if (yearInput.value === 'year') {
    yearInput.style.borderColor = "red";
  } else {
    yearInput.style.borderColor = "purple";

}
if (yearInput.value >= 2003) {
  alert("Sorry, you are under the legal age.");
}

});

$("Enter").on("click", function() { 
    window.location.replace("/nextpage.html");
    localeStorage.clear();
  })
