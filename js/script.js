// contact form
function FormValidation(){
    var fn=document.getElementById('yName').value;
    var fn=document.getElementById('eAddress').value;
    var fn=document.getElementById('yMessage').value;
    

    if(fn == "")  {
        document.getElementById('myspan').textContent = "Fields Cannot be empty!";
        document.getElementById('myspan').style.color = "red";
        return false;
    } else if (fn !== null) {
        document.getElementById('myspan').textContent = "Fields are verified";
        document.getElementById('myspan').style.color = "green";
    }
}