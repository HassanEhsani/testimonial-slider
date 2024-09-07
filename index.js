const testimonials = [
    {
        name: "AI generator",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        text: "I've been an Apple user for over a decade, everything just works seamlessly together. Apple truly knows how to make technology intuitive and user-friendly.",
        name: "Open AI",
        photoUrl: "https://images.unsplash.com/photo-1685903772095-f07172808761?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHVzZXJ8ZW58MHwxfDB8fHwy",
        text: "It seems like you're referring to apple.chnology company (Apple Inc.), or something else related to apples?",
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial(){
    const {name,photoUrl,text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = name;
    idx++;
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial();
    },100000)
}