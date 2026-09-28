
window.onload = function() {
    alert("Welcome");
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.innerHTML = new Date().getFullYear();
    }
};
function checkStock(statusId) {
    const statusField = document.getElementById(statusId);
    if (statusField) {
        statusField.innerHTML = "Not Available";
    }
}

