document.addEventListener('DOMContentLoaded', ()=>{
    const toggleButton= document.getElementById("theme-toogle");
    const body= document.body;

    // Check saved preferences or system preference 
    const savedTheme=localStorage.getItem('theme');
    if (savedTheme==="dark"){
        body.classList.add("dark");
    }
    else if (savedTheme==="light"){
        body.classList.remove("light")
    }
    else{
        // Optional: Respect user's OS preference 
        if(window.matchmedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            body.classList.add("dark");
        }
    }

    // Toggle on click 
    
})