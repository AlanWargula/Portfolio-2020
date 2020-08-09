
// THEME SWITCHER

var theme, element;

// change color
function color() {

    element = document.getElementById("stylesheet");

    if (theme === 'dark') {
        element.setAttribute('href', "norm-calc-light.css");

        theme = 'light';
    } else if (theme !== 'dark') {
        element.setAttribute('href', "norm-calc-dark.css");

        theme = 'dark';
    }

};




