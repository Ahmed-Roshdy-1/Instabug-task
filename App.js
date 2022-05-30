//Start Slider Navigation functionality

var slider1 = document.getElementById("dot1");
var slider2 = document.getElementById("dot2");
var slider3 = document.getElementById("dot3");

var sliderinfo = document.getElementById("info");

var headerInfo = [
    "Accelerate Your entire Mobile Team Workflow",
    "the Most Comprehensive Bug Reporting Tool For Mobile Apps",
    "Secure Crash Reporting With Real-Time Alerts",
];

slider1.addEventListener("click", () => {
    sliderinfo.innerHTML = ``;
    sliderinfo.innerHTML = `
    <img src="Images/img1.svg" class="m" alt="img1" />
    <h1 class="info-header">${headerInfo[0]}</h1>
    `;
    slider2.classList.remove("chacked");
    slider3.classList.remove("chacked");
    slider1.classList.add("chacked");
});
slider2.addEventListener("click", () => {
    sliderinfo.innerHTML = ``;
    sliderinfo.innerHTML = `
    <img src="Images/img2.svg" class="m" alt="img1" />
    <h1 class="info-header">${headerInfo[1]}</h1>
    `;
    slider1.classList.remove("chacked");
    slider3.classList.remove("chacked");
    slider2.classList.add("chacked");
});

slider3.addEventListener("click", () => {
    sliderinfo.innerHTML = ``;
    sliderinfo.innerHTML = `
    <img src="Images/img3.svg" class="m" alt="img1" />
    <h1 class="info-header">${headerInfo[2]}</h1>
    `;
    slider1.classList.remove("chacked");
    slider2.classList.remove("chacked");
    slider3.classList.add("chacked");
});

//End Slider Navigation functionality

//  Login Functionality

var data = [
    { email: "mohamed@instabug.com", password: "A12345678" },
    { email: "mohamed1@instabug.com", password: "A12345678" },
    { email: "mohamed2@instabug.com", password: "A12345678" },
    { email: "mohamed3@instabug.com", password: "A12345678" },
    { email: "mohamed4@instabug.com", password: "A12345678" },
    { email: "mohamed5@instabug.com", password: "A12345678" },
    { email: "mohamed6@instabug.com", password: "A12345678" },
    { email: "mohamed7@instabug.com", password: "A12345678" },
];

function Loginfunction() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var massage = document.getElementById("massage");
    var f = 0;
    for (let i = 0; i < data.length; i++) {
        console.log(email, data[i].email);
        if (email == data[i].email && password == data[i].password) {
            window.location.href = "pages/welcome.html";
            f = 1;
        }
    }

    if (f == 0) massage.style.display = "flex";
}
