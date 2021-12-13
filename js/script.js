
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/





/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = (list, page) => {
//Variables to store the start index and the end index of the list items to be displayed on page.  
  const startIndex = (page * 9) - 9;
  console.log(startIndex)
  const endIndex = page * 9;
//Selects the UL element with a class of student list and assign its value to a variable.
const ul = document.querySelector('.student-list');
//Clearing the UL by using the innerHTML property to set the HTML content of the student list variable to an empty string.
ul.innerHTML = '';

//Looping over list parameter
 for (let i = 0; i < list.length; i++) {
  let li = document.createElement('li');
   if(i >= startIndex && i < endIndex)
  
//Creating the LI elements needed to display the information for each student as we iterate over the list parameter.   
  li.innerHTML = `<li class="student-item cf">
  <div class="student-details">
    <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
    <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
    <span class="email">${list[i].email}</span>
  </div>
  <div class="joined-details">
    <span class="date">${list[i].registered.date}</span>
  </div>`;
  ul.appendChild(li);
 };
};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
const addPagination = (list) => {
 //Variable to store the number of pagination buttons needed. 
  const pages = Math.ceil(list.length / 9);
 //Selecting the UL element with a class of link-list. 
  const linkListUl = document.querySelector('.link-list');
//This will remove any pagination buttons that might have previously been displayed.
  linkListUl.innerHTML = '';
  
  //Loop over the pages variable for the number of pages needed
  for (let i = 1; i <= pages; i++) {
    const button = document.createElement('li');
  //Insert the button elements to the .link-list variable. 
    button.innerHTML = `<button type="button">${[i]}</button>`;
    linkListUl.insertAdjacentElement('beforeend', button);
  };

  //Select the first pagination button and give it a class name of active.
  const firstButton = linkListUl.querySelector('li');
  firstButton.className = 'active';
  
  //Create an event listener to listen for clicks on the link-list variable
  linkListUl.addEventListener('click', (e) => {
    if(e.target.tagName === 'BUTTON') {
      //Selects the button with the active class    
      const activeButton = linkListUl.querySelector('.active');
      //Removes the active class from the activeButton target
      activeButton.className = '';
      //Adds the active class to the event object
      e.target.className = 'active';
      //
      const etextContent = e.target.textContent;
      
      showPage(data, etextContent);
  };
  });  
};


showPage(data, 1);
addPagination(data);
// Call functions
