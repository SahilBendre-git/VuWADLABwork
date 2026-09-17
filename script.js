let active_id =  ""

window.onload = function() 
{
    filterProjects('WADLP')
}

function filterProjects(exp) {
    const selectedType = document.getElementById('select-project-type').value;
    const LabProjHolder = document.getElementById('projects-holder');
    const ExtraProjHolder = document.getElementById('extra-projects-holder');
    const classPracProjHolder = document.getElementById('class-projects-holder');

    if(exp == active_id) {
        return
    }
    else active_id = exp

    //Hide all
    LabProjHolder.style.display = 'none';
    classPracProjHolder.style.display = 'none';
    ExtraProjHolder.style.display = 'none';


    switch(exp) {
        case 'WADLP':
            LabProjHolder.style.display = 'block';
            renderLabProjects()
            break;
        case 'WADCP':
            classPracProjHolder.style.display = 'block';
            renderClassProjects();
            break;
        case 'WADEP':
            ExtraProjHolder.style.display = 'block';
            renderExtraProjects();
            break;
        default:
            alert('Please select a valid project type.');
    }



}   

function renderLabProjects() {
    let k = 0;
    for(X in projects) k++; //Count no of registered projects
    
    const hdr = document.getElementById('projects-holder')
    
    for(X in projects) {

        hdr.innerHTML +=

        `
            <br><br>
            <div class="pcard" id="VU_WADLAB_${k}">
                <i>
                    ${projects[X].DOC} (Lab ${k--})
                </i>
                <h3 style="color: purple">
                    ${projects[X].title}
                </h3>

                <hr>

                <p>
                    <b>Description:- </b>
                    <i>
                        ${projects[X].desc}
                    </i>
                </p>

                <a href="${projects[X].path}" target="blank">
                    <button class="open-button">Open Project</button>
                </a>

            </div>

        
        `
    }
}

function renderExtraProjects() {

    const extraProjHolder = document.getElementById('extra-projects-holder');
    extraProjHolder.innerHTML = ''

    let k = 0;

    for(X in extra_projects) k++;

    for(X in extra_projects) {
        extraProjHolder.innerHTML += 
        `
            <br><br>
            <div class="pcard">
                <i>
                    ${extra_projects[X].Date_Of_Issue}
                </i>
                <h3>
                    ${extra_projects[X].title}
                </h3>

                <hr>

                <div class="notes" style="display: none; float: right; width: 10%; cursor: pointer;">
                    📝 Notes
                </div>

                <p style="width: 70%;">
                    <b>Description:- </b>
                    <i>
                        ${extra_projects[X].description}
                    </i>
                </p>

                <button class="open-button" onclick="window.location.href = '${extra_projects[X].landing_page_path}'" target="blank">Open Project</button>

            </div>
        `

    }
}

function renderClassProjects() {

    //alert('Rendering Class Projects...');

    const classPracProjHolder = document.getElementById('class-projects-holder');
    classPracProjHolder.innerHTML = ''

    let k = 0;
    for(X in class_projects) k++; //Count no of registered projects

    for(X in class_projects) {

    classPracProjHolder.innerHTML += 
    `
        <br><br>
        <div class="pcard" id="VU_WADLAB_${k}">
                <i>
                    ${class_projects[X].DOC} (Lec. Practical ${k--})
                </i>
                <h3 style="color: purple">
                    ${class_projects[X].title}
                </h3>

                <hr>

                <p>
                    <b>Description:- </b>
                    <i>
                        ${class_projects[X].desc}
                    </i>
                </p>

                <a href="${class_projects[X].path}" target="blank">
                    <button class="open-button">Open Project</button>
                </a>

            </div>
    `

    }

}
