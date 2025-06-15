//
// var arr=[1,2,3,4,5,6]

// arr.forEach(function(elem,idx){//first parameter is alaways array value,second is idndex of value
//     console.log(elem,idx);

// })

let arr = [
  {
    name: "patel",
    age: 34,
    marrid: true,
    url: "https://images.unsplash.com/photo-1619533394727-57d522857f89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "rishit",
    age: 14,
    marrid: true,
    url: "https://images.unsplash.com/photo-1722019567841-fa4d11c8bab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "harmesh",
    age: 4,
    marrid: false,
    url: "https://images.unsplash.com/photo-1709004915865-38bc70f4cb78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "ravi",
    age: 54,
    marrid: true,
    url: "https://images.unsplash.com/photo-1661051830189-54dfcfcf3a0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBtYW58ZW58MHx8MHx8fDA%3D",
  },
];
let sum = "";
arr.forEach(function (elem, index) {
  sum = sum +
    `  <div id="card " class="bg-zinc-200 rounded-2xl w-52 h-fit flex flex-col justify-center items-center  px-4 py-6 gap-2  ">
        <img class="w-24 h-24 m-4 rounded-full object-cover   bg-amber-300" src="${elem.url}" alt="">
        <h1 class="font-semibold text-2xl">${elem.name}</h1>
        <h3 class="font-medium text-sm">Age : ${elem.age}</h3>
        <h2>Married : ${elem.marrid}</h2>
        <button id=${index} class="bg-green-500 text-white rounded font-medium px-4 py-2">Add friend</button>
    </div>`;
});
var body = document.querySelector("body");
body.innerHTML = sum;

let buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
    let friend = 0;
    btn.addEventListener("click", function () {
    btn.innerHTML = "Sendding request.....";
    if (friend == 0) {
      setTimeout(() => {
        btn.innerHTML = "Remove Friend";
      }, 700);
      friend = 1;
    } else {
      btn.innerHTML = "Add Friend";
      friend = 0;
    }
  });
});
