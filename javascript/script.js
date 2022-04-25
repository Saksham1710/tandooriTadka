
var i = 0;
var txt = 'I am currently a student of Douglas College and enrolled in Computing Studies and Information Systems and practising to make these websites to become a great software developer and want to be one of the greatest coder of all time.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("info").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}