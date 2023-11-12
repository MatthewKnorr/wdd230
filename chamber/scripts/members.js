// Update the const variable named "url" with the URL string of the new JSON resource.
const membersUrl = 'https://raw.githubusercontent.com/MatthewKnorr/wdd230/main/chamber/data/members.json';

// Update the const variable named "members" to select the HTML div element from the document with an id value of "members".
const membersSection = document.querySelector('#members');

// Create an async defined function named "getMembersData" to fetch data from the new JSON source url.
async function getMembersData() {
    try {
        const response = await fetch(membersUrl);
        const data = await response.json();
        // Uncomment the following line to check the data in the console.
        // console.table(data.members);
        displayMembers(data.members); // Call the displayMembers function with the members data.
    } catch (error) {
        console.error('Error fetching members data:', error);
    }
}

// Call the getMembersData function to start fetching and processing the member data.
getMembersData();

// Define a function expression named "displayMembers" that processes and displays member information as cards.
const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements to add to the div.members element
        let memberCard = document.createElement('section');
        let memberName = document.createElement('h2');
        let memberImage = document.createElement('img');

        // Build the h2 content to show the member's name
        memberName.textContent = member.name;

        // Build the image by setting attributes
        memberImage.setAttribute('src', member.image);
        memberImage.setAttribute('alt', `Image of ${member.name}`);
        memberImage.setAttribute('loading', 'lazy');
        memberImage.setAttribute('width', '340');
        memberImage.setAttribute('height', '440');

        // Append the section (member card) with the created elements
        memberCard.appendChild(memberName);
        memberCard.appendChild(memberImage);

        membersSection.appendChild(memberCard);
    });
}
