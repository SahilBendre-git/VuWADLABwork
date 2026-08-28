window.onload = function() {
    
    const hdr = document.getElementById('projects-holder')

    let k = 0;
    
    for(X in projects) {

        k++

        hdr.innerHTML +=

        `
        <div class="projectbox" id="WAD_LAB_${k}">
                <p style="float: right; width: 40%;">
                    Date of Creation: ${projects[X].DOC}
                </p>

                <h2>${projects[X].title}</h2>

                <hr>

                <div style="float: right; width: 35%; border: 0px solid;">
                    
                    <br>

                    <a href="${projects[X].path}" target="blank">
                        <button class="open-button">Open Project</button>
                    </a>

                </div>

                <div style="width: 60%; border-right: 1px solid; padding-right: 14px;">
                    <p>
                        <b>Description of Project:- </b>
                        <i>
                            ${projects[X].desc}
 
                        </i>
                    </p>

                    <br><br>

                </div>             

            </div>

            <br><br>
        
        `
    }
}