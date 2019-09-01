function addValue() {
    var container = document.getElementById("container");
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    container.appendChild(inputElement);
    var inputCount = container.getElementsByTagName("input").length;
    inputElement.name = "value" + inputCount; 
}


function calculateAverage() {
    var container = document.getElementById("container");
    var inputElements = container.getElementsByTagName("input");

    var sum = 0;
    for (i = 0; i < inputElements.length; i++) {
        sum = sum + Number(inputElements[i].value);
    }
    var average = sum / inputElements.length;

    var resultDiv = document.createElement("div");
    resultDiv.id = "resultAverage";
    resultDiv.innerHTML= "Keskiarvo: " + average.toFixed(2);
    document.body.appendChild(resultDiv);
}