let likevalue = document.getElementById("likevalue");
let like=0;
let likebtn = document.getElementById("like");
let dislikevalue = document.getElementById("dislikevalue");
let dislike=0;
let dislikebtn = document.getElementById("dislike");
let totalvalue = document.getElementById("totalvalue");
let total=0;
likebtn.addEventListener('click',function() {
	like++;
	likevalue.innerText=like;
	total++;
	totalvalue.innerText=total;
});
dislikebtn.addEventListener('click',function() {
	dislike++;
	dislikevalue.innerText=dislike;
	total++;
	totalvalue.innerText=total;
});