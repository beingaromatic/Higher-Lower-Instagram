//variables defined
var left = -1;
var right = -1;
var curr_index =  generate_index_init();
var prev_index = 0;
var mydata; 
var score = 0;

//async-await fetching json
async function fetchDataFromAPI() {
  try {
    // Make the HTTP request using fetch and the URL of the API
    const response = await fetch('user.json');

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse the response body as JSON
    const data = await response.json();
    return data;

  } catch (error) {
    // Handle errors that occurred during the fetch request or JSON parsing
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to propagate it to the calling code
  }
}

// Call the async function to fetch data from the API
fetchDataFromAPI()
  .then((data) => {
    mydata = data;
    print_on_screen();

    
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch operation
    console.error('Error in fetch:', error);
  });



//displaying all contents on screen
function print_on_screen(){

  generate_index();

  
  document.getElementById('profile-picture-left').src = mydata[left].background;
  // document.getElementById('profile-picture-left').src = mydata[left].picture;
  document.getElementById('profile-name-left').innerHTML = mydata[left].name;
  document.getElementById('profile-username-left').innerHTML = '@' + mydata[left].username;
  document.getElementById('profile-followers-left').innerHTML = mydata[left].followers;
  document.getElementById('background-img-left').src = mydata[left].background;

  document.getElementById('profile-picture-right').src = mydata[right].background;
  // document.getElementById('profile-picture-right').src = mydata[right].picture;
  document.getElementById('profile-name-right').innerHTML = mydata[right].name;
  document.getElementById('profile-username-right').innerHTML = '@' + mydata[right].username;
  // document.getElementById('profile-followers-right').innerHTML = mydata[right].followers;
  document.getElementById('background-img-right').src = mydata[right].background;

//adding commas to numbers
const numberElementL = document.querySelector(".profile-followers-left");
const numberElementR = document.querySelector(".profile-followers-right");

if (numberElementL) {
  console.log('comma left')
  addCommasAndUpdateElement(numberElementL);
}

if (numberElementR) {
  addCommasAndUpdateElement(numberElementR);
}
}


function addCommasAndUpdateElement(element) {
  const number = parseInt(element.textContent, 10);
  const formattedNumber = number.toLocaleString();
  element.textContent = formattedNumber;
}

function toggleDiv() {
  document.getElementById("profile-followers-right").classList.toggle("visible");
  document.getElementById("buttons-right").classList.toggle("hide");
  }
  
// calling function for higher button
function result_higher() {
  var fir = parseInt(mydata[left].followers);
  var sec = parseInt(mydata[right].followers);
  console.log(sec)

  if( sec > fir){
    console.log('correct');
    score++;
    document.getElementById('score-board').innerHTML = score;
    print_on_screen();

  } else {
    console.log('incorrect');
    window.location.href = `last.html?id=${score*912874573}` ;
    
  }
}

//calling function for lower button
function result_lower() {

  var fir = parseInt(mydata[left].followers);
  var sec = parseInt(mydata[right].followers);
  
  if(sec < fir){
    console.log('correct');
    score++;
    document.getElementById('score-board').innerHTML = score;
    print_on_screen();
    
    
  } else {
    console.log('incorrect');
    window.location.href = `last.html?id=${score*912874573}` ;
    
  } 
}


//initializing left index 
function generate_index_init(){
  const min = 0;
  const max = 99;
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
    return num1;
  }

//assigning right part to left and generating random index for right 
function generate_index(){
prev_index = curr_index;
const min = 0;
const max = 99;
while( curr_index == prev_index ){
  const num1 = Math.floor(Math.random() * (max - min + 1)) + min;
  curr_index = num1;
}
left = prev_index;
right = curr_index;
console.log(prev_index, curr_index); 

}






