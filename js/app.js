let input = document.querySelectorAll("input");
let div = document.querySelector(".para");
let p = document.querySelector("p");
let body = document.querySelector("body");
let icon = document.querySelector("i");


let PrintColor = () => {
     let FontColor = input[0].value;
     let divColor = input[1].value;
     let SiteColor = input[2].value;
     p.style.color = FontColor;
     div.style.background = divColor;
     body.style.background = SiteColor;

}
for (let i = 0; i < input.length; i++) {
     input[i].addEventListener('change', PrintColor);

}


let changeTheme = () => {
     if (body.classList.contains("light")) {
          icon.classList.replace("fa-moon", "fa-sun");
          body.classList.replace("light", "dark");
     } else {
          body.classList.replace("dark", "light");
          icon.classList.replace("fa-sun", "fa-moon");
     }
}

icon.addEventListener('click', changeTheme);