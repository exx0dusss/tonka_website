const reviewsButton = document.getElementById('reviews-button')
const commentsContainer = document.getElementById('comments-container')
const expandComments = document.querySelectorAll('.expand-comments')
reviewsButton.addEventListener("click", async function () {
    if (commentsContainer.classList.contains("expand")) {
        commentsContainer.classList.remove("expand");
        reviewsButton.textContent = 'Read all latest reviews'

    } else {
        commentsContainer.classList.add("expand");
        reviewsButton.textContent = 'Hide';

    }
    toggleHiddenClass()
    reviewsButton.scrollIntoView(true);


});

function toggleHiddenClass() {
    expandComments.forEach(block => {
        block.classList.toggle('hidden');
    });

}

