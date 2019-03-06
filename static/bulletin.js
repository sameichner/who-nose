//to be done later
var addNL = false;
document.onload = addFromLocal();

document.getElementById("newpostsubmit").onclick = function () {
    var name = document.getElementById("newpostname").value;
    var dt = Date();
    var content = document.getElementById("newpostbody").value;
    post(name,dt.toLocaleString(),content);
    addToLocal(name,dt.toLocaleString(),content);
};

document.getElementById("newpostcancel").onclick = function () {
    document.getElementById("newpostname").value = "";
    document.getElementById("newpostbody").value = "";
};

function post(name,time,content){
    temp = document.getElementsByTagName("template")[0];
    temp.content.getElementById("posttitle").textContent = name;
    temp.content.getElementById("postcontent").textContent = content;
    temp.content.getElementById("posttime").title = time;

    var board = document.getElementById("board");
    board.appendChild(temp.content.querySelector("div").cloneNode(true), true);
    if (addNL) board.appendChild(document.createElement("br"));
    addNL=!addNL;
}

function addFromLocal(){
    
    let myStorage = window.localStorage;
    let storageItem = myStorage.getItem("bored-bulletin-posts");
    if (storageItem == null){
        return;
    }
    
    let arr2d = fromCSVEncoding(storageItem);
    
    for (const id in arr2d) {
        const arr1d = arr2d[id];
        if (arr1d.length >= 3) post(arr1d[0],arr1d[1],arr1d[2]);
    }
    
}

function addToLocal(name,date,content){
    var output = toLineCSVEncoding([name,date,content]);
    
    let myStorage = window.localStorage;
    let storageItem = myStorage.getItem("bored-bulletin-posts");
    if (storageItem != null) {
        if (storageItem.length != 0) output = "\n"+output;
        output = storageItem + output;
    }
    myStorage.setItem("bored-bulletin-posts",output);
    myStorage.getItem("bored-bulletin-posts"); //apparently chrome wants this line why
}

function toLineCSVEncoding(line){
    var output = "";
    for (var i = 0; i < line.length; i++){
        output+=toSingularCSVEncoding(line[i]);
        if (i<line.length-1) output+=",";
    }
    
    return output;
}

function toSingularCSVEncoding(content){
var output = content;
if (content.includes("\n") || content.includes(",") || content.includes("\"")){
    output = content.split("\"").join("\"\"");
    output = "\""+output+"\""; 
}

return output;
}

function fromCSVEncoding(encoded){
    var output = [[""]];
    var printquotes = false;
    var printspecial = false;
    for (const id in encoded){
        const character = encoded[id];
        switch (character){
            case '\"':{
                if (!printquotes && !printspecial) {
                    printspecial = true;
                    break;
                }
                if (!printquotes) {
                    printquotes = true;
                    printspecial = false;
                    break;
                }
                else {
                    printquotes = false;
                    printspecial = true;
                    output[output.length-1][output[output.length-1].length-1] += character;
                    break;
                }
            }
            case ',':{
                if (!printspecial) {
                    printspecial = false;
                    printquotes = false;
                    output[output.length-1][output[output.length-1].length] = "";
                    break;
                }
            }
            case '\n':{
                if (!printspecial) {
                    printspecial = false;
                    printquotes = false;
                    output[output.length] = [""];
                    break;
                }
            }
            default:{
                output[output.length-1][output[output.length-1].length-1] += character;
            }
        }
    }
    return output;
}