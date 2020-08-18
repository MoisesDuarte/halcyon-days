// Get the number of paragraphs in the page and the page counter
let main_container = document.querySelector(".content");
let current_page = document.querySelector("#page_number");
let total_pages = document.querySelector("#total_pages");
let paragraph_number = main_container.getElementsByTagName("div").length;

total_pages.innerHTML = paragraph_number;

function pageTurn(dir) {
    // Getting the current paragraph
    let current_paragraph = document.querySelector("div:not(.hide)");
    let prev_id = parseInt(current_paragraph.id) - 1;
    let next_id = parseInt(current_paragraph.id) + 1;
    let prev_paragraph = document.getElementById(prev_id);
    let next_paragraph = document.getElementById(next_id);

    if (dir === 'next') {
        // Checking if there is a next one
        if (next_id <= paragraph_number) {
            current_paragraph.className = "hide";    
            next_paragraph.className = "";
            current_page.innerHTML++;
        }  
    } else if (dir === 'back') {
        // Checking if there is a previous one
        if (prev_id > 0) {
            current_paragraph.className = "hide";
            prev_paragraph.className = "";
            current_page.innerHTML--;
        } 
    }    
}