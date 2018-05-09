//===========================
//JavaScript
//===========================

//variables
var body = document.querySelector('body');
var navItem = document.querySelectorAll('.nav-item');
var menu = document.querySelector('.menu');
var box = document.querySelector('.box');
var query768 = window.matchMedia("(min-width: 768px)");
var mainHeader = document.querySelector('.main-header');
var projectsList = document.querySelector('.projects-list');
var main = document.querySelector('main');

//data for projects
var projectDataObject = [
  {name:"Responsive Layout",
    image: "img/thumbnails/responsiveLayout.jpg",
    description:"A responsive, mobile-first layout to accommodate small, medium, and large screen sizes.",
    skills: "HTML, CSS, Media Queries",
    link: "https://dsheraz.github.io/THT_P2_Responsive-Layout/"
  },
  {name:"Online Registration Form",
    image: "img/thumbnails/onlineRegistrationForm.jpg",
    description:"A responsive, mobile-friendly registration form.",
    skills: "HTML, CSS, HTML Form",
    link: "https://dsheraz.github.io/TTH_P3_Online-Registration-Form/"
  },
  {name:"Online Photo Gallery",
    image: "img/thumbnails/onlinePhotoGallery.jpg",
    description:"An interactive photo gallery using JavaScript and jQuery. ",
    skills: "HTML, CSS, JavaScript, lightbox jQuery plugin",
    link: "https://dsheraz.github.io/TTH_P4_Online-Photo-Gallery"
  },
  {name:"Web Style Guide using SCSS",
    image: "img/thumbnails/webStyleGuide.jpg",
    description:"A Sass micro-framework to quickly prototype other websites using the BEM syntax classes created.",
    skills: "HTML, CSS, Sass/SCSS",
    link: "https://dsheraz.github.io/THT_P5_Web-Style-Guide/"
  },
  {name:"Interactive Video Player",
    image: "img/thumbnails/interactiveVideoPlayer.jpg",
    description:"An interactive video player that synchronizes the video and the transcript.",
    skills: "HTML, CSS, JavaScript, HTML Video Player, mediaelement.js library",
    link: "https://dsheraz.github.io/THT_P6_Interactive-Video-Player/"
  },
  {name:"Game Show App",
    image: "img/thumbnails/gameShowApp.jpg",
    description:"A word guessing game by clicking on the letters provided with limited chances.",
    skills: "HTML, CSS, JavaScript, HTML Objects and Arrays",
    link: "https://dsheraz.github.io/THT_P7_Game-Show-App/"
  },
  {name:"SVG Animations",
    image: "img/thumbnails/svgAnimations.jpg",
    description:"Using SVG replacing raster images in the website.",
    skills: "HTML, CSS, SVG",
    link: "https://dsheraz.github.io/THT_P8_SVG-Animations/"
  },
  {name:"Web App Dashboard",
    image: "img/thumbnails/webAppDashboard.jpg",
    description:"A web dashboard with charts and graphs.",
    skills: "HTML, CSS, JavaScript, chart.js library",
    link: "https://dsheraz.github.io/THT_P9-Web-App-Dashboard/"
  },
  {name:"Employee Directory",
    image: "img/thumbnails/employeeDirectory.jpg",
    description:"An employee directory using Random User Generator API.",
    skills: "HTML, CSS, JavaScript, Random User Generator API, JSON Object",
    link: "https://dsheraz.github.io/THT_P10-Employee-Directory/"
  }
];

//functions

//function to check the media query
function checkQuery(query768) {
  //if min-width = 768px,
  if (query768.matches) {
    //show nav-item and hide menu
    mainHeader.style.height = "31%";
    menu.style.display = "none";
    for(let i=0; i<navItem.length; i+=1) {
      navItem[i].style.display = "block";
    }
  } else {    //if min-width less than 768px
  //show menu and hide nav-item
  menu.style.display = "block";
  mainHeader.style.height = "14%";
  for(let i=0; i<navItem.length; i+=1) {
        navItem[i].style.display = "none";
  }
  }
}

