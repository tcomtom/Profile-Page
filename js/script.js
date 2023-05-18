let namePopup = document.querySelector('.popup')
let requestCount = document.querySelector('.req-count')
let connectionCount = document.querySelector('.conn-count')
let myConnections = document.querySelector('.my-conn')

// Meke popup visible
function nameChange() {
  console.log(namePopup.style.display)
  if(namePopup.style.display == "" || namePopup.style.display == "none") {
    namePopup.style.display = "block"
  } 

}
// Change the profile name
function submitChange() {
  const newName = document.querySelector('.change-name')
  let profileName = document.querySelector('.profile-name')

  namePopup.style.display = "none"
  profileName.innerText = newName.value

}
// To accept a connection rquest
function acceptReq(el) {
  // Get parent node
  let prevNode = el.parentNode
  // Get parent node of 2 levels up
  let pNode = el.parentNode.parentNode
  let newEl = document.createElement('div');
  newEl.setAttribute('class', 'req-')
  connectionCount.innerText++
  requestCount.innerText--
  //Append to Your Connections
  // append to child of sibling element
  newEl.appendChild(prevNode.previousElementSibling)
  myConnections.appendChild(newEl)
  pNode.remove()
  
}

// Deny a connection request
function denyReq(el) {
  console.log(el.parentNode.parentNode)
  let pNode = el.parentNode.parentNode;
  requestCount.innerText--
  pNode.remove()
}