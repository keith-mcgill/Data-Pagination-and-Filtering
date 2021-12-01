
/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/


const itemsPerPage = 2;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = (list, page) => {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = page * itemsPerPage;
//Selects the UL element with a class of student list and assins value it studentList
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

//Loop over list parameter
   for(let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
   
        studentList.insertAdjacentHTML =`<li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <h3>Ethel Dean</h3>
            <span class="email">ethel.dean@example.com</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined 12-15-2005</span>
          </div>
        </li>`

      };
   }

};

const liste = ['yes','no','happy','sad'];

showPage(liste, itemsPerPage);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
