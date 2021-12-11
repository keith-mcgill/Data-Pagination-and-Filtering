
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
const displayPage = (list, page) => {
  const startIndex = (page * i) - i;
  const endIndex = page * i;

};



//Selects the UL element with a class of student list and assins value it studentList
   
const ul = document.querySelector('.student-list');


for (let i = 0; i < data.length; i++) {
//for (let key in data){
  let li = document.createElement('li')
  
  li.innerHTML = `<li class="student-item cf">
  <div class="student-details">
    <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
    <h3>${data[i].name.title} ${data[i].name.first} ${data[i].name.last}</h3>
    <span class="email">${data[i].email}</span>
  </div>
  <div class="joined-details">
    <span class="date">${data[i].registered.date}</span>
  </div>`
  console.log(li)
  ul.appendChild(li)
}
//ul.innerHTML = '';

//Loop over list parameter



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
