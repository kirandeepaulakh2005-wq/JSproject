let users = [
  {
    name: "Aarav Sharma",
    pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Frontend developer who loves creating modern UI designs."
  },
  {
    name: "Simran Kaur",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Graphic designer passionate about creativity and branding."
  },
  {
    name: "Rohan Mehta",
    pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    bio: "JavaScript enthusiast and backend learner."
  },
  {
    name: "Priya Verma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Content writer who enjoys storytelling and blogging."
  },
  {
    name: "Kabir Singh",
    pic: "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    bio: "Fitness lover and part-time web developer."
  },
  {
    name: "Ananya Gupta",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df",
    bio: "UI/UX designer focused on user-friendly experiences."
  },
  {
    name: "Dev Malhotra",
    pic: "https://images.unsplash.com/photo-1504257432389-52343af06ae3",
    bio: "Tech student exploring AI and full-stack development."
  }
];

function showUsers(arr){

document.querySelector(".cards").innerHTML = "";

arr.forEach(function(user){

const card = document.createElement("div");
card.classList.add("card");

const img = document.createElement("img");
img.src = user.pic;
img.classList.add("big-img");


const blurredLayer = document.createElement("div");
blurredLayer.classList.add("blurred-layer");
blurredLayer.style.backgroundImage = `url(${user.pic})`;


const content = document.createElement("div");
content.classList.add("content");


const heading = document.createElement("h3");
heading.textContent = user.name;


const para = document.createElement("p");
para.textContent = user.bio;


content.appendChild(heading);
content.appendChild(para);

card.appendChild(img);
card.appendChild(blurredLayer);
card.appendChild(content);

document.querySelector(".cards").appendChild(card);

});

}

showUsers(users);


let inp = document.querySelector(".inp");

inp.addEventListener("input", function(){

let newUsers = users.filter((user)=>{

return user.name
.toLowerCase()
.startsWith(inp.value.toLowerCase());

});

showUsers(newUsers);

});