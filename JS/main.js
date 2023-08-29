/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]")
const tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tc => {
			tc.classList.remove("filters__active")
		})
		target.classList.add("filters__active")

		tabs.forEach(t => {
			t.classList.remove("filter-tab-active")
		})
		tab.classList.add("filter-tab-active")
	})
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "ri-sun-line"

const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line"

themeButton.addEventListener("click", () => {
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	localStorage.setItem("selected-theme", getCurrentTheme())
	localStorage.setItem("selected-icon", getCurrentIcon())
})

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")
if (selectedTheme) {
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme
	)
	themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
		iconTheme
	)
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
})

const elementsToAnimate = [
	".profile__border",
	".profile__name",
	".profile__profession",
	".profile__social",
	"#hr1",
	".profile__about",
	".profile__introduction",
	".profile__stats",
	"#hr2",
	".profile__connect",
	".profile__info-group",
	"#hr3",
	".profile__buttons",
	".filters__content",
	".filters",
	"#hr4",
	"footer",
]

elementsToAnimate.forEach((element, index) => {
	sr.reveal(element, { delay: index * 100 })
})

// Toggle sidebar function
function toggleSidebar() {
	$("#sidebar").toggleClass("active")
}

// Sidebar button click function
function sideBarBtnClick() {
	$("#sidebar").toggleClass("active")
}
