document.addEventListener('DOMContentLoaded', ()=>{
    const toggleButton= document.getElementById("theme-toogle");
    const body= document.body;

    // Check saved preferences or system preference 
    const savedTheme=localStorage.getItem('theme');
    if (savedTheme ==='dark'){
        body.classList.add('dark');
    }
    else if (savedTheme ==='light'){
        body.classList.remove('light')
    }
    else{
        // Optional: Respect user's OS preference 
        if(window.matchmedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
            body.classList.add('dark');
        }
    }

    // Toggle on click 
    toggleButton.addEventListener('click', ()=>{
        if(body.classList.contains('dark')){
            body.classList.remove('dark');
            localStorage.setItem("theme", 'light');
            toggleButton.textContent("Toggle Dark Mode");
        }
        else{
            body.classList.add('dark');
            localStorage.setItem("theme", 'dark');
            toggleButton.textContent("Toggle White Mode");
        }
    })
})

const form=document.getElementById('contact-form');
const successMsg=document.getElementById('form-success');

if(form){
    form.addEventListener('sunmit', (e)=>{
        e.preventDefault();

        document.querySelectorAll('.error').forEach(
            el=> el.textContent= ''
        );
        let isValid=true;

        // Name 
        const name= document.getElementById('name').value.trim();
        if (name === ''){
            document.getElementById('name-error').textContent= 'Name is required';
            isValid=false;
        }

        // Email 
        const email= document.getElementById('email').value.trim();
        const emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(email === ''){
            document.getElementById('email-error').textContent="Email is required";
            isValid=false;
        }
        else if(!emailRegex.test(email)){
            document.getElementById('email-error').textContent="Enter a valid email address";
            isValid=false;
        }

        // Message 
        const message = document.getElementById('message').value.trim();
        if (message === ''){
            document.getElementById('message-error').textContent = "Message is required";
            isValid=false
        }

        if (isValid){
            successMsg.style.display="block";
            form.reset();
            
        }
    })
}