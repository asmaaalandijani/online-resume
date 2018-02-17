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
  "biopic": "images/biopic.png",

 display: function() {
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
  };

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
],

display: function() {

  for (var i = 0; i < education.schools.length; i++) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedNameDegree = formattedSchoolName + formattedSchoolDegree;
    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedNameDegree);
    $(".education-entry:last").append(formattedSchoolLocation);
    $(".education-entry:last").append(formattedSchoolMajor);
    $(".education-entry:last").append(formattedSchoolDates);
  }

  for (var m = 0; m < education.onlineCourses.length; m++) {

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[m].title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[m].school);
    var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[m].dates);
    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[m].url);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedTitleSchool);
    $(".education-entry:last").append(formattedOnlineDates);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
}
};

var work= {
  "jobs": [
    { "employer": "Emkan Education Co.",
      "title":  "Prodict Manager",
      "location": "Jeddah, Saudi Arabia",
      "dates": "Nov 2015 - in progress",
      "description": "working in developing digitla products"
  },

  { "employer": "Olayan Co.",
    "title":  "Application Engineer",
    "location": "Jeddah, Saudi Arabia",
    "dates": "Aug 2014 - Oct 2015",
    "description": "working in maintenance department"
  }
],

 display: function() {
   for (var n = 0; n < work.jobs.length; n++) {

     var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[n].employer);
     var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[n].title);
     var formattedEmployerTitle = formattedEmployer + formattedTitle;
     var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[n].location);
     var formattedDates = HTMLworkDates.replace("%data%", work.jobs[n].dates);
     var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[n].description);

     $("#workExperience").append(HTMLworkStart);
     $(".work-entry:last").append(formattedEmployerTitle);
     $(".work-entry:last").append(formattedWorkLocation);
     $(".work-entry:last").append(formattedDates);
     $(".work-entry:last").append(formattedDescription);
   }
 }
};

 var projects= {
   "projects": [
     { "title": "Mockup to Article",
       "dates": "Nov2017- Feb2018",
       "description": "Translating a mockup to HTML",
       "images": ["images/project1_a.png", "images/project1_b.png"],
   },

   { "title": "Animal Trading Cards",
     "dates": "Nov2017- Feb2018",
     "description": "Creating a webbased trading card",
     "images": ["images/project2_b.png"],
   }
 ],

   display: function() {
     for (var k = 0; k < projects.projects.length; k++) {

       var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[k].title);
       var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[k].dates);
       var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[k].description);

       $("#projects").append(HTMLprojectStart);
       $(".project-entry:last").append(formattedProjectTitle);
       $(".project-entry:last").append(formattedProjectDates);
       $(".project-entry:last").append(formattedProjectDescription);

       if (projects.projects[k].images.length > 0){
            var image;
            for (image in projects.projects[k].images) {
              var formattedProjectImages = HTMLprojectImage.replace("%data%", projects.projects[k].images[image]);
              $(".project-entry:last").append(formattedProjectImages);
            }
          }
     }
   }
};

bio.display();

education.display();

work.display ();

projects.display ();
