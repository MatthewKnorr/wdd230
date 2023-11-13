// Update the const variable named "membersUrl" with the URL string of the new JSON resource.
const membersUrl = 'https://raw.githubusercontent.com/MatthewKnorr/wdd230/main/chamber/data/members.json';

// Update the const variable named "membersSection" to select the HTML div element from the document with an id value of "members".
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
        let memberAddress = document.createElement('p');
        let memberPhone = document.createElement('p');
        let memberWebsite = document.createElement('a');
        let memberImage = document.createElement('img');
        let membershipLevel = document.createElement('p');
        let otherInfo = document.createElement('p');

        // Add specific classes to the elements
        memberCard.classList.add('js-section');
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

        // Append the elements to the memberCard
        memberCard.appendChild(memberName);
        memberCard.appendChild(memberAddress);
        memberCard.appendChild(memberPhone);
        memberCard.appendChild(memberWebsite);
        memberCard.appendChild(memberImage);
        memberCard.appendChild(membershipLevel);
        memberCard.appendChild(otherInfo);

        // Append the memberCard to the #members section
        membersSection.appendChild(memberCard);
    });
}
