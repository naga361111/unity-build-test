// games로 view 이동
const games_nav = document.querySelectorAll('#games-nav');
const games_target = document.querySelectorAll('#games-target');

games_nav.forEach((element) => {
    element.addEventListener('click', () => {
        games_target.forEach((element) => {
            element.scrollIntoView({ behavior: 'smooth' });
        })
    })
})

// about view 이동
const about_nav = document.querySelectorAll('#about-nav');
const about_target = document.querySelectorAll('#about-target');

about_nav.forEach((element) => {
    element.addEventListener('click', () => {
        about_target.forEach((element) => {
            element.scrollIntoView({ behavior: 'smooth' });
        })
    })
})

// contact view 이동
const contact_nav = document.querySelectorAll('#contact-nav');
const contact_target = document.querySelectorAll('#contact-target');

contact_nav.forEach((element) => {
    element.addEventListener('click', () => {
        contact_target.forEach((element) => {
            element.scrollIntoView({ behavior: 'smooth' });
        })
    })
})