// function priPub() {
//     const q2 = document.getElementById('q3')
//     q2.style.display = 'block'
// }

// Show 2-year colleges and hide the others
document.getElementById('two').onchange = function() {
    let two = document.getElementsByClassName("twoYear")[0]
    two.style.display = 'block'

    let input = document.getElementsByClassName("fourYear");
    for ( let i = 0; i < input.length; i++) {
        input[i].style.display = 'none'
    }

    const q2 = document.getElementById('q2')
    q2.style.display = 'none'

    const q3 = document.getElementById('q3')
    q3.style.display = 'none'

    const q4 = document.getElementById('q4')
    q4.style.display = 'none'
}

// Show 4-year colleges and hide the others
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


// Show 4-Year Small colleges
document.getElementById('small').onchange = function(){
    let smallColl = document.getElementsByClassName("small");
    for ( let i = 0; i < smallColl.length; i++) {
        smallColl[i].style.display = 'block'
    }

    let largeColl = document.getElementsByClassName("large");
    for ( let i = 0; i < largeColl.length; i++) {
        largeColl[i].style.display = 'none'
    }

    const q3 = document.getElementById('q3')
    q3.style.display = 'block'
}

// Show 4-year Large colleges
document.getElementById('large').onchange = function(){
    let largeColl = document.getElementsByClassName("large");
    for ( let i = 0; i < largeColl.length; i++) {
        largeColl[i].style.display = 'block'
    }

    let smallColl = document.getElementsByClassName("small");
    for ( let i = 0; i < smallColl.length; i++) {
        smallColl[i].style.display = 'none'
    }

    const q3 = document.getElementById('q3')
    q3.style.display = 'block'
}


// Show 4-year Private colleges
document.getElementById('private').onchange = function(){
    let privateColl = document.getElementsByClassName("private");
    for ( let i = 0; i < privateColl.length; i++) {
        privateColl[i].style.display = 'block'
    }

    let publicColl = document.getElementsByClassName("public");
    for ( let i = 0; i < publicColl.length; i++) {
        publicColl[i].style.display = 'none'
    }

    const q4 = document.getElementById('q4')
    q4.style.display = 'block'

    document.getElementById('private').addEventListener('click', function() {
        ["liberalArts", "religous"].forEach(function(id) {
            document.getElementById(id).checked = false;
        });
    });
    

}

// Show 4-year Public colleges
document.getElementById('public').onchange = function(){
    let publicColl = document.getElementsByClassName("public");
    for ( let i = 0; i < publicColl.length; i++) {
        publicColl[i].style.display = 'block'
    }

    let privateColl = document.getElementsByClassName("private");
    for ( let i = 0; i < privateColl.length; i++) {
        privateColl[i].style.display = 'none'
    }

    let libColl = document.getElementsByClassName("liberalArts");
    for (let i = 0; i < libColl.length; i++) {
        libColl[i].style.display = 'none'
    }

    let relColl = document.getElementsByClassName('religous');
    for (let i = 0; i < relColl.length; i++) {
        relColl[i].style.display = 'none'
    }

    const q4 = document.getElementById('q4')
    q4.style.display = 'none'

}

// Show Liberal Arts Private Colleges
document.getElementById('liberalArts').onchange = function(){
    let libColl = document.getElementsByClassName("liberalArts");
    for (let i = 0; i < libColl.length; i++) {
        libColl[i].style.display = 'block'
    }

    let relColl = document.getElementsByClassName('religous');
    for (let i = 0; i < relColl.length; i++) {
        relColl[i].style.display = 'none'
    }

    let publicColl = document.getElementsByClassName("public");
    for ( let i = 0; i < publicColl.length; i++) {
        publicColl[i].style.display = 'none'
    }
}

// Show Religous Private Colleges
document.getElementById('religous').onchange = function(){
    let relColl = document.getElementsByClassName('religous');
    for (let i = 0; i < relColl.length; i++) {
        relColl[i].style.display = 'block'
    }

    let libColl = document.getElementsByClassName("liberalArts");
    for (let i = 0; i < libColl.length; i++) {
        libColl[i].style.display = 'none'
    }

    let publicColl = document.getElementsByClassName("public");
    for ( let i = 0; i < publicColl.length; i++) {
        publicColl[i].style.display = 'none'
    }
}



// function smallLarge() {
//     const q3 = document.getElementById('q2')
//     q3.style.display = 'block'
// }


// function liberalReligous() {
//     const q4 = document.getElementById('q4')
//     q4.style.display = 'block'
// }


// Resetting the radio buttons
document.getElementById('clear-button').addEventListener('click', function() {
    ["two", "four", "public", "private", "small", "large", "liberalArts", "religous"].forEach(function(id) {
        document.getElementById(id).checked = false;
    });
});

// const fourYearButton = document.getElementById('four')
// const publicButton = document.getElementById('public')
// const largeButton = document.getElementById('large')
// const privateButton = document.getElementById('private')
// const smallButton = document.getElementById('small')



// fourYearButton.addEventListener('click', priPub)
// publicButton.addEventListener('click', smallLarge)
// largeButton.addEventListener('click', liberalReligous)
// privateButton.addEventListener('click', smallLarge)
// smallButton.addEventListener('click', liberalReligous)

