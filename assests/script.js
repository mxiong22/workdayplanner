//display of current day 
var todayDate = moment().format('dddd,MMMM Do');
$('#currentDay').text(todayDate);

//container weekly scheduler

let saveBtn = document.querySelectorAll(".saveBtn")
function addListener() {
    for (let i = 0; i < saveBtn.length; i++) {
        console.log(saveBtn[i])
        saveBtn[i].addEventListener('click', function (event) {
            event.preventDefault()
            //check tag name, change text area value, and time value https://www.w3schools.com/jsref/prop_element_tagname.asp
            console.log("clicked")

            let textAreaValue = $(this).siblings("textarea").val()
            let timeValue = $(this).siblings("textarea").attr("id")
            console.log(timeValue)
            console.log(textAreaValue)
            saveData(timeValue, textAreaValue)
        })
    }

}

function saveData(time, text) {
    let localStorageData = localStorage.getItem('schedule');
    let jsonData = JSON.parse(localStorageData)
    let scheduleObj = {
        key: time,
        value: text
    }
    if (jsonData === null) {
        jsonData = [];

        jsonData.push(scheduleObj);

    }
    else {
        jsonData.push(scheduleObj)
    }
    localStorage.setItem('schedule', JSON.stringify(jsonData))
}

function getData() {
    let localStorageData = localStorage.getItem('schedule');
    let jsonData = JSON.parse(localStorageData)
    if (jsonData != null) {
        for (let i = 0; i < jsonData.length; i++) {
            let { key, value } = jsonData[i];
            let targetElement = document.getElementById(`${key}`).children[1]
            console.log(targetElement)
            targetElement.value = value


        }
    }
}

function getTimer() {
    var input = document.querySelectorAll(".description")
    var currentHour = moment().hour()
    console.log(currentHour)
    input.forEach(function (i) {
        console.log(i.getAttribute("id"))
        if (i.getAttribute("id") > currentHour) {
            i.classList.add("future")
        }

        else if (i.getAttribute("id") < currentHour) {
            i.classList.add("past")
        }

        else { i.classList.add("present") }


    })
}
getTimer()
getData()
addListener()