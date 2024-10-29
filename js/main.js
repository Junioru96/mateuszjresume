const btn = document.querySelector('.btn-pdf')

function resumePrint() {
    window.print()
}

btn.addEventListener('click', resumePrint)