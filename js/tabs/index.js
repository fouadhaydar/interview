// as class

class Tab {
  constructor() {
    this.tabsContainer = document.querySelector(".tabs-container");
    this.tabsList = document.querySelector("ul");
    this.tabsBtnsContainers = document.querySelectorAll("li");
    this.tabsBtns = document.querySelectorAll("a");
    this.tabsPanels = document.querySelectorAll(".tabs__panels > div");
  }
  setDefaultTab() {
    this.tabsBtns.forEach((tab, index) => {
      if (index === 0) {
        tab.parentElement.classList.add("li-active");
      } else {
        tab.parentElement.classList.add("inactive-li");
        this.tabsPanels[index].setAttribute("hidden", "");
      }
    });
  }
  onClick() {
    this.tabsContainer.addEventListener("click", (e) => {
      const clickedTab = e.target.closest("li");
      // if the user dose not target any link do nothing
      if (!clickedTab) return;
      e.preventDefault();
      this.switchTab(clickedTab.querySelector("a"));
      this.switchBtnColor(clickedTab);
    });
  }
  switchBtnColor(clickedTab) {
    // make all li inactive
    this.tabsBtnsContainers.forEach((li) => {
      li.classList.remove("li-active");
      li.classList.add("inactive-li");
    });
    // add class active to the target btn
    clickedTab.classList.add("li-active");
    // remove the inactive class form the target
    clickedTab.classList.remove("inactive-li");
  }
  switchTab(clickedTab) {
    // get the id of clicked link
    const activePanelId = clickedTab.getAttribute("href");
    // use the id to get the panel linked to it
    const activePanel = this.tabsContainer.querySelector(activePanelId);
    // make all panels hidden
    this.tabsPanels.forEach((tab) => {
      tab.setAttribute("hidden", true);
    });
    // remove hidden form target panel
    activePanel.removeAttribute("hidden");
  }
}

const tab = new Tab();
tab.setDefaultTab();
tab.onClick();
