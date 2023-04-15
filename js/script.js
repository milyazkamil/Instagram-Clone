const body = document.querySelector("body");
const search = document.querySelector("#search");
const dropdown = document.querySelector(".dropdown");
const comment = document.querySelectorAll(".comment");
const moreIcon = document.querySelector(".more-icon");
const darkMode = document.querySelector(".dark-mode");
const logoBlack = document.querySelector("#logo-black");
const headerDiv = document.querySelector(".header-div");
const textColor = document.querySelectorAll(".text-color");
const postBorder = document.querySelectorAll(".post-border");
const navbarText = document.querySelectorAll(".navbar-text");
const dropdownLi = document.querySelectorAll(".dropdown-li");
const moreDropdown = document.querySelector(".more-dropdown");
const logoBlackMin = document.querySelector("#logo-black-min");
const instagramLogo = document.querySelector("#instagram-logo");
const bottomButtons = document.querySelector(".bottom-buttons");
const navbarSection = document.querySelector(".navbar-section");
const navigationLi = document.querySelectorAll(".navigation-li");
const navbarButtons = document.querySelectorAll(".navbar-buttons");
const navigationIcon = document.querySelectorAll(".navigation-icon");
const iconsArray = [];
const buttonsArray = [];

body.style.backgroundColor = "white";

navigationLi.forEach((e) => {
    buttonsArray.push(e);
});

navigationIcon.forEach((e) => {
    iconsArray.push(e);
});

dropdown.style.display = "none";
moreDropdown.addEventListener("click", () => {
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

moreDropdown.addEventListener("mouseover", () => {
    moreIcon.style.width = "1.7em";
    moreIcon.style.height = "1.7em";
});

moreDropdown.addEventListener("mouseout", () => {
    moreIcon.style.width = "1.5em";
    moreIcon.style.height = "1.5em";
});

for (let x = 0; x < 8; x++) {
    buttonsArray[x].addEventListener("mouseover", () => {
        iconsArray[x].style.width = "1.8em";
        iconsArray[x].style.height = "1.8em";
    });

    buttonsArray[x].addEventListener("mouseout", () => {
        iconsArray[x].style.width = "1.5em";
        iconsArray[x].style.height = "1.5em";
    });
}

darkMode.addEventListener("click", () => {
    if (body.style.backgroundColor === "white") {
        moreIcon.style.color = "#FFFFFF";
        instagramLogo.style.fill = "#FFFFFF";
        body.style.backgroundColor = "#000000";
        logoBlack.src = "./img/logo-white.png";
        search.style.backgroundColor = "#262626";
        logoBlackMin.src = "./img/logo-white.png";
        dropdown.style.backgroundColor = "#000000";
        headerDiv.style.backgroundColor = "#000000";
        headerDiv.style.borderColor = "rgb(56, 56, 56)";
        bottomButtons.style.backgroundColor = "#000000";
        bottomButtons.style.borderColor = "rgb(56, 56, 56)";
        navbarSection.style.borderColor = "rgb(56, 56, 56)";

        textColor.forEach((e) => {
            e.style.color = "#FFFFFF";
        }); 
        
        comment.forEach((e) => {
            e.style.borderColor = "rgb(56, 56, 56)";
        });

        postBorder.forEach((e) => {
            e.style.borderColor = "rgb(56, 56, 56)";
        });

        navigationIcon.forEach((e) => {
            e.style.color = "#FFFFFF";
        });

        navbarText.forEach((e) => {
            e.style.color = "#FFFFFF";
        });

        navbarButtons.forEach((e) => {
            e.addEventListener("mousemove", () => {
                e.style.backgroundColor = "#1A1A1A";
            });
        });

        navbarButtons.forEach((e) => {
            e.addEventListener("mouseout", () => {
                e.style.backgroundColor = "transparent";
            });
        });

        dropdownLi.forEach((e) => {
            e.addEventListener("mousemove", () => {
                e.style.backgroundColor = "#1A1A1A";
            });
        });

        dropdownLi.forEach((e) => {
            e.addEventListener("mouseout", () => {
                e.style.backgroundColor = "transparent";
            });
        });
    } else {
        moreIcon.style.color = "#000000";
        instagramLogo.style.fill = "#000000";
        body.style.backgroundColor = "white";
        logoBlack.src = "./img/logo-black.png";
        search.style.backgroundColor = "#EFEFEF";
        logoBlackMin.src = "./img/logo-black.png";
        dropdown.style.backgroundColor = "#FFFFFF";
        headerDiv.style.backgroundColor = "#FFFFFF";
        bottomButtons.style.backgroundColor = "#FFFFFF";
        headerDiv.style.borderColor = "rgb(182, 182, 182, 0.5)";
        navbarSection.style.borderColor = "rgb(182, 182, 182, 0.5)";
        bottomButtons.style.borderColor = "rgb(182, 182, 182, 0.5)";
        
        textColor.forEach((e) => {
            e.style.color = "#000000";
        });

        comment.forEach((e) => {
            e.style.borderColor = "rgb(227, 226, 226)";
        });

        postBorder.forEach((e) => {
            e.style.borderColor = "rgb(227, 226, 226)";
        });

        navbarButtons.forEach((e) => {
            e.addEventListener("mousemove", () => {
                e.style.backgroundColor = "#FAFAFA";
            });
        });

        navbarButtons.forEach((e) => {
            e.addEventListener("mouseout", () => {
                e.style.backgroundColor = "transparent";
            });
        });

        navbarText.forEach((e) => {
            e.style.color = "#000000";
        });

        navigationIcon.forEach((e) => {
            e.style.color = "#000000";
        });

        dropdownLi.forEach((e) => {
            e.addEventListener("mousemove", () => {
                e.style.backgroundColor = "#FAFAFA";
            });
        });

        dropdownLi.forEach((e) => {
            e.addEventListener("mouseout", () => {
                e.style.backgroundColor = "transparent";
            });
        });
    }
});

