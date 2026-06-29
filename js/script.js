document.getElementById('themeBtn').onclick=()=>document.body.classList.toggle('dark');
document.getElementById('contactForm').onsubmit=(e)=>{e.preventDefault();document.getElementById('msg').innerText='Message sent successfully! (Demo)';};
