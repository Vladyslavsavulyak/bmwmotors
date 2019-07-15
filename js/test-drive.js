
function formToJson(){
    var formElement = document.getElementsByTagName("form")[0],
        inputElements = formElement.getElementsByTagName("input"),
        jsonObject = {};
    for(var i = 0; i < inputElements.length; i++){
        var inputElement = inputElements[i];
        jsonObject[inputElement.name] = inputElement.value;

    }
    return JSON.stringify(jsonObject);
}