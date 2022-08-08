const url = "https://api.github.com/users/silasjustino"

fetch(url)
.then(response => console.log(response))
.catch(error => console.log(error))