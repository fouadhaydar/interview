const tabsContainer = document.querySelector(".tabs-container");
const tabsList = document.querySelector("ul");
const tabsBtnsContainers = document.querySelectorAll("li");
const tabsBtns = document.querySelectorAll("a");
const tabsPanels = document.querySelectorAll(".tabs__panels > div");

tabsBtns.forEach((tab, index) => {
  if (index !== 0) {
    tabsPanels[index].setAttribute("hidden", "");
    tab.parentElement.classList.add("inactive-li");
  } else {
    tabsBtns[index].parentElement.classList.add("li-active");
  }
});

tabsContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("li");
  // if the user dose not target any link do nothing
  if (!clickedTab) return;
  e.preventDefault();
  switchTab(clickedTab.querySelector("a"));
  switchBtnColor(clickedTab);
});

const switchTab = (clickedTab) => {
  // get the id of clicked link
  const activePanelId = clickedTab.getAttribute("href");
  // use the id to get the panel linked to it
  const activePanel = tabsContainer.querySelector(activePanelId);
  // make all panels hidden
  tabsPanels.forEach((tab) => {
    tab.setAttribute("hidden", true);
  });
  // remove hidden form target panel
  activePanel.removeAttribute("hidden");
};

const switchBtnColor = (clickedTab) => {
  // make all li inactive
  tabsBtnsContainers.forEach((li) => {
    li.classList.remove("li-active");
    li.classList.add("inactive-li");
  });
  // add class active to the target btn
  clickedTab.classList.add("li-active");
  // remove the inactive class form the target
  clickedTab.classList.remove("inactive-li");
};