//toggle menu to show nav-item
function toggleMenu(x) {
    x.classList.toggle("change");
    //if change class is present, show nav-item
    if(menu.className === "menu change") {
      for(let i=0; i<navItem.length; i+=1) {
            navItem[i].style.display = "block";
            mainHeader.style.height = "46%";
            box.style.marginTop = "0";
      }
    } else {            //if not, return to initial by calling checkQuery
        checkQuery(query768);
    }

}

//close main-nav by clicking x --> show menu and hide nav-item
function closeNav() {
  menu.classList.toggle("change");
  checkQuery(query768);
}

//function to create elements to contain data from projectDataObject
function projectData() {
  //loop through the length of objects to create projects
  for(let i=0; i<projectDataObject.length; i+=1) {
    //create project div
    var project = document.createElement('div');
    project.className = "project";
    //create div to contain basic info(to display in project)
    var projectBasics = document.createElement('div');
    projectBasics.className = "project-basics";
    //create div to contain detailed information(to display in detail-project)
    var projectMoreDetails = document.createElement('div');
    projectMoreDetails.className = "project-more-details";

    //create img element for img thumbnails
    var projectImage = document.createElement('img');
    projectImage.className = "project-image";
    projectImage.src = projectDataObject[i].image;
    //create div for project name
    var projectName = document.createElement('div');
    projectName.className = "project-name";
    projectName.textContent = projectDataObject[i].name;
    //create div for project description
    var projectDescription = document.createElement('div');
    projectDescription.className = "project-description";
    projectDescription.textContent = projectDataObject[i].description;
    //create div fot project skills
    var projectSkills = document.createElement('div');
    projectSkills.className = "project-skills";
    projectSkills.textContent = projectDataObject[i].skills;
    //create anchor for link to github page
    var projectLink = document.createElement('a');
    projectLink.className = "project-link";
    projectLink.href = projectDataObject[i].link;
    projectLink.textContent = "Visit Project";
    projectLink.target = "_blank";

    //append created elements
    //append img and name to basics
    projectBasics.appendChild(projectImage);
    projectBasics.appendChild(projectName);
    //append description, skills and link to detail-project
    projectMoreDetails.appendChild(projectDescription);
    projectMoreDetails.appendChild(projectSkills);
    projectMoreDetails.appendChild(projectLink);
    //append both info to project
    project.appendChild(projectBasics);
    project.appendChild(projectMoreDetails);
    //append all projects to projectList to be displayed in HTMl
    projectsList.appendChild(project);
  }

}

//call for checkQuery
checkQuery(query768);
query768.addListener(checkQuery);
//call for function projectData
projectData();

//add event listener to projectList
projectsList.addEventListener('click', function(e) {
  //if the project is clicked(other than projectList)
  if (e.target.className !== "projects-list") {
    //create span for close --> to close detail-project
    var close = document.createElement('span');
    close.className = "close";
    close.innerHTML = "&#215;";

    //create div for the detail-project
    var detailProject = document.createElement('div');
    detailProject.className = "detail-project";

    //insert e.target.innerHTML to detailProject
    if (e.target.className === "project") {
      detailProject.innerHTML = e.target.innerHTML;
    } else if (e.target.className === "project-basics") {
      detailProject.innerHTML = e.target.parentElement.innerHTML;
    } else if (e.target.className === "project-image" ||
              e.target.className === "project-name") {
      detailProject.innerHTML = e.target.parentElement.parentElement.innerHTML;
    }

    //append close to detailProject
    detailProject.appendChild(close);
    //append detailProject to main
    main.appendChild(detailProject);

    //addEventListener to detailProject
    body.addEventListener('click',function(e) {
      //if target = close, remove detailProject from main
      if(e.target.className === "close") {
        main.removeChild(detailProject);
      } else if(e.target.parentElement.className === "nav-item") {
        main.removeChild(detailProject);
      }
    });
  }
});
