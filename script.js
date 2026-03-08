function checkResume(){

let resumeText = document.getElementById("resume").value.toLowerCase();

let keywords = [
"java",
"python",
"html",
"css",
"javascript",
"sql",
"project",
"experience",
"skills",
"education"
];

let score = 0;

for(let i=0;i<keywords.length;i++){

if(resumeText.includes(keywords[i])){
score++;
}

}

let percentage = (score/keywords.length)*100;

document.getElementById("result").innerHTML =
"Your ATS Score : " + percentage + "%";

}
