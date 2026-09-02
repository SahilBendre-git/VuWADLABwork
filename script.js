window.onload = function() 
{
    let k = 0;
    for(X in projects) k++; //Count no of registered projects
    
    const hdr = document.getElementById('projects-holder')
    
    for(X in projects) {

        hdr.innerHTML +=

        `            
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

            <br><br>
        
        `
    }
}

function filterProjects(exp) {
    const selectedType = document.getElementById('select-project-type').value;
    const LabProjHolder = document.getElementById('projects-holder');
    const classPracProjHolder = document.getElementById('class-projects-holder');

    //Hide all
    LabProjHolder.style.display = 'none';
    classPracProjHolder.style.display = 'none';

    switch(exp) {
        case 'WADLP':
            LabProjHolder.style.display = 'block';
            break;
        case 'WADCP':
            classPracProjHolder.style.display = 'block';
            renderClassProjects();
            break;
        default:
            alert('Please select a valid project type.');
    }

    /*

    if (selectedType === 'WADLP') {
        LabProjHolder.style.display = 'block';
    }
    else if (selectedType === 'WADCP') {
        classPracProjHolder.style.display = 'block';
        renderClassProjects();
    }
    else {
        alert('Please select a valid project type.');
    }
        */

}   

function renderClassProjects() {

    //alert('Rendering Class Projects...');

    const classPracProjHolder = document.getElementById('class-projects-holder');

    let k = 0;
    for(X in class_projects) k++; //Count no of registered projects

    for(X in class_projects) {

    classPracProjHolder.innerHTML += 
    `
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

            <br><br>
    `

    }

}
