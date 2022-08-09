const url = "https://api.github.com/users/silasjustino"

const btnTheme = document.getElementById("btnTheme")
const container = document.getElementById("container")
const githubAvatar = document.getElementById("githubAvatar")
const userName = document.getElementById("userName")
const description = document.getElementById("description")
const btns = document.querySelectorAll("#btn")

function changeTheme() {
    const isBackgroundBlack = container.classList.contains("background-black");
    const hasBorderColor = githubAvatar.classList.contains("borderColor");
    const hasFontColor = userName.classList.contains("fontColor") && description.classList.contains("fontColor");
    const isButtonBlack = btnTheme.classList.contains("background-black") && btnTheme.classList.contains("borderColor") && btnTheme.classList.contains("fontColor");

    if (isBackgroundBlack && hasBorderColor && hasFontColor && isButtonBlack) {

        btnTheme.textContent = "LIGHT"

        container.classList.remove("background-black")
        githubAvatar.classList.remove("borderColor")
        userName.classList.remove("fontColor")
        description.classList.remove("fontColor")

        btnTheme.classList.remove("background-black")
        btnTheme.classList.remove("borderColor")
        btnTheme.classList.remove("fontColor")

    } else {

        btnTheme.textContent = "DARK"

        container.classList.add("background-black")
        githubAvatar.classList.add("borderColor")
        userName.classList.add("fontColor")
        description.classList.add("fontColor")

        btnTheme.classList.add("background-black")
        btnTheme.classList.add("borderColor")
        btnTheme.classList.add("fontColor")

    }
    btns.forEach(btn => {
        if (btn.classList.contains("fontColor") && btn.classList.contains("background-black") && btn.classList.contains("borderColor")) {
            btn.classList.remove("fontColor")
            btn.classList.remove("background-black")
            btn.classList.remove("borderColor")
        } else {
            btn.classList.add("fontColor")
            btn.classList.add("background-black")
            btn.classList.add("borderColor")
        }
    })
}

(function () {
    btnTheme.onclick = changeTheme
})();

function getAvatar() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.avatar_url)
            githubAvatar.src = data.avatar_url
        })
        .catch(error => console.log(error))
}
getAvatar()



