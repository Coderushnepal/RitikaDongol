document.body.style.backgroundColor="#296ca8";
document.body.style.color="#fff";
document.body.style.display="flex";
document.body.style.flexDirection="column";
document.body.style.alignItems="center";
document.body.style.justifyContent="center";
document.body.style.minHeight="100vh";
document.body.style.margin="0";
document.body.style.paddingBottom="100px";
document.body.style.fontFamily="'Roboto', sans-serif";


var heading = document.createElement("h1");
heading.innerHTML="My Blog";
document.body.appendChild(heading);
heading.style=`
    margin-bottom:0;
    text-align:center;
`
var filterContainer = document.createElement("div");
filterContainer.classList.add("filter-container");
document.body.appendChild(filterContainer);

filterContainer.style=`
    margin-top:20px;
    width:80vw;
    max-width:800px;
`

var inputField = document.createElement("input");
inputField.setAttribute("type","text");
inputField.setAttribute("id","filter");
inputField.setAttribute("class", "filter");
inputField.setAttribute("placeholder","Filter posts...")
filterContainer.appendChild(inputField);

inputField.style=`
    width: 100%;
    padding: 12px;
    font-size: 16px;
`

var postContainer = document.createElement("div");
postContainer.setAttribute("id","post-container");
document.body.appendChild(postContainer);
postContainer.style.marginBottom="30px";

var loader = document.createElement("div");
loader.classList.add("loader");
document.body.appendChild(loader);

var circle1 = document.createElement("div");
circle1.classList.add("circle");
loader.appendChild(circle1);

var circle2 = document.createElement("div");
circle2.classList.add("circle");
loader.appendChild(circle2);

var circle3 = document.createElement("div");
circle3.classList.add("circle");
loader.appendChild(circle3);

