document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const mainNav = document.querySelector('.main-nav');
    
    const mobileMenuContainer = document.createElement('div');
    mobileMenuContainer.className = 'mobile-menu-container';
    
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.className = 'hamburger-btn';
    hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuContainer.appendChild(hamburgerBtn);
    
    const sideMenu = document.createElement('div');
    sideMenu.className = 'side-menu';
    sideMenu.innerHTML = `
        <div class="side-menu-header">
            <button class="close-btn"><i class="fas fa-times"></i></button>
        </div>
        <ul class="side-menu-list">
            <li><a href="index.html">Home</a></li>
            <li><a href="shope.html">Shop Now</a></li>
            <li><a href="aboutUs.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    `;
    
    header.insertBefore(mobileMenuContainer, header.firstChild);
    document.body.appendChild(sideMenu);
    
    hamburgerBtn.addEventListener('click', function() {
        sideMenu.classList.add('active');
        document.body.classList.add('menu-open');
    });
    
    const closeBtn = sideMenu.querySelector('.close-btn');
    closeBtn.addEventListener('click', function() {
        sideMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
    
    function handleResponsiveMenu() {
        if (window.innerWidth <= 768) {
            mainNav.style.display = 'none';
            mobileMenuContainer.style.display = 'block';
        } else {
            mainNav.style.display = 'block';
            mobileMenuContainer.style.display = 'none';
            sideMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
    
    handleResponsiveMenu();
    
    window.addEventListener('resize', handleResponsiveMenu);
});





function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const consent = document.getElementById('consent').checked;
    
    if (firstName === '' || lastName === '' || email === '' || phone === '' || subject === '' || message === '' || !consent) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide.');
        return false;
    }
    
    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!phoneRegex.test(phone)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return false;
    }
    
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
    
 
    return false; 
}