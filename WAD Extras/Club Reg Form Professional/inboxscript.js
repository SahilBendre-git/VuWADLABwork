window.onload = function() {
    //https://x8ki-letl-twmt.n7.xano.io/api:KqJoWUB-/wadlab_db
    const entrytable = document.getElementById('EntryTable')
    let k = 0;
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:KqJoWUB-/wadlab_db')
    .then(res => res.json())
    .then(userdata => {
        for(X in userdata)
        {
            entrytable.innerHTML +=
            `
                <tr>
                    <td>
                        ${++k}
                    </td>
                    <td>
                        ${userdata[X].id}
                    </td>
                    <td>
                        ${userdata[X].inusername}
                    </td>
                    <td>
                        ${userdata[X].inuseremail}
                    </td>
                    <td>
                        ${userdata[X].inusertele}
                    </td>
                    <td>
                        ${userdata[X].usergender}
                    </td>
                    <td>
                        ${userdata[X].user_DOB}
                    </td>
                    <td>
                        ${userdata[X].user_dept}
                    </td>
                    <td>
                        ${userdata[X].user_YOS}
                    </td>
                    <td>
                        ${userdata[X].Club_Selection}
                    </td>
                    <td>
                        ${userdata[X].Areas_of_Interest}
                    </td>
                    <td>
                        ${userdata[X].JR}
                    </td>
                </tr>
            `
        }
        if(k==0) document.getElementById('entryboxx').innerText = 'No Data'
    })
}