// Define baseURL
const baseURL = "https://matthewknorr.github.io/wdd230/chamber/";

// Define membersURL
const membersURL = "https://matthewknorr.github.io/wdd230/chamber/data/members.json";

// Asynchronous function to get the members data
async function getMembers() {
  try {
    const response = await fetch(membersURL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched members data:", data);  // Debugging log
    displayMembers(data.members);
  } catch (error) {
    console.error("Error fetching the members:", error);
  }
}

// Function to display the member information
function displayMembers(members) {
  const membersList = document.getElementById("membersList");
  
  // Clear the existing content
  membersList.innerHTML = "";
  
  // Loop through each member
  members.forEach(member => {
    const memberItem = document.createElement("div");
    memberItem.className = "member-item";
    
    const memberImage = document.createElement("img");
    memberImage.src = `${baseURL}images/${member.image}`;
    memberImage.alt = `${member.name} Logo`;
    memberItem.appendChild(memberImage);
    
    const memberDetails = document.createElement("div");
    memberDetails.className = "member-details";
    
    const memberName = document.createElement("h3");
    memberName.textContent = member.name;
    memberDetails.appendChild(memberName);
    
    const memberAddress = document.createElement("p");
    memberAddress.textContent = `Address: ${member.address}`;
    memberDetails.appendChild(memberAddress);
    
    const memberPhone = document.createElement("p");
    memberPhone.textContent = `Phone: ${member.phone}`;
    memberDetails.appendChild(memberPhone);
    
    const memberWebsite = document.createElement("p");
    const websiteLink = document.createElement("a");
    websiteLink.href = member.website;
    websiteLink.textContent = "Visit Website";
    memberWebsite.appendChild(websiteLink);
    memberDetails.appendChild(memberWebsite);
    
    const memberLevel = document.createElement("p");
    memberLevel.textContent = `Membership Level: ${member.membershipLevel}`;
    memberDetails.appendChild(memberLevel);
    
    const memberOtherInfo = document.createElement("p");
    memberOtherInfo.textContent = `Other Info: ${member.otherInfo}`;
    memberDetails.appendChild(memberOtherInfo);
    
    memberItem.appendChild(memberDetails);
    
    membersList.appendChild(memberItem);
  });
}

// Call the getMembers function to fetch and display the members
getMembers();