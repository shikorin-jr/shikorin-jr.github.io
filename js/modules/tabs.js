tabs('.fmenu-item', '.blog__item', '.fmenu', 'fmenu_active', 'filter');
tabs('.fmenu-item', '.projects__item', '.fmenu', 'fmenu_active', 'filter');
function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass, dataSelector) {
    let tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    const top = document.getElementById('top');

    

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(item = ".all", i) {
        tabsContent.forEach((el) => {
            if (el.getAttribute(`data-${dataSelector}`) == item) {
                el.classList.add('show', 'fade');
                el.classList.remove('hide');
                tabs[i].classList.add(activeClass);                    
            } 
            else if (item == ".all") {
                el.classList.add('show', 'fade');
                el.classList.remove('hide');
                tabs[0].classList.add(activeClass);
            }
        });
    }
    
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', function(event) {
        const target = event.target;
        if(target && target.getAttribute(`data-${dataSelector}`)) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    localStorage.setItem('tabs', i);
                    top.scrollIntoView({behavior: "smooth"}); 
                    hideTabContent();
                    showTabContent(item.dataset.filter, i);
                }
            });
        }
    });

    document.addEventListener('DOMContentLoaded', () => {

        if (localStorage.getItem('tabs')) {
            tabs[localStorage.getItem('tabs')].classList.add(activeClass);                    
            // tabsContent[localStorage.getItem('tabs')].classList.add('show', 'fade');
            // tabsContent[localStorage.getItem('tabs')].classList.remove('hide');
            
        } 
    });
}

