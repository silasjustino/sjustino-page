const url = "https://api.github.com/users/silasjustino"

function getAvatar() {
    fetch(url)
    .then(response => response.json())
    .then(data =>  {
        console.log(data.avatar_url)
        githubAvatar.src = data.avatar_url
    })
    .catch(error => console.log(error))
}
getAvatar()
