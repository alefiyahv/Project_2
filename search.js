// Mock data for profiles
const mockProfiles = [
    { id: 1, name: "Alice Johnson", interests: "Reading, Swimming, Painting", image: "path/to/alice.jpg" },
    { id: 2, name: "Bob Smith", interests: "Cycling, Running, Photography", image: "path/to/bob.jpg" },
    // Add more mock profiles as needed
];

// Function to display profiles (both initial and search results)
function displayProfiles(profiles) {
    const profilesContainer = document.getElementById('profilesContainer');
    profilesContainer.innerHTML = ''; // Clear previous results
    profiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('profile-item');
        profileDiv.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" style="width: 100px; height: 100px;">
            <h3>${profile.name}</h3>
            <p>${profile.interests}</p>
        `;
        profilesContainer.appendChild(profileDiv);
    });
}

// Initial display of mock profiles
document.addEventListener('DOMContentLoaded', () => displayProfiles(mockProfiles));

// Search functionality
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProfiles = mockProfiles.filter(profile => 
        profile.name.toLowerCase().includes(searchTerm) || 
        profile.interests.toLowerCase().includes(searchTerm));
    displayProfiles(filteredProfiles);
});
