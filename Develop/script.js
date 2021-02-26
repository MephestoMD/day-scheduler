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

    // Set text content for the time and text of current rows
    let rowTime = dayRows[i].hour;
    let rowText = dayRows[i].text;

    // Create <div> element for each row and set its attributes and append it to the container to display it
    let currentRow = $('<div>');
    currentRow.attr("class", "row");
    $('.container').append(currentRow);

    // Create <span> element for the block containing the time, set its class and text and append it to display it
    let timeBlock = $('<span>');
    timeBlock.attr("class", "hour");
    timeBlock.text(rowTime);
    currentRow.append(timeBlock);

    // Create <textarea> element to hold the event text content and append it to display it
    let textArea = $('<textarea>');
    textArea.text(rowText);
    currentRow.append(textArea);


    
}
