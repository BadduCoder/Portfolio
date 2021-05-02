function download_resume()
{
    
}

function switchPage(page_id)
{
    document.getElementById("resume").classList.remove("active-sidebar-menu-item");
    document.getElementById("about").classList.remove("active-sidebar-menu-item");
    document.getElementById("experience").classList.remove("active-sidebar-menu-item");
    document.getElementById("project").classList.remove("active-sidebar-menu-item");

    document.getElementById(page_id).classList.add("active-sidebar-menu-item")

    if(page_id!="resume")
    {
        document.getElementById("window-file").innerHTML = page_id+".json";
        document.getElementById("tab-file").innerHTML = page_id+".json";
    }
    else
    {
        document.getElementById("window-file").innerHTML = page_id+".pdf";
        document.getElementById("tab-file").innerHTML = page_id+".pdf";  
    }
}

function navigate(page_id, data) 
{
    switchPage(page_id);
    populate_data(data);
}

function populate_data(data)
{
    formatted_data = `<div class="section-wrapper">`;
    formatted_data += `${syntaxHighlight(data)}`;
    formatted_data += `</div>`;
    document.getElementById("code-editor").innerHTML = formatted_data;
}


function syntaxHighlight(json) {
    if (typeof json != 'string') {
         json = JSON.stringify(json, undefined, 4);
    }
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}