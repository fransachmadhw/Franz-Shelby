// Button Animation //
document.querySelector('.home_button').onmousemove = (e) =>
{
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty('--x', `${ x }px`);
    e.target.style.setProperty('--y', `${ y }px`);
}

// Toggle Menu //
const showMenu = (toggleId, navId) => 
{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav)
    {
        toggle.addEventListener('click', function()
        {
            nav.classList.toggle('show');
        })
    } 
}

showMenu('nav-toggle', 'nav-menu');

// Remove Menu Mobile //
const navLink = document.querySelectorAll('.nav_link');
function linkAction()
{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Scroll Section Active Link //
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive()
{
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav_menu a[href *=' + sectionId + ']').classList.add('active');
        }
        else
        {
            document.querySelector('.nav_menu a[href *=' + sectionId + ']').classList.remove('active');
        }
    })
}


// Theme Switcher //
const icon = document.getElementById("icon");
const bgHome = document.getElementById("home");
const bgPoly1 = document.getElementById("about");
const bgPoly2 = document.getElementById("skills");
const bgPoly3 = document.getElementById("portfolio");
const bgPoly4 = document.getElementById("contact");

icon.onclick = function()
{
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme"))
    {
        icon.src = "assets/img/sun.png";
        bgHome.style.backgroundImage = "url('assets/img/low-poly-dark.svg')";
        bgPoly1.style.backgroundImage = "url('assets/img/polygon-1-dark.svg')";
        bgPoly2.style.backgroundImage = "url('assets/img/polygon-2-dark.svg')";
        bgPoly3.style.backgroundImage = "url('assets/img/polygon-3-dark.svg')";
        bgPoly4.style.backgroundImage = "url('assets/img/polygon-4-dark.svg')";
    }
    else
    {
        icon.src = "assets/img/moon.png";
        bgHome.style.backgroundImage = "url('assets/img/low-poly-light.svg')";
        bgPoly1.style.backgroundImage = "url('assets/img/polygon-1-light.svg')";
        bgPoly2.style.backgroundImage = "url('assets/img/polygon-2-light.svg')";
        bgPoly3.style.backgroundImage = "url('assets/img/polygon-3-light.svg')";
        bgPoly4.style.backgroundImage = "url('assets/img/polygon-4-light.svg')";
    }
}



// Scroll Reveal Animation //
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: 'true',
})

// Scroll Home //
sr.reveal('.home_title', {origin: 'top', distance: '150px'})
sr.reveal('.home_button', {origin: 'right', delay: 300})
sr.reveal('.home_social', {origin: 'bottom', distance: '200px', delay: 200, interval: 200})
sr.reveal('.home_img', {origin: 'bottom', distance: '150px'})

// Scroll About //
sr.reveal('.about_img', {})
sr.reveal('.about_subtitle', {origin: 'bottom', delay: 300})
sr.reveal('.about_profession', {origin: 'bottom', delay: 400})
sr.reveal('.about_text', {origin: 'bottom', delay: 500})
sr.reveal('.about_social', {origin: 'bottom', delay: 750})
sr.reveal('.about_img', {delay: 500})

// Scroll Skills //
sr.reveal('.skills_subtitle', {})
sr.reveal('.skills_name', {delay: 300, interval: 100})
sr.reveal('.skills_img', {origin: 'bottom', distance: '125px', delay: 150})

// Scroll Portfolio //
sr.reveal('.portfolio_img', {delay: 300, interval: 100})

// Scroll Contact //
sr.reveal('.contact_info', {origin: 'top', interval: 100})
sr.reveal('.contact_form', {origin: 'bottom', interval: 100})