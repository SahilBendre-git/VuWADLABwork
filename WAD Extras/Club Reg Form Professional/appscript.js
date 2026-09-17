function getradioResponse(name)
{
    const radios = document.getElementsByName(name);
    for(i = 0; i < radios.length; i++)
    {
        if(radios[i].checked)
        {
            return radios[i].value;
        }
    }
}

function sendRequest()
{
    //Areas of interest - checkboxes selector
    const AoI = [];

    const technical = document.getElementById('TechnicalRole');
    const management = document.getElementById('MGMTRole');
    const creative = document.getElementById('CDRole');

    if(technical.checked) AoI.push('Technical Role')
    if(management.checked) AoI.push('Management & Leadership Role')
    if(creative.checked) AoI.push('Creaetive & Designing Role')


    const userdata = {
        inusername: document.getElementById('user_name').value,
        inuseremail: document.getElementById('user_email').value,
        inusertele: document.getElementById('user_phone').value,
        usergender: getradioResponse('inGender'),
        user_DOB: document.getElementById('u_DOB').value,
        user_dept: document.getElementById('sel_department').value,
        user_YOS: document.getElementById('sel_yos').value,
        Club_Selection: document.getElementById('club_selection').value,
        Areas_of_Interest: [],
        JR: document.getElementById('joining_reason').value
    }
    
    for(j = 0; j < AoI.length; j++)
        {
            userdata.Areas_of_Interest += (AoI[j] + " ");
        }

    //Post to DB

    fetch('https://x8ki-letl-twmt.n7.xano.io/api:KqJoWUB-/wadlab_db', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(userdata)
    })
    .then(res => res.json())
    .then(server_response => {
        console.log(server_response)
        return 'Success'
    })
    .catch(error => {
        alert('An error occured')
        console.log(error);
        return 'bad'
    })

    console.log(userdata)
}