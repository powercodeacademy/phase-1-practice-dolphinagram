// Preliminary steps
// Read the readme
// Took a look at the json, js, and html files
//   - examine the data structure of the db.json file
// Started the JSON Server
// Visit the localhost:3000/dolphins/1 path in the browser
// Write some pseudocode
// Ensure that document.addEventListener("DOMContentLoaded", {
//
// }) is wrapped around the javascript we will write

document.addEventListener("DOMContentLoaded", () => {
  // write your code here
  const dolphinName = document.querySelector("h2.name")
  const dolphinImage = document.querySelector("img.dolphin")
  const dolphinLikes = document.querySelector("span.likes")
  const dolphinComments = document.querySelector("ul.comments")

  const dolphinUrl = "http://localhost:3000/dolphins/1"

  // first deliverable code
  fetch(dolphinUrl) // grab data from server
    .then(response => response.json())
    .then(data => {
      dolphinName.innerHTML = data.name // use data to update html elements
      dolphinImage.src = data.image
      dolphinLikes.innerText = `${data.likes} likes`
      dolphinComments.innerHTML = ""
      data.comments.forEach(comment => { // iterated over comments to add each one
        const listItem = document.createElement("li")
        listItem.innerHTML = comment.content
        dolphinComments.append(listItem)
      })
    })

  // second deliverable code
  const likeButton = document.querySelector("button.like-button")
  // const dolphinLikes = document.querySelector("span.likes") this was defined for the first deliverable but we're using it again for the 2nd

  likeButton.addEventListener("click", () => {
    let numberOfLikes = parseInt(dolphinLikes.innerText)
    numberOfLikes++

    const formData = {
      likes: numberOfLikes
    }

    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    }

    // const dolphinUrl = "http://localhost:3000/dolphins/1" this was defined for the first deliverable but we're using it again for the 2nd
    fetch(dolphinUrl, configurationObject)
      .then(response => response.json())
      .then(data => {
        dolphinLikes.innerText = `${data.likes} likes` // brought over from 1st deliverable
      })
  })
})

/*
1st Deliverable
- See the dolphin image received from the server, including its name, likes and comments when the page loads

- Load the content from the server (fetch) (localhost:3000/dolphins/1)
- Add the content to the page
  - Name of the dolphin (h2 with class of "name")
  - Image of the dolphin (img tag with the class of "dolphin")
  - THe number of likes (span tag with the class of "likes")
  - THe comments for the dolphin (ul tag with the class of "comments")

2nd Deliverable
- Click on the heart icon to increase the dolphin image's likes, and still see them when I reload the page

- Set an event listener to listen to a CLICK on the like BUTTON (button with class of "like-button")
- After the click occurs:
  - Find how many likes are currently displayed on the page (span tag with the class of "likes")
  - Calculate new number of likes (current likes + 1)
  - Fetch(PATCH) to tell the server what the new number of likes is going to be
  - Return new value of likes to the page and display it for our awesome users

3rd Deliverable
- Add a comment (no persistance needed)
*/
