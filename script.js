const tabs = document.querySelectorAll(".main-tabs a");
const sections = document.querySelectorAll(".dashboard-section");

function switchSection(hash) {

    const selected = hash === "#courses-section"
        ? "#courses-section"
        : "#dashboard-section";

    sections.forEach(section => {
        section.hidden = "#" + section.id !== selected;
    });

    tabs.forEach(tab => {

        const active = tab.getAttribute("href") === selected;

        tab.classList.toggle("active", active);

        if (active) {
            tab.setAttribute("aria-current", "location");
        } else {
            tab.removeAttribute("aria-current");
        }

    });
}

// Event listeners go OUTSIDE the function!

tabs.forEach(tab => {
    tab.addEventListener("click", function() {
        switchSection(tab.getAttribute("href"));
    });
});

// Detect URL changes
window.addEventListener("hashchange", function() {
    switchSection(window.location.hash);
});

// Initialize the page
switchSection(window.location.hash);
// COURSE SEARCH

const courseSearch = document.getElementById("courseSearch");
const courseCards = document.querySelectorAll(".course-card");
const courseCount = document.getElementById("courseCount");
const noCourses = document.getElementById("noCourses");

courseSearch.addEventListener("input", function() {

    const searchText = courseSearch.value.toLowerCase().trim();

    let visibleCourses = 0;

    courseCards.forEach(card => {

        const courseName = card.textContent.toLowerCase();

        const matches = courseName.includes(searchText);

        card.hidden = !matches;

        if (matches) {
            visibleCourses++;
        }

    });

    courseCount.textContent =
        visibleCourses + (visibleCourses === 1
            ? " course found"
            : " courses found");

    noCourses.hidden = visibleCourses !== 0;

});