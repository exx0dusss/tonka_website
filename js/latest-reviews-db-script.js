// Function to populate comments
function populateComments() {
    const commentsWrapper = document.querySelector('.comments-wrapper');
    for (let i = 0; i < 3; i++) {
        let comment = commentsData[i]
        const li = document.createElement('li');
        li.className = 'rect comments-item';
        li.id = `comment${comment.comment_id}`;

        li.innerHTML = `
      <div class="item-header">
          <div class="item-pfp" style="content: url(.${comment.pfp_url});"></div>
          <div class="item-data">
              <div class="data-name">${comment.user_name}</div>
              <div class="data-date">${comment.formatted_date}</div>
          </div>
      </div>
      <div class="item-body">
          <span class="body-text">${comment.description}</span>
      </div>
    `;

        commentsWrapper.appendChild(li);
    }


}

// Call the function to populate comments
populateComments();
