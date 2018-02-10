var bio= {
  "name": "Asmaa Al-Andijani",
  "role": "Product Manager",
  "contacts": {
    "mobile": "+966555555555",
    "email": "asmaa.alandijani@gmail.com",
    "github": "asmaaalandijani",
    "location": "Jeddah,SA"
  },
  "welcomeMessage": "Welcome to my Resume",
  "skills": ["beginner level of frontend development", "advanced level of UX", "advanced level of developing product strategy"],
  "biopic": "images/biopic.png"
};

function displayBio() {
var formattedName= HTMLheaderName.replace ("%data%", bio.name);
var formattedRole= HTMLheaderRole.replace ("%data%", bio.role);
var formattedMobile= HTMLmobile.replace ("%data%", bio.contacts.mobile);
var formattedEmail= HTMLemail.replace ("%data%", bio.contacts.email);
var formattedGithub= HTMLgithub.replace ("%data%", bio.contacts.github);
var formattedLocation= HTMLlocation.replace ("%data%", bio.contacts.location);
var formattedWelcomeMessage= HTMLwelcomeMsg.replace ("%data%", bio.welcomeMessage);
var formattedSkills= HTMLskills.replace ("%data%", bio.skills);
var formattedBiopic= HTMLbioPic.replace ("%data%", bio.biopic);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBiopic);
$("#header").append(formattedWelcomeMessage);

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $("#skills").append(formattedSkills);
}

$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);
}

displayBio();

bio.display = function(){};

var education= {
  "schools": [
    { "name": "Effat University",
      "location": "Jeddah, SA",
      "degree": "B.S. in Computre Engineering",
      "majors": ["digital systems"],
      "dates": "2009-2014"
    }
  ],

  "onlineCourses": [
    { "title": "Front-End Development",
      "school": "Udacity",
      "dates": "Nov2017-Feb2018",
      "url": "https://sa.udacity.com/course/front-end-web-developer-nanodegree--nd001"
   },

   { "title": "Growth Hacking",
     "school": "iClick Company",
     "dates": "Feb2016-March2016",
     "url": "http://www.iclick-sa.com/"
  }
]
};

function displayEducation() {
  var school;
  for (school in education.school) {

    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedNameDegree);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
    $(".education-entry:last").append(formattedSchoolDates);
  }
  
  var course;
  for (course in education.onlineCourses) {

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedTitleSchool);
    $(".education-entry:last").append(formattedOnlineDates);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
}

displayEducation();

education.display = function(){};


var work= {
  "jobs": [
    { "employer": "Emkan Education Co.",
      "title":  "Prodict Manager",
      "location": "Jeddah, SA",
      "dates": "Nov 2015 - in progress",
      "description": "working in developing digitla products"
  },

  { "employer": "Olayan Co.",
    "title":  "Application Engineer",
    "location": "Jeddah, SA",
    "dates": "Aug 2014 - Oct 2015",
    "description": "working in maintenance department"
  }
 ]
};

function displayWork() {
  var job;

  for (job in work.jobs) {

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();

work.display = function(){};

var projects= {
  "projects": [
    { "title": "Mockup to Article",
      "dates": "Nov2017- Feb2018",
      "description": "Translating a mockup to HTML",
      "images": [ "images/project1_a.png", "images/project1_b.png"]
  },

  { "title": "Animal Trading Cards",
    "dates": "Nov2017- Feb2018",
    "description": "Creating a webbased trading card",
    "images": [ "images/project2_a.png", "images/project2_b.png"]
  }
 ]
};

function displayProjects() {
  var project;

  for (project in projects.projects) {

    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedProjectTitle);
    $(".project-entry:last").append(formattedProjectDates);
    $(".project-entry:last").append(formattedProjectDescription);

    if (projects.projects[project].images.length>0){
      var image;
      
      for (image in projects.projects[project].images) {
        var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image].images);
        $(".project-entry:last").append(formattedProjectImages);
      }
    }

  }

}

displayProjects();

projects.display = function(){};
