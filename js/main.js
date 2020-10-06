function priPub() {
    const q2 = document.getElementById('q2')
    q2.style.display = 'block'
}

document.getElementById('two').onchange = function() {
    let two = document.getElementsByClassName("twoYear")[0]
    two.style.display = 'block'

    let input = document.getElementsByClassName("fourYear");
    for ( let i = 0; i < input.length; i++) {
        input[i].style.display = 'none'
    }

    const q2 = document.getElementById('q2')
    q2.style.display = 'none'
}

document.getElementById('four').onchange = function () {
    let input = document.getElementsByClassName("fourYear");
    for ( let i = 0; i < input.length; i++) {
        input[i].style.display = 'block'
    }

    let two = document.getElementsByClassName("twoYear")[0]
    two.style.display = 'none'

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

document.getElementById('clear-button').addEventListener('click', function() {
    ["two", "four", "public", "private", "small", "large", "liberalArts", "religous"].forEach(function(id) {
        document.getElementById(id).checked = false;
    });
});

const fourYearButton = document.getElementById('four')
const publicButton = document.getElementById('public')
const largeButton = document.getElementById('large')
const privateButton = document.getElementById('private')
const smallButton = document.getElementById('small')



fourYearButton.addEventListener('click', priPub)
publicButton.addEventListener('click', smallLarge)
largeButton.addEventListener('click', liberalReligous)
privateButton.addEventListener('click', smallLarge)
smallButton.addEventListener('click', liberalReligous)

