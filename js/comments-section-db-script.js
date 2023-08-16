// Sample JSON data
const commentsData = [
    {
        "comment_id": 1,
        "user_name": "Alice",
        "description": "I've been using this crypto exchanger for a while now, and it's been a smooth experience every time.",
        "pfp_url": "../files/pfp/pfp1.png",
        "date": "2023-07-28",
        "formatted_date": "July 28, 2023"
    },
    {
        "comment_id": 2,
        "user_name": "Bob",
        "description": "The user interface of this exchange is so intuitive and easy to navigate.",
        "pfp_url": "../files/pfp/pfp2.png",
        "date": "2023-07-30",
        "formatted_date": "July 30, 2023"
    },
    {
        "comment_id": 3,
        "user_name": "Charlie",
        "description": "I appreciate the variety of cryptocurrencies available for trading on this platform.",
        "pfp_url": "../files/pfp/pfp3.png",
        "date": "2023-08-01",
        "formatted_date": "August 1, 2023"
    },
    {
        "comment_id": 4,
        "user_name": "David",
        "description": "Fast transactions and low fees - that's what makes this exchange stand out.",
        "pfp_url": "../files/pfp/pfp4.png",
        "date": "2023-08-03",
        "formatted_date": "August 3, 2023"
    },
    {
        "comment_id": 5,
        "user_name": "Eva",
        "description": "The customer support team of this crypto exchanger is very responsive and helpful.",
        "pfp_url": "../files/pfp/pfp5.png",
        "date": "2023-08-05",
        "formatted_date": "August 5, 2023"
    },
    {
        "comment_id": 6,
        "user_name": "Frank",
        "description": "Security features like two-factor authentication make me feel safe while trading here.",
        "pfp_url": "../files/pfp/pfp6.png",
        "date": "2023-08-07",
        "formatted_date": "August 7, 2023"
    },
    {
        "comment_id": 7,
        "user_name": "Grace",
        "description": "I've found the real-time charts and data analysis tools on this exchange extremely useful.",
        "pfp_url": "../files/pfp/pfp7.png",
        "date": "2023-08-09",
        "formatted_date": "August 9, 2023"
    },
    {
        "comment_id": 8,
        "user_name": "Henry",
        "description": "The mobile app is a game-changer for me, allowing me to trade on the go.",
        "pfp_url": "../files/pfp/pfp8.png",
        "date": "2023-08-11",
        "formatted_date": "August 11, 2023"
    },
    {
        "comment_id": 9,
        "user_name": "Isabel",
        "description": "The ability to set limit orders has saved me money by executing trades at the right price.",
        "pfp_url": "../files/pfp/pfp9.png",
        "date": "2023-08-13",
        "formatted_date": "August 13, 2023"
    },
    {
        "comment_id": 10,
        "user_name": "Jack",
        "description": "I've recommended this exchange to my friends due to its reliability and wide range of coins.",
        "pfp_url": "../files/pfp/pfp10.png",
        "date": "2023-08-15",
        "formatted_date": "August 15, 2023"
    },
    {
        "comment_id": 11,
        "user_name": "Kate",
        "description": "The referral program is a nice bonus that rewards you for bringing in new users.",
        "pfp_url": "../files/pfp/pfp11.png",
        "date": "2023-07-29",
        "formatted_date": "July 29, 2023"
    },
    {
        "comment_id": 12,
        "user_name": "Liam",
        "description": "Smooth KYC process and quick verification - getting started was hassle-free.",
        "pfp_url": "../files/pfp/pfp12.png",
        "date": "2023-07-31",
        "formatted_date": "July 31, 2023"
    },
    {
        "comment_id": 13,
        "user_name": "Mia",
        "description": "The exchange offers educational resources, which is great for newcomers to the crypto world.",
        "pfp_url": "../files/pfp/pfp13.png",
        "date": "2023-08-02",
        "formatted_date": "August 2, 2023"
    },
    {
        "comment_id": 14,
        "user_name": "Noah",
        "description": "I've had a positive experience with depositing and withdrawing funds on this platform.",
        "pfp_url": "../files/pfp/pfp14.png",
        "date": "2023-08-04",
        "formatted_date": "August 4, 2023"
    },
    {
        "comment_id": 15,
        "user_name": "Olivia",
        "description": "The exchange offers competitive rates, making it a cost-effective option for trading.",
        "pfp_url": "../files/pfp/pfp15.png",
        "date": "2023-08-06",
        "formatted_date": "August 6, 2023"
    },
    {
        "comment_id": 16,
        "user_name": "Peter",
        "description": "I like that they regularly add new cryptocurrencies to their listings.",
        "pfp_url": "../files/pfp/pfp16.png",
        "date": "2023-08-08",
        "formatted_date": "August 8, 2023"
    },
    {
        "comment_id": 17,
        "user_name": "Sophia",
        "description": "The exchange has a strong community presence, which adds a social aspect to trading.",
        "pfp_url": "../files/pfp/pfp17.png",
        "date": "2023-08-10",
        "formatted_date": "August 10, 2023"
    },
    {
        "comment_id": 18,
        "user_name": "William",
        "description": "I've used other exchanges, but this one has become my go-to due to its overall reliability.",
        "pfp_url": "../files/pfp/pfp18.png",
        "date": "2023-08-12",
        "formatted_date": "August 12, 2023"
    }
];

// Function to populate comments
function populateComments() {
    const commentsWrapper = document.querySelector('.comments-wrapper');

    commentsData.forEach(comment => {
        const li = document.createElement('li');
        li.className = 'rect comments-item';
        li.id = `comment${comment.comment_id}`;

        li.innerHTML = `
      <div class="item-header">
          <div class="item-pfp" style="content: url(${comment.pfp_url});"></div>
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
    });
}

// Call the function to populate comments
populateComments();
