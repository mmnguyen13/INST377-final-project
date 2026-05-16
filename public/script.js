let allClubs = [];
async function loadClubs() {

    const response = await fetch('/clubs');

    const clubs = await response.json();

    allClubs = clubs;

    const clubList = document.getElementById('club-list');

    clubList.innerHTML = '';

    clubs.forEach(club => {

        const clubCard = document.createElement('div');

        clubCard.innerHTML = `
            <h3>${club.club_name}</h3>
            <p>Category: ${club.category}</p>
        `;

        clubList.appendChild(clubCard);

    });
}

loadClubs();
const clubForm = document.getElementById('club-form');

clubForm.addEventListener('submit', async (event) => {

    event.preventDefault();

    const clubName = document.getElementById('club-name').value;

    const clubCategory = document.getElementById('club-category').value;

    const response = await fetch('/clubs', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            club_name: clubName,
            category: clubCategory
        })

    });

    const newClub = await response.json();
    console.log("Add club response:", newClub);

    console.log(newClub);

    loadClubs();

    clubForm.reset();

});

async function loadActivity() {
    const response = await fetch('/activity');
    const data = await response.json();

    const activityText = document.getElementById('activity-text');

    if (data.setup && data.punchline) {
        activityText.innerHTML = `${data.setup}<br><br>${data.punchline}`;
    } else {
        activityText.textContent = 'No activity found. Try again.';
    }
}

const activityButton = document.getElementById('activity-button');

activityButton.addEventListener('click', loadActivity);

const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredClubs = allClubs.filter(club =>
        club.club_name.toLowerCase().includes(searchTerm) ||
        club.category.toLowerCase().includes(searchTerm)
    );

    const clubList = document.getElementById('club-list');
    clubList.innerHTML = '';

    filteredClubs.forEach(club => {
        const clubCard = document.createElement('div');

        clubCard.innerHTML = `
            <h3>${club.club_name}</h3>
            <p>Category: ${club.category}</p>
        `;

        clubList.appendChild(clubCard);
    });
});