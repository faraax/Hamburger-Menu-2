let menuIcon = document.querySelector('.hamburger-menu');

let navBar = document.querySelector('.navbar')

menuIcon.addEventListener('click', () => {

    navBar.classList.toggle('change');

    let len = menuIcon.children.length

    for (var i = 0; i < len; i++) {

        var mIcon = menuIcon.children[i].classList[2]

        var j = i + 1

        if (mIcon === `open`) {

            menuIcon.children[i].removeAttribute('class')

            menuIcon.children[i].setAttribute('class', `line line-${j} close`)

        } else {

            menuIcon.children[i].removeAttribute('class')

            menuIcon.children[i].setAttribute('class', `line line-${j} open`)

        }
    }
})


