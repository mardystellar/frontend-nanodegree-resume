var bio = {
	"name" : "Daniel Figueroa",
	"role" : "Front end Developer",
	"contacts" : {
		"mobile": "+424-150-58-63",
		"email": "danielfm212@gmail.com",
		"github": "github.com/dfm212",
		"twitter": "@dfm212",
		"location" : "Caracas",
	},
	"summary":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores error, modi totam cumque adipisci quia cum animi quo consequuntur ex odio reprehenderit, non, harum nihil optio. Ipsa natus fugiat rerum veritatis soluta quaerat adipisci quibusdam magnam porro nam suscipit pariatur, ducimus autem esse hic vero, et dolorum distinctio numquam odit.",
	"skills":["Management","Designer","JS","HTML5","CSS3","Boobstrap","JQuerry","NODE.JS","SASS","PYTHON","RUBY","Teacher"],
	"bioPic": "images/10930919_10152698145231589_577670276695243190_n.jpg"
};

var work = {
	"jobs":
	[
		{
			"employer":"Universidad Nueva Esparta",
			"location":"Caracas",
			"title":"Teacher 3dMax",
			"dates":"January, 2014 to June, 2014",
			"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis omnis nobis, dicta adipisci neque harum corporis iure magnam aliquam enim."
		},
		{
			"employer":"Ludo Playful Agency",
			"location":"Caracas",
			"title":"Comunity Designer",
			"dates":"January, 2014 to June, 2014",
			"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis omnis nobis, dicta adipisci neque harum corporis iure magnam aliquam enim."
		},
		{
			"employer":"Diario el Nacional",
			"location":"Caracas",
			"title":"Intership",
			"dates":"2013",
			"description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis omnis nobis, dicta adipisci neque harum corporis iure magnam aliquam enim."
		}
	]
};
var education = {
	'schools' : [
	 	{
		'name' : 'Universidad Nueva Esparta',
		'years' : '2008 - 2014 ',
 		'location' : 'Caracas',
 		'degree' : 'Administracion de Empresas de Diseño'
 		},
		{
 		"name":"EF",
		"degree":"Course of English, Academic Year",
		"years":"2014 - 2015 ",
		"location":"San Francisco, CA",
		},
	],
	'onlinecourse':[
		{
 		"school":"Front end Developer",
		"title":"FreeCodeCamp",
		"dates":"2015 ",
		"url":"www.freecodecapm.com",
		},
		{
 		"school":"Udacity",
		"title":["Intro to HTML and CSS"],
		"dates":"2015 ",
		"url":"www.udacity.com",
		},
		{
 		"school":"Udacity",
		"title":["Responsive Web Design Fundamentals"],
		"dates":"2015 ",
		"url":"www.udacity.com",
		},
		{
 		"school":"Udacity",
		"title":["Resposive Images"],
		"dates":"2015 ",
		"url":"www.udacity.com",
		},
		{
 		"school":"Code Cademy",
		"title":["HTML & CSS"," JavaScript", " jQuerry"," RUBY"],
		"dates":"2015 ",
		"url":"www.codecademy.com",
		},
	]
};

var projects = {
	"projects":
	[
		{
		"title": "My First Web with HTML5/CSS3/Boobstrap/jQuery",
		"years": "June 2015",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam suscipit illo ea quisquam culpa reiciendis repellendus debitis adipisci cupiditate. Eos commodi quidem natus, quod accusantium quo deleniti dicta omnis eaque ad quis minima impedit libero dolorem similique tenetur illum culpa molestiae est maiores amet a, voluptatibus, repellat minus aperiam. Explicabo!",
		},
		{
		"title": "project 2",
		"years": "July 2015",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam suscipit illo ea quisquam culpa reiciendis repellendus debitis adipisci cupiditate. Eos commodi quidem natus, quod accusantium quo deleniti dicta omnis eaque ad quis minima impedit libero dolorem similique tenetur illum culpa molestiae est maiores amet a, voluptatibus, repellat minus aperiam. Explicabo!",
		}
	]
};

//this section display on scream de bio info!!
var formattedName = HTMLheaderName.replace('%data%',bio.name);
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

//this code show on the top the info contact
$("#topContacts").prepend([formattedLocation]);
$("#topContacts").prepend([formattedTwitter]);
$("#topContacts").prepend([formattedGithub]);
$("#topContacts").prepend([formattedEmail]);
$("#topContacts").prepend([formattedMobile]);
//this code show on the bottom the info contact
$("#footerContacts").prepend([formattedLocation]);
$("#footerContacts").prepend([formattedTwitter]);
$("#footerContacts").prepend([formattedGithub]);
$("#footerContacts").prepend([formattedEmail]);
$("#footerContacts").prepend([formattedMobile]);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedBioPic);


// function to interacted over the skills string
if (bio.skills.length > 0 ){

	$("#header").append(HTMLskillsStart);{
		for (var i = 0; i < 12; i++){
			formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
}


// show the summary on scream
var formattedSummary = HTMLwelcomeMsg.replace("%data%", bio.summary);
$("#header").append(formattedSummary);


// function to interacted and show on sccream the work string
function displayWork(){
	for (var job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();


// function to interacted and show on scream the projects string
function displayProjects() {
	for (var project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	var formattedYears = HTMLprojectDates.replace("%data%", projects.projects[project].years);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

	$(".project-entry:last").append(formattedTitle);
	$(".project-entry:last").append(formattedYears);
	$(".project-entry:last").append(formattedDescription);

	}
// in case of have any picture
/*
	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
		};
*/
}
displayProjects();

//function to interacted and show on scream the education string
function displayeducation(){
	for (var school in education.schools) {
	$('#education').append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
	var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].years);
	var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
	var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);

	$(".education-entry:last").append(formattedName);
	$(".education-entry:last").append(formattedDates);
	$(".education-entry:last").append(formattedLocation);
	$(".education-entry:last").append(formattedDegree);
	}
}
displayeducation();

function displayOnline() {
	$('.education-entry:last').append(HTMLonlineClasses);
		for (var online in education.onlinecourse){

		var formattedTitle = HTMLonlineTitle.replace('%data%', education.onlinecourse[online].title);
		var formattedSchool = HTMLonlineSchool.replace('%data%', education.onlinecourse[online].school);
		var formattedDates = HTMLonlineDates.replace('%data%', education.onlinecourse[online].dates);
		var formattedUrl = HTMLonlineURL.replace('%data%', education.onlinecourse[online].url);

		$('.education-entry:last').append(formattedTitle);
		$('.education-entry:last').append(formattedSchool);
		$('.education-entry:last').append(formattedDates);
		$('.education-entry:last').append(formattedUrl);
  }
}
displayOnline();

// function to show on map the location of the pleace where i used to live or work
// it need some adjustment
function locationizer(work_obj) {
    var locationArray=[];

    for (var job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationArray.push(newLocation);
    }
return locationArray;
}
// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

// this function make the adjustment to the why the name is show it on scream
function inName() {
	var oldName = bio.name;
    var finalName = oldName;
    array = oldName.split(' ');
    finalName = array[0][0].toUpperCase() + array[0].slice(1).toLowerCase() + ' ' + array[1].toUpperCase();
        return finalName;
}

// this function show on scream a button to change to upper case the last name on scream
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
