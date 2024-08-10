// Access to the id from the html document
const sortButton = document.getElementById("sort");


// Add sortInputArray function 
const sortInputArray = (event) => {
    event.preventDefault();
  
  event.preventDefault();
  const inputValues =[...document.getElementsByClassName("values-dropdown")].map((dropdown) => dropdown.value);
  }


// Add Eventlistener() to sortButton
sortButton.addEventListener("click", sortInputArray);

