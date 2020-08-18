// TODO: Clean up this code. Learn some code golfing in the meantime.
// Get the number of paragraphs in the page and the page counter
mainContainer = document.querySelector(".content");
currentPage = document.querySelector("#page_number");
totalPages = document.querySelector("#total_pages");

paragraphNumber = mainContainer.getElementsByTagName("p").length;
totalPages.innerHTML = paragraphNumber;

function pageTurn(direction) {
    // Getting the current paragraph
    currentParagraph = document.querySelector("p:not(.hide)");
    nextId = parseInt(currentParagraph.id) + 1;
    prevId = parseInt(currentParagraph.id) - 1;

    if (direction == 'next') {
        // Checking if there is a next one
        if (nextId <= paragraphNumber) {
            currentParagraph.className = "hide";
            nextParagraph = document.getElementById(nextId);
            nextParagraph.className = "";
            currentPage.innerHTML++;
        }  
    } else if (direction == 'back') {
        // Checking if there is a previous one
        if (prevId > 0) {
            currentParagraph.className = "hide";
            prevParagraph = document.getElementById(prevId);
            prevParagraph.className = "";
            currentPage.innerHTML--;
        } 
    }
     
}