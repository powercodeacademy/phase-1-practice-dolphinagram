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

  fetch(dolphinUrl)
    .then(response => response.json())
    .then(data => {
      dolphinName.innerHTML = data.name
      dolphinImage.src = data.image
      dolphinLikes.innerText = `${data.likes} likes`
      dolphinComments.innerHTML = ""
      data.comments.forEach(comment => {
        const listItem = document.createElement("li")
        listItem.innerHTML = comment.content
        dolphinComments.append(listItem)
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

3rd Deliverable
- Add a comment (no persistance needed)
*/
