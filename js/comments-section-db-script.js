const express = require('express');
const {Pool} = require('pg');

const app = express();
const port = 3000;

// Set up PostgreSQL connection
const pool = new Pool({
    user: 'your_db_user',
    host: 'your_db_host',
    database: 'your_db_name',
    password: 'your_db_password',
    port: 5432, // Default PostgreSQL port
});

app.get('/api/comments', async (req, res) => {
    try {
        // Fetch the last 18 comments from your table
        const query = 'SELECT * FROM your_comments_table ORDER BY id DESC LIMIT 18';
        const result = await pool.query(query);

        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({error: 'An error occurred while fetching comments.'});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Function to fetch comments from the API
async function fetchComments() {
    const response = await fetch('/api/comments');
    return await response.json();
}

// Function to populate the comments section with data
async function populateComments() {
    const commentsData = await fetchComments();
    const commentsWrapper = document.querySelector('.comments-wrapper');

    commentsData.forEach(comment => {
        const listItem = document.createElement('li');
        listItem.className = 'rect comments-item';

        const itemHeader = document.createElement('div');
        itemHeader.className = 'item-header';

        const itemPfp = document.createElement('div');
        itemPfp.className = 'item-pfp';
        // Set the image source
        itemPfp.style.backgroundImage = `url(${comment.pfp_src})`;

        const itemData = document.createElement('div');
        itemData.className = 'item-data';

        const dataName = document.createElement('div');
        dataName.className = 'data-name';
        dataName.textContent = comment.name;

        const dataDate = document.createElement('div');
        dataDate.className = 'data-date';
        dataDate.textContent = comment.date;

        const itemBody = document.createElement('div');
        itemBody.className = 'item-body';

        const bodyText = document.createElement('span');
        bodyText.className = 'body-text';
        bodyText.textContent = comment.comment;

        // Append elements to build the comment item
        itemData.appendChild(dataName);
        itemData.appendChild(dataDate);

        itemHeader.appendChild(itemPfp);
        itemHeader.appendChild(itemData);

        itemBody.appendChild(bodyText);

        listItem.appendChild(itemHeader);
        listItem.appendChild(itemBody);

        commentsWrapper.appendChild(listItem);
    });
}

// Call the function to populate comments when the page loads
await populateComments();