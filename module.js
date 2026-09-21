import { filterProjects, renderLabProjects, renderExtraProjects, renderClassProjects } from "./appscript.js"

function LabP() {
    renderLabProjects()
}

function ExtraP() {
    renderExtraProjects()
}

function ClassP() {
    renderClassProjects()
}

function Filter(Segment) {
    filterProjects(Segment)
}

window.onload = function() 
{
    filterProjects('WADLP')
}





window.Filter = Filter;
window.Lab = LabP
window.Extra = ExtraP
window.Class = ClassP
