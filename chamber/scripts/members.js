// Define baseURL
const baseURL = "https://matthewknorr.github.io/wdd230/chamber/";

// Define membersURL
const membersURL = `${baseURL}data/members.json`;

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
async function displayMembers(members) {
  const membersList = document.getElementById("membersList");
  
  // Clear the existing content
  membersList.innerHTML = "";
  
  // Loop through each member
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const memberItem = document.createElement("div");
    memberItem.className = "member-item";
    
    // Create member image
    const memberImage = document.createElement("img");
    memberImage.src = member.image;
    memberImage.alt = `${member.name} Logo`;
    memberItem.appendChild(memberImage);
    
    const memberDetails = document.createElement("div");
    memberDetails.className = "member-details";
    
    const memberName = document.createElement("h3");
    memberName.textContent = member.name;
    memberDetails.appendChild(memberName);
    
    const memberAddress = document.createElement("p");
    memberAddress.textContent = `📍 ${member.address}`;
    memberDetails.appendChild(memberAddress);
    
    const memberPhone = document.createElement("p");
    memberPhone.textContent = `📞 ${member.phone}`;
    memberDetails.appendChild(memberPhone);
    
    const memberWebsite = document.createElement("p");
    const websiteLink = document.createElement("a");
    websiteLink.href = member.website;
    websiteLink.textContent = "Visit Website";
    memberWebsite.appendChild(websiteLink);
    memberDetails.appendChild(memberWebsite);
    
    const memberLevel = document.createElement("p");
    memberLevel.className = "member-level";
    memberLevel.textContent = `Membership: ${member.membershipLevel}`;
    const memberLevelIcon = getMembershipLevelIcon(member.membershipLevel); // Get membership level icon
    memberLevel.appendChild(memberLevelIcon);
    memberDetails.appendChild(memberLevel);
    
    const memberOtherInfo = document.createElement("p");
    memberOtherInfo.textContent = `${member.otherInfo}`;
    memberDetails.appendChild(memberOtherInfo);
    
    memberItem.appendChild(memberDetails);
    
    membersList.appendChild(memberItem);
  }
}

// Function to get membership level icon
function getMembershipLevelIcon(level) {
  const icon = document.createElement("span");
  
  switch (level.toLowerCase()) {
    case "bronze":
      icon.textContent = "🥉";
      break;
    case "silver":
      icon.textContent = "🥈";
      break;
    case "gold":
      icon.textContent = "🥇";
      break;
    case "platinum":
      icon.textContent = "🌟";
      break;
    default:
      icon.textContent = "❓";
      break;
  }
  
  return icon;
}

// Call the getMembers function to fetch and display the members
getMembers();

// View Toggle
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#membersList");

gridButton.addEventListener("click", () => {
  display.classList.add("member-list");
  display.classList.remove("list");
});

listButton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("member-list");
});