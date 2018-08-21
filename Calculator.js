"use strict";


var HistoryData = [];
var CalculationId = 1;
var length=0;
window.onload = function() {
        if (localStorage.History) {
        var localData = JSON.parse(localStorage.History);
        length = localData.length-1;
     }
};
function Reload() {
    location.reload();
}
function LengthOfLocalStorage(){
    
}
function SaveDataToLocalStorage(NewCalculation) {
    if (!localStorage.History) {
        localStorage.History = JSON.stringify(HistoryData);
    } else {
        var PrevData = JSON.parse(localStorage.History);
        PrevData.push(NewCalculation);
        localStorage.History = JSON.stringify(PrevData);
    }
}

function CreateNewCalculation() {
    var NewCalculation = new Object();
    if (localStorage.History) {
        var localData = JSON.parse(localStorage.History);
        CalculationId = localData.length + 1;
    }
    NewCalculation.Id = CalculationId;
    NewCalculation.Calculate = document.getElementById("display").value;
    NewCalculation.Result = eval(document.getElementById("display").value);
    HistoryData.push(NewCalculation);
    SaveDataToLocalStorage(NewCalculation);
}

function ShowData(val) {
    document.getElementById("display").value = val;
}

function GetValue(val) {
    document.getElementById("display").value += val;
}

function EqualKey() {
    try {
        //if (document.getElementById("display").value != undefined) {
            CreateNewCalculation();
            ShowData(eval(document.getElementById("display").value));
        //}
    } catch (e) {
        alert(e.message);
    }
}

function Enter(event) {
    if (event.keyCode == 13 || event.which == 13) {
        EqualKey();
    }
}

function GetHistory() {
    if (!localStorage.History) {
        alert("History is Empty");
    } else {
        var localData = JSON.parse(localStorage.History);
        //length = localData.length-1;
        ShowData(localData[length].Calculate);
        if (length > 0) {
            length--;
        }
    }
}
