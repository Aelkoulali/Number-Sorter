// Access to the id from the html document
const sortButton = document.getElementById("sort");


// Add sortInputArray function 
const sortInputArray = (event) => {
    event.preventDefault();
    const inputValues =[...document.getElementsByClassName("values-dropdown")].map((dropdown) => Number(dropdown.value));
    const sortedValues = insertionSort(inputValues) ; // Update each time withe the function used (bubbleSort(inputValues), selectionSort(inputValues)...)

    updateUI(sortedValues);


  }

// Add a function to update the display with the sorted numbers
 const updateUI = (array = []) => {
  array.forEach((num, i)=> {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })

 } 
 
// Add bubbleSort function
 const bubbleSort = (array) => {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - 1; j++){
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp.value;

      }

    }

  }
  return array;
 };

// Add selectionSort function : tracking the index of the smallest value in the array
const selectionSort = (array) => {
  for(let i = 0; i < array.length; i++){
    let minIndex = i;
    for(let j = i+1; j < array.length; j++) {
      if (array[j] < array[minIndex]){
        minIndex = j;
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex]= temp;

  }
  return array;
}

// Add insertionSort function : building up a sorted array at the beginning of the list
const insertionSort = (array) => {
  for(let i = 1; i < array.length; i++){
    const currValue = array[i];
    let j = i - 1;
    while(j >= 0 && array[j] > currValue){
      j--;
    }
  }
  
}
// Add Eventlistener() to sortButton
sortButton.addEventListener("click", sortInputArray);

