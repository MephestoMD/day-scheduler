// Create variable to hold formatted time and display it
var dateToday = moment().format('dddd, MMMM Do');
$("#currentDay").text(dateToday);

// Create function to save events to local storage
function saveItem () {
    localStorage.setItem("dayRows", JSON.stringify(dayRows));
}

// Array to hold all timeslots as objects with properties
let dayRows = [
    {
        index: 0,
        hour: "9:00am",
        text: "",
    },
    
    {
        index: 1,
        hour: "10:00am",
        text: "",
    },

    {
        index: 2,
        hour: "11:00am",
        text: "",
    },

    {
        index: 3,
        hour: "12:00pm",
        text: "",
    },

    {
        index: 4,
        hour: "1:00pm",
        text: "",
    },

    {
        index: 5,
        hour: "2:00pm",
        text: "",
    },

    {
        index: 6,
        hour: "3:00pm",
        text: "",
    },

    {
        index: 7,
        hour: "4:00pm",
        text: "",
    },

    {
        index: 8,
        hour: "5:00pm",
        text: "",
    }

]

// For loop to create rows of planner
for (let i = 0; i < dayRows.length; i++) {
    let rowTime = dayRows[i].hour;
    let rowText = dayRows[i].text;
    let timeBlock = $('<div>');
    timeBlock.attr("class", "time-block");
    $('.container').append(timeBlock);
    timeBlock.text(rowTime);
    console.log(timeBlock);
}
