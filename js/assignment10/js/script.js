// const postContainerE1 = document.getElementById('post-container');
// const loader = document.querySelector('.loader');
// const filter = document.getElementById('filter');

// let i=0;
// let limit=5;


// function displayPost(element) {
//     var posts = document.createElement("div");
//     posts.style = `
//     background-color:#4992d3;
//     box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
//     border-radius: 3px;
//     padding: 20px;
//     margin: 40px 0px;
//     width:100%;
// `;
//     posts.className='posts'
//     postContainerE1.append(posts);

//     var postId=document.createElement('span')
//     postId.innerHTML=++i;
//     posts.append(postId);
//     postId.style=`
//     background-color: #fff;
//     color: #4992d3;
//     padding:20px;
//     border-radius: 50%;
//     position: relative;
//     top:-20px;
//     left:-45px;
//     `

//     var postTitle = document.createElement("h2");
//     postTitle.className='post-title'
//     postTitle.innerHTML = element.title;
//     posts.append(postTitle);

//     var postBody = document.createElement("p");
//     postBody.className='post-body'
//     postBody.innerHTML = element.content;
//     posts.append(postBody);

    
// }
// postInfo.slice(0,initialNumber).forEach((element) => {
//     console.log(postInfo.title)
//     displayPost(element);
// });


// function scrollWindow(e){
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//     if (scrollTop + clientHeight >= scrollHeight - 5) {
//       showLoading();
//     }
// }
// function showLoading(){
//     initialNumber+=5;
//     loader.classList.add='show';
//     setTimeout(()=>{
//         loader.classList.remove='show'

//         setTimeout(()=>{
           
//             // showposts();
//             posts.slice(0,initialNumber).forEach((element) => {
//                 console.log(posts.title)
//                 showposts(element);
//             });
//         },500)
//     },1000);
// }
// function filterBlogs(e){
//     console.log(e.target.value);
//     const inputVal=e.target.value.toLowerCase();
//     const blogEl = document.querySelectorAll('.blog') 

//     blogEl.forEach(element=>{
//         const blogTitleEl=element.querySelector('.blogTitle').innerText.toLowerCase();
//         const blogDescEl=element.querySelector('.blogDesc').innerText.toLowerCase();

//         if(blogTitleEl.contains(inputVal)||blogDescEl.contains(inputVal)){
//             // blog.style.display='block'
//             console.log('available')
//         }
//         else{
//             // blog.style.display='none'
//             console.log('not available')
//         }

//     })
// }

// // showBlogs();
// window.addEventListener('scroll',(e)=>{
//    scrollWindow(e);
// })

// // filter.addEventListener('input',filterBlogs)

var postContainerEl=document.getElementById('post-container');
var loaderE1= document.querySelector('.loader');

var i=0;
var limit=5;


function displayPost(element) {

    var post = document.createElement("div");
    post.classList.add("post-info");
    postContainerEl.append(post);
    
    post.style = `
        position: relative;
        background-color: #4992d3;
        box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
        border-radius: 3px;
        padding: 20px;
        margin: 40px 0;
        display: flex;
        flex-direction:column;
        width: 80vw;
        max-width: 800px;
        margin-left:20px;
`;
    

    var number=document.createElement('div')
    number.innerHTML=++i;
    post.append(number);

    number.style=`
        position: absolute;
        top: -15px;
        left: -15px;
        font-size: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        color: #296ca8;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 10px;
    `

    var postTitle = document.createElement("h2");
    postTitle.className='postTitle'
    postTitle.innerHTML = element.title;
    post.append(postTitle);

    var postBody = document.createElement("p");
    postBody.className='postDesc'
    postBody.innerHTML = element.content;
    post.append(postBody);

    
}
posts.slice(0,limit).forEach((element) => {
    console.log(posts.title)
    displayPost(element);
});


function scrollWindow(e){
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >scrollHeight) {
      showLoading();
    }
}


function showLoading(){
    loaderE1.style.visibility = "visible";
    setTimeout(()=>{
        loaderE1.style.visibility = "hidden";

        setTimeout(()=>{
    
            posts.slice(0,limit).forEach((element) => {
                displayPost(element);
            });
            limit+=5;
        },500)
    },1000);
}



window.addEventListener('scroll',(e)=>{
   scrollWindow(e);
})
