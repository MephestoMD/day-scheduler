// Create variable to hold formatted time and display it
let dateToday = moment().format('dddd, MMMM Do');
$("#currentDay").text(dateToday);

let rowText = "";

// Create variable to hold the current hour in 24-hour format
let currentTime = moment().format('H');
console.log(currentTime);

// Create function to save events to local storage
function saveItem () {
    localStorage.setItem("dayRows", JSON.stringify(dayRows));
}

// Array to hold all timeslots as objects with properties
let dayRows = [
    {
        index: 0,
        hourNum: 9,
        hour: "9:00am",
        text: "",
    },
    
    {
        index: 1,
        hourNum: 10,
        hour: "10:00am",
        text: "",
    },

    {
        index: 2,
        hourNum: 11,
        hour: "11:00am",
        text: "",
    },

    {
        index: 3,
        hourNum: 12,
        hour: "12:00pm",
        text: "",
    },

    {
        index: 4,
        hourNum: 13,
        hour: "1:00pm",
        text: "",
    },

    {
        index: 5,
        hourNum: 14,
        hour: "2:00pm",
        text: "",
    },

    {
        index: 6,
        hourNum: 15,
        hour: "3:00pm",
        text: "",
    },

    {
        index: 7,
        hourNum: 16,
        hour: "4:00pm",
        text: "",
    },

    {
        index: 8,
        hourNum: 17,
        hour: "5:00pm",
        text: "",
    }

]

// For loop to create rows of planner
for (let i = 0; i < dayRows.length; i++) {

    // Set text content for the time and text of current rows
    let rowTime = dayRows[i].hour;
    rowText = dayRows[i].text;

    // Create <div> element for each row and set its attributes and append it to the container to display it
    let currentRow = $('<div>');
    currentRow.attr("class", "row");
    $('.container').append(currentRow);

    // Create <span> element for the block containing the time, set its class and text and append it to display it
    let timeBlock = $('<span>');
    timeBlock.attr("class", "hour");
    timeBlock.text(rowTime);
    currentRow.append(timeBlock);

    // Create <textarea> element to hold the event text content
    let textArea = $('<textarea>');
    textArea.text(rowText);

    // Give each text area element its own id
    textArea.attr("id", i);

    //append textArea to the current row
    currentRow.append(textArea);

    console.log(dayRows[i].hourNum);

    // If statements to determine background color of <textarea> elements depending on time of day
    if (currentTime > dayRows[i].hourNum) {
        textArea.attr("class", "past");
    }
    else if (currentTime < dayRows[i].hourNum) {
        textArea.attr("class", "future");
    }
    else {
        textArea.attr("class", "present");
    }

    // Create save button element with appropriate class
    let saveButton = $('<button>');
    saveButton.attr("class", "saveBtn");

    // Give each save button an id to uniquely connect it to its current row
    saveButton.attr("id", i);

    // Create icon element, give it the appropriate class, and append it to the button
    let saveIcon = $('<i>');
    saveIcon.attr("class", "fa fa-save");
    saveButton.append(saveIcon);

    // Append the button to the row
    currentRow.append(saveButton);
}

// Add event listener for save button
$("button").on("click", function () {

    // For loop to iterate over all buttons
    for (let i = 0; i < dayRows.length; i++) {

        // If statement to grab the correct button (the one that was pressed) and associate it with the relevant text
        if (this.id == i) {
            
        }
    }
})
