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

function loadAnimation() {
    // Iniciar as animações aqui
    githubAvatar.style.visibility = "visible";
    githubAvatar.style.animation = "avatar 0.8s both ease-out";
    
    const titleBadge = document.querySelector(".title-badge");
    titleBadge.style.visibility = "visible";
    titleBadge.style.animation = "opacity 0.5s ease-out both 0.7s";

    const verifiedIcon = document.getElementById("verified");
    verifiedIcon.style.visibility = "visible";
    verifiedIcon.style.animation = "opacity 0.5s 1s ease-in both";

    const description = document.querySelector(".description");
    description.style.visibility = "visible";
    description.style.animation = "description 0.5s 1.2s both ease-out";

    const flag = document.getElementById("flag");
    flag.style.visibility = "visible";
    flag.style.animation = "opacity 0.5s 1.5s both linear, flag 1s 1.5s both cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    const linkedIn = document.getElementById("linkedIn");
    linkedIn.style.visibility = "visible";
    linkedIn.style.animation = "opacity 0.5s 2s both linear, buttonsUp 1s 2s both cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    const github = document.getElementById("github");
    github.style.visibility = "visible";
    github.style.animation = "opacity 0.5s 2.2s both linear, buttonsUp 1s 2.2s both cubic-bezier(0.175, 0.885, 0.32, 1.275";

    const instagram = document.getElementById("instagram");
    instagram.style.visibility = "visible";
    instagram.style.animation = "opacity 0.5s 2.4s both linear, buttonsUp 1s 2.4s both cubic-bezier(0.175, 0.885, 0.32, 1.275)";

    const itch_io = document.getElementById("itch_io");
    itch_io.style.visibility = "visible";
    itch_io.style.animation = "opacity 0.5s 2.6s both linear, buttonsUp 1s 2.6s both cubic-bezier(0.175, 0.885, 0.32, 1.275)";
}

function getAvatar() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.avatar_url)
            githubAvatar.src = data.avatar_url
            loadAnimation();
        })
        .catch(error => console.log(error))
}
getAvatar()



