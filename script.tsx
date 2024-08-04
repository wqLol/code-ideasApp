const projectIdeas = [
    // Beginner Level
    "To-Do List App",
    "Calculator",
    "Weather App",
    "Quiz App",
    "Recipe Book",
    
    // Intermediate Level
    "Budget Tracker",
    "Chat Application",
    "Blog Platform",
    "E-commerce Site",
    "Habit Tracker",
    
    // Advanced Level
    "Social Media App",
    "Real-time Collaboration Tool",
    "Machine Learning Project",
    "Game Development",
    "Personal Finance Manager",
    
    // Web Development
    "Portfolio Website",
    "Forum or Community Site",
    "Job Board",
    "Event Management System",
    "Learning Management System",
    
    // Mobile Development
    "Fitness Tracker",
    "Meditation App",
    "Travel Planner",
    "Language Learning App"
];




const postBox= document.getElementById('postContent');
if (postBox === null) throw TypeError;

let n = 0;

setInterval(()=>{
    postBox["placeholder"] = ""
    
    let currQuote = projectIdeas[n] 
    console.log(n)
    setTimeout(() => {
        for (let x = currQuote.length; x >= 0; x--) {
            setTimeout(() => {
                postBox["placeholder"] = "Make a " + currQuote.slice(0, x);
            }, (currQuote.length - x) * 40); // Adjust the timing here
        }
    }, currQuote.length * 40 + 1000);

    // console.log("hi")
    for (let x = 0;x <= currQuote.length ;x++) {
        // console.log(x)
        // console.log(currQuote.slice(0,x))
        setTimeout(()=>{
        postBox["placeholder"] = "Make a " + currQuote.slice(0,x)

    }, x * 40)



    

}
n++
}, 2500)