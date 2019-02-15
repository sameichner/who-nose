//to be done later
alert("javascript is connected successfully");
document.getElementById("newpostsubmit").onclick = function () {
    var name = document.getElementById("newpostname").value;
    var dt = Date();
    var content = document.getElementById("newpostbody").value;
    post(name,dt.toLocaleString(),content);
};
function post(name,time,content){
    alert(name + "and" + time + " and" + content);
}