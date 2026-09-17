let currentsec = 1

let totalsections = 4

let secId = "Sec"+currentsec

document.getElementById('RegistrationForm').onsubmit = function(e) {
    e.preventDefault();
    
    let agreed = document.getElementById('tcagreebox').checked

    if(currentsec != totalsections) {
        return
    }

    if(!agreed) {
        alert('Please agree to the terms & Conditions')
        return;
    }

    //Form Submit
    sendRequest()

    document.getElementById('formholder').innerHTML = 
    `
        <center><h2>Form Submitted! Please wait for any response. </h2></center>
    `

}

document.getElementById('NextSecBtn').addEventListener('click', event => {
    event.preventDefault();
    togglesection('N')

    if(currentsec == totalsections)//at last sec
    {
        document.getElementById('NextSecBtn').hidden = true
        document.getElementById('SubmitBtn').hidden = false
    }
})

document.getElementById('PrevSecBtn').addEventListener('click', e => {
    e.preventDefault();
    togglesection('P')

    if(currentsec == totalsections-1)//at 2nd-last sec
    {
        document.getElementById('NextSecBtn').hidden = false
        document.getElementById('SubmitBtn').hidden = true
    }

})

function hideall()
{
    for(i = 1; i <= totalsections; i++) {
        document.getElementById('Sec'+i).hidden = true;
        //.style.display = 'none';
    }
}

function togglesection(flow)
{
    hideall();

    if(flow == 'N' && currentsec != totalsections)//Next section
        currentsec++;
    else if(flow == 'P' && currentsec != 1)
        currentsec--;

    document.getElementById('Sec'+currentsec).hidden = false;
    //.style.display = 'block'
}