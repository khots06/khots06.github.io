
// Show small colleges if button is selected and don't show them if the button isn't selected
function smallButton() {
    if ( document.getElementById('small').checked == true ) {
        let smallColl = document.getElementsByClassName("small");
        for ( let i = 0; i < smallColl.length; i++) {
                smallColl[i].style.display = 'block'
        }
    }

    if ( document.getElementById('small').checked == false ) {
        let smallColl = document.getElementsByClassName("small");
        for ( let i = 0; i < smallColl.length; i++) {
                smallColl[i].style.display = 'none'
        }
    }
}

// Show large colleges if button is selected and don't show them if the button isn't selected
function largeButton() {
    if ( document.getElementById('large').checked == true ) {
        let largeColl = document.getElementsByClassName("large");
        for ( let i = 0; i < largeColl.length; i++) {
                largeColl[i].style.display = 'block'
        }
    }

    if ( document.getElementById('large').checked == false ) {
        let largeColl = document.getElementsByClassName("large");
        for ( let i = 0; i < largeColl.length; i++) {
                largeColl[i].style.display = 'none'
        }
    }
}

// Show private colleges if button is selected and don't show them if the button isn't selected
function privateButton() {
    if ( document.getElementById('private').checked == true ) {
        let privateColl = document.getElementsByClassName("private");
        for ( let i = 0; i < privateColl.length; i++) {
                privateColl[i].style.display = 'block'
        }
    }

    if ( document.getElementById('private').checked == false ) {
        let privateColl = document.getElementsByClassName("private");
        for ( let i = 0; i < privateColl.length; i++) {
                privateColl[i].style.display = 'none'
        }
    }
}

// Show public colleges if button is selected and don't show them if the button isn't selected
function publicButton() {
    if ( document.getElementById('public').checked == true ) {
        let publicColl = document.getElementsByClassName("public");
        for ( let i = 0; i < publicColl.length; i++) {
                publicColl[i].style.display = 'block'
        }
    }

    if ( document.getElementById('public').checked == false ) {
        let publicColl = document.getElementsByClassName("public");
        for ( let i = 0; i < publicColl.length; i++) {
                publicColl[i].style.display = 'none'
        }
    }
}

function validateLPU() {
    if ( document.getElementById('large').checked == true && document.getElementById('public').checked == true ) {
        let largePub = document.getElementsByClassName('largePublic');
        for ( let i = 0; i < largePub.length; i++) {
            largePub[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.smallPrivate, .smallPublic, .largePrivate');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }
    }
}

function validateLPR() {
    if ( document.getElementById('large').checked == true && document.getElementById('private').checked == true ) {
        let largePri = document.getElementsByClassName('largePrivate');
        for ( let i = 0; i < largePri.length; i++) {
            largePri[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.smallPrivate, .smallPublic, .largePublic');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }

    }
}

function validateSPU() {
    if ( document.getElementById('small').checked == true && document.getElementById('public').checked == true ) {
        let smallPub = document.getElementsByClassName('smallPublic');
        for ( let i = 0; i < smallPub.length; i++) {
            smallPub[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.smallPrivate, .largePrivate, .largePublic');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }
    }
}

function validateSPR() {
    if ( document.getElementById('small').checked == true && document.getElementById('private').checked == true ) {
        let smallPri = document.getElementsByClassName('smallPrivate');
        for ( let i = 0; i < smallPri.length; i++) {
            smallPri[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.smallPublic, .largePrivate, .largePublic');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }
    }
}

function validateSPRLA() {
    if ( document.getElementById('small').checked == true && document.getElementById('private').checked == true && document.getElementById('liberalArts').checked == true) {
        let smallLib = document.getElementsByClassName('smallLiberal');
        for ( let i = 0; i < smallLib.length; i++) {
            smallLib[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.largeLiberal, .smallReligous, .largeReligous');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }
    }
}

function validateSPRRL() {
    if ( document.getElementById('small').checked == true && document.getElementById('private').checked == true && document.getElementById('religous').checked == true) {
        let smallRel = document.getElementsByClassName('smallReligous');
        for ( let i = 0; i < smallRel.length; i++) {
            smallRel[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.largeLiberal, .smallLiberal, .largeReligous');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }
    }
}

function validateLPRLA() {
    if ( document.getElementById('large').checked == true && document.getElementById('private').checked == true && document.getElementById('liberalArts').checked == true) {
        let largeLib = document.getElementsByClassName('largeLiberal');
        for ( let i = 0; i < largeLib.length; i++) {
            largeLib[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.smallReligous, .smallLiberal, .largeReligous');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }
    }
}

function validateLPRRL() {
    if ( document.getElementById('large').checked == true && document.getElementById('private').checked == true && document.getElementById('religous').checked == true) {
        let largeRel = document.getElementsByClassName('largeReligous');
        for ( let i = 0; i < largeRel.length; i++) {
            largeRel[i].style.display = 'block'
        }

        let others = document.querySelectorAll('.smallReligous, .smallLiberal, .largeLiberal');
        for ( let i = 0; i < others.length; i++) {
            others[i].style.display = 'none'
        }
    }
}


// Question1
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

// Question2
// Show 4-Year Small colleges
document.getElementById('small').onchange = function(){
    smallButton()
    largeButton()

    
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

    validateSPU()
    validateSPR()
}

// Show 4-year Large colleges
document.getElementById('large').onchange = function(){
    smallButton()
    largeButton()
    
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

    validateLPR()
    validateLPU()
}

// Question3
// Show 4-year Private colleges
document.getElementById('private').onchange = function(){

    privateButton()
    publicButton()
    smallButton()
    largeButton()

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
    
    validateLPR()
    validateSPR()
}

// Show 4-year Public colleges
document.getElementById('public').onchange = function(){
    privateButton()
    publicButton()
    smallButton()
    largeButton()

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

    validateLPU()
    validateSPU()
}

// Question4
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

    validateSPRLA()
    validateLPRLA()
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

    validateSPRRL()
    validateLPRRL()
}



// Resetting the radio buttons
document.getElementById('clear-button').addEventListener('click', function() {
    ["two", "four", "public", "private", "small", "large", "liberalArts", "religous"].forEach(function(id) {
        document.getElementById(id).checked = false;
    });
});

