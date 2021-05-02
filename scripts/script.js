function switchPage(page_id)
{
    document.getElementById("resume").classList.remove("active-sidebar-menu-item");
    document.getElementById("about").classList.remove("active-sidebar-menu-item");
    document.getElementById("experience").classList.remove("active-sidebar-menu-item");
    document.getElementById("project").classList.remove("active-sidebar-menu-item");

    document.getElementById(page_id).classList.add("active-sidebar-menu-item")

    document.getElementById("window-file").innerHTML = page_id+".html";
    document.getElementById("tab-file").innerHTML = page_id+".html";
}

function alertuser(page_id, experience_data) 
{
    switchPage(page_id);
    alert(experience_data);
    console.log(experience_data);
}
