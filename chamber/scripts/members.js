// Update the const variable named "membersUrl" with the URL string of the new JSON resource.
const membersUrl = 'https://raw.githubusercontent.com/MatthewKnorr/wdd230/main/chamber/data/members.json';

// Update the const variable named "membersSection" to select the HTML div element from the document with an id value of "members".
const membersSection = document.querySelector('#members');
const toggleViewButton = document.querySelector('#toggleView');

// Set the initial view mode
let isGridView = true;

// Event listener for the toggleViewButton
toggleViewButton.addEventListener('click', () => {
    isGridView = !isGridView; // Toggle the view mode
    updateView();
});

// Function to update the view based on the current mode
const updateView = () => {
    // Toggle the class based on the view mode
    membersSection.classList.toggle('list-view', !isGridView);

    // Display an emoji based on the view mode
    toggleViewButton.textContent = isGridView ? '📷 Grid View' : '📝 List View';

    // Update image size and text layout based on the view mode
    const cards = document.querySelectorAll('.js-section');
    cards.forEach((card) => {
        const image = card.querySelector('.js-img');
        const textContainer = card.querySelector('.text-container');

        if (isGridView) {
            // Set styles for grid view
            image.setAttribute('width', '340');
            image.setAttribute('height', '440');
            textContainer.style.flexDirection = 'column';
            textContainer.style.whiteSpace = 'normal'; // Allow text to wrap in grid view
        } else {
            // Set styles for list view
            image.setAttribute('width', '60');
            image.setAttribute('height', '80');
            textContainer.style.flexDirection = 'row';
            textContainer.style.whiteSpace = 'normal'; // Allow text to wrap in list view
        }
    });
};

// Async function to fetch and display members
async function getMembersData() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Define a function expression named "displayMembers" that processes and displays member information as cards.
const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.members element
        let memberCard = document.createElement('section');
        memberCard.classList.add('js-section');

        // Create a div to contain text elements
        let textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        let memberName = document.createElement('h2');
        let memberAddress = document.createElement('p');
        let memberPhone = document.createElement('p');
        let memberWebsite = document.createElement('a');
        let memberImage = document.createElement('img');
        let membershipLevel = document.createElement('p');
        let otherInfo = document.createElement('p');

        // Add specific classes to the elements
        memberName.classList.add('js-h2');
        memberImage.classList.add('js-img');

        // Build the content for each element
        memberName.textContent = member.name;
        memberAddress.textContent = `${member.address}`;
        memberPhone.textContent = `${member.phone}`;
        memberWebsite.textContent = `${member.website}`;
        memberWebsite.href = member.website; // Set the href attribute for the link
        memberWebsite.target = "_blank"; // Open the link in a new tab
        memberImage.setAttribute('src', member.image);
        memberImage.setAttribute('alt', `Image of ${member.name}`);
        memberImage.setAttribute('loading', 'lazy');
        memberImage.setAttribute('width', '340');
        memberImage.setAttribute('height', '440');
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        otherInfo.textContent = `${member.otherInfo}`;

        // Append the elements to the textContainer
        textContainer.appendChild(memberName);
        textContainer.appendChild(memberAddress);
        textContainer.appendChild(memberPhone);
        textContainer.appendChild(memberWebsite);
        textContainer.appendChild(membershipLevel);
        textContainer.appendChild(otherInfo);

        // Append the textContainer and memberImage to the memberCard
        memberCard.appendChild(textContainer);
        memberCard.appendChild(memberImage);

        // Append the memberCard to the #members section
        membersSection.appendChild(memberCard);
    });

    // Call updateView to set the initial view mode
    updateView();
}

// Call the getMembersData function to start fetching and processing the member data.
getMembersData();