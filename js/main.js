function priPub() {
    const q2 = document.getElementById('q2')
    q2.style.display = 'block'
}

function smallLarge() {
    const q3 = document.getElementById('q3')
    q3.style.display = 'block'
}

function liberalReligous() {
    const q4 = document.getElementById('q4')
    q4.style.display = 'block'
}

const fourYearButton = document.getElementById('showFour')
const publicButton = document.getElementById('public')
const largeButton = document.getElementById('large')
const privateButton = document.getElementById('private')
const smallButton = document.getElementById('small')



fourYearButton.addEventListener('click', priPub)
publicButton.addEventListener('click', smallLarge)
largeButton.addEventListener('click', liberalReligous)
privateButton.addEventListener('click', smallLarge)
smallButton.addEventListener('click', liberalReligous)

