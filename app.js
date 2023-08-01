const root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let backgroundColor = rootStyles.getPropertyValue('--background-color');
let textColor = rootStyles.getPropertyValue('--text-color');
const themeSwitch = document.querySelector('.switch-checkbox');

window.onload = () => {
    //Generate masonry grid
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        itemSelector: 'article',
        gutter: 20,
        stagger: 30,
        fitWidth: true,
    });
}

    //Update theme
    const theme = localStorage.getItem('theme');
    console.log(theme)
    if (theme === 'dark') {
        root.style.setProperty('--background-color', '#000');
        root.style.setProperty('--text-color', '#fff');
        themeSwitch.checked = true;
    }

//Change theme
function changeTheme(){
    if (themeSwitch.checked) {
        root.style.setProperty('--background-color', '#000');
        root.style.setProperty('--text-color', '#fff');
        localStorage.setItem('theme', 'dark');
    } else {
        root.style.setProperty('--background-color', '#fff');
        root.style.setProperty('--text-color', '#000');
        localStorage.setItem('theme', 'light');
    }

    // if (localStorage.getItem('theme') === 'light') {
    //     root.style.setProperty('--background-color', '#000');
    //     root.style.setProperty('--text-color', '#fff');
    //     localStorage.setItem('theme', 'dark');
    //     // themeButton.innerText = 'Light';
    // } else if (localStorage.getItem('theme') === 'dark') {
    //     root.style.setProperty('--background-color', '#fff');
    //     root.style.setProperty('--text-color', '#000');
    //     localStorage.setItem('theme', 'light');
    //     // themeButton.innerText = 'Dark';
    // }
    console.log(themeSwitch.checked)

}

// const themeButton = document.querySelector('.theme-button');
// themeButton.addEventListener('click', changeTheme);

themeSwitch.addEventListener('change', changeTheme);