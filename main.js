const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
  if(event.code === "Enter"){
    search();
  }
});
function search(){
  const input = searchInput.value;
  window.location.href = "https://www.google.com/search?q="+input+"&rlz=1C1UEAD_enIN1093IN1094&oq="+input+"&gs_lcrp=EgZjaHJvbWUqDQgAEAAY4wIYsQMYgAQyDQgAEAAY4wIYsQMYgAQyCggBEC4YsQMYgAQyCggCEC4YsQMYgAQyCggDEAAYsQMYgAQyDQgEEC4YrwEYxwEYgAQyCggFEAAYsQMYgAQyCggGEC4YsQMYgAQyBwgHEAAYgAQyCggIEC4Y1AIYgAQyCggJEC4Y1AIYgATSAQkyODM1ajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8"
}