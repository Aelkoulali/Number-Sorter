// Access to the id from the html document
const sortButton = document.getElementById("sort");


// Add sortInputArray function 
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues =[...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    
  }

// Add a function to update the display with the sorted numbers
 const updateUI = (array = []) => {
  array.forEach((num, i)=> {
    const outputValueNode = document.getElementById(`output-value-${i}`);
  })

 }  

// Add Eventlistener() to sortButton
sortButton.addEventListener("click", sortInputArray);

