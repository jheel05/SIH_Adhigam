/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [{
        title: "Hackathons",
        cardImage: "j.jpg",
        description: "",
        tag: "",
        Previewlink: "",
        // Githublink: "https://github.com/jheel05/DSC_WOW_ABHAVYA.git",
    }, {
        title: "Contests",
        cardImage: "j.jpg",
        description: "A website built using HTML, CSS AND Js.",
        tag: "",
        Previewlink: "",
        // Githublink: "https://github.com/jheel05/DSC_WOW_ABHAVYA.git",
    },
    {
        title: "Learning Programmes",
        cardImage: "j.jpg",
        description: "A project made to automate business operations",
        tag: "",
        Previewlink: "",
        // Githublink: "https://github.com/jheel05/Restaurant_mangement_system.git",
    },
    {
        title: "Project Competition",
        cardImage: "j.jpg",
        description: "Programme 1",
        tag: "",
        Previewlink: "",
        // Githublink: "https://github.com/jheel05/Nirogya_healthcarewebsite.git",
    },

];

const showCards = () => {
    let output = "";
    projects.forEach(
        ({ title, cardImage, tag, Previewlink, Githublink }) =>
        (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <div class="searchdiv"><button class="tagbutton">${tag}</button></div>
            <ul class="menu-content"><br>
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>`)
    );
    projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


function myFunction() {
    // Declare variables
    var input, button, i, skillcard, card;
    input = document.getElementById('myInput').value;
    input = input.toUpperCase();
    skillcard = document.getElementsByClassName('skill-card')
    card = document.getElementsByClassName('card')
    button = document.getElementsByClassName('tagbutton');
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < button.length; i++) {
        if (button[i].innerHTML.toUpperCase().includes(input)) {
            skillcard[i].style.display = "";
            card[i].style.display = "";
        } else {
            skillcard[i].style.display = "none";
            card[i].style.display = "none";
        }
    }
}