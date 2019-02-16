//to be done later
alert("javascript is connected successfully");

document.getElementById("newpostsubmit").onclick = function () {
    var name = document.getElementById("newpostname").value;
    var dt = Date();
    var content = document.getElementById("newpostbody").value;
    post(name,dt.toLocaleString(),content);
};

document.getElementById("newpostcancel").onclick = function () {
    document.getElementById("newpostname").value = "";
    document.getElementById("newpostbody").value = "";
};

function post(name,time,content){
    //alert(name + "and" + time + " and" + content);

    temp = document.getElementsByTagName("template")[0];
    temp.content.getElementById("posttitle").textContent = name;
    temp.content.getElementById("postcontent").textContent = content;
    temp.content.getElementById("posttime").title = time;

    document.getElementById("board").appendChild(temp.content.querySelector("div").cloneNode(true), true);
}