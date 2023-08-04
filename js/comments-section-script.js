const container = document.getElementById('comments-container');
const commentsSection = document.getElementById('comments-section');
const commentsButton = document.getElementById('comments-button');

let isExpanded = false;

commentsButton.addEventListener('click', () => {
    isExpanded = !isExpanded;
    if (isExpanded) {
        commentsSection.classList.add('expanded');
        commentsButton.textContent = "Hide";
    } else {
        commentsSection.classList.remove('expanded');
        commentsButton.textContent = "Show more reviews";
    }

    // Delay the scrolling to ensure the expansion animation has enough time to complete
    setTimeout(() => {
        if (isExpanded) {
            commentsButton.scrollIntoView({behavior: 'smooth', block: 'end'});
        } else {
            container.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }, 400);
});
