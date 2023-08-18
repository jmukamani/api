// Toggle navigation menu for mobile
const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const url = 'https://hotels4.p.rapidapi.com/v2/get-meta-data';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8605becc9fmshfd873045f53a4afp1763a2jsn2f099742fead',
                'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.text();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
        
// View hotel
document.addEventListener('DOMContentLoaded', function() {
    const viewHotelButtons = document.querySelectorAll('.viewHotelsButton');
    viewHotelButtons.forEach(function(button) {
        button.addEventListener('click', async function() {
            window.location.href = 'https://www.hotels.com/';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '8605becc9fmshfd873045f53a4afp1763a2jsn2f099742fead',
                    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                console.log(result);
            } catch (error) {
                console.error(error);
            } // Add this closing curly brace
        });
    });
});
