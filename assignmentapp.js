
const message = document.querySelector("#messages");
const list = document.querySelector("#course-list");

const button = document.querySelector("#all-button");
const openbutton = document.querySelector("#open-button");

const courses = [
    { id: 1, class: "class one", status: "open", room: "110" },
    { id: 2, class: "class two", status: "closed", room: "120" },
    { id: 3, class: "class three", status: "open", room: "130" },
    { id: 4, class: "class four", status: "closed", room: "140" },
    { id: 5, class: "class five", status: "open", room: "150" },
    { id: 6, class: "class six", status: "open", room: "160" },
    { id: 7, class: "class seven", status: "closed", room: "170" },
    { id: 8, class: "class eight", status: "open", room: "180" },
];

function renderCourses(course) {
    list.textContent = "";
    if (course === 0) { message.textContent = "sorry there are no events going on"; return; }
    for (let i = 0; i < course.length; i++) {
        const event = course[i];
        const item = document.createElement("li");

        let room = event.room;
        if (!room) {
            room = "not assigned";
        }
        let empty = event.status;
        if (!empty) { room = "room is empty"; }
        item.textContent = event.class + " - " + event.status + " - Room " + room;

        item.setAttribute("data-status", event.status);

        list.appendChild(item);
    }
}

function isOpen(event) {
    return event.status === "open";
}

function showOpenEvents() {
    const openEvents = courses.filter(isOpen);
    renderCourses(openEvents);
}


button.addEventListener("click", function () {
    renderCourses(courses);
});

openbutton.addEventListener("click",
    showOpenEvents
);

renderCourses();