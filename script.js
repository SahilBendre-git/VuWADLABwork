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