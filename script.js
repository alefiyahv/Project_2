// Mock user profiles (as examples)
const mockUserProfiles = [
    {
        id: 1,
        name: 'Alice Johnson',
        interests: ['Kindness', 'Hiking', 'Art'],
        image: 'images/user1.jpg' // Placeholder image path
    },
    {
        id: 2,
        name: 'Bob Smith',
        interests: ['Honesty', 'Hardcore Partying', 'Music'],
        image: 'images/user2.jpg' // Placeholder image path
    },
    // Add more mock profiles as needed
];

// Function to handle search and display results
function searchAndDisplayResults() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // Implement search logic here...
            // For simplicity, we're directly displaying all mock profiles
            displayProfiles(mockUserProfiles);
        });
    }
}

// Function to dynamically display profiles based on search
function displayProfiles(profiles) {
    const resultsContainer = document.getElementById('profileResults');
    resultsContainer.innerHTML = ''; // Clear existing results

    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" style="width: 100px;">
            <h3>${profile.name}</h3>
            <p>Interests: ${profile.interests.join(', ')}</p>
        `;
        resultsContainer.appendChild(profileDiv);
    });
}

// Execute when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check and execute search functionality if on search page
    searchAndDisplayResults();
});

