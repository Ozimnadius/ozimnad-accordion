class OzimnadAccordion {
    constructor(options) {
        let def = {
            selector: '[data-accordion="accordion"]',
            selectorItem: '[data-accordion="item"]',
            selectorBtn: '[data-accordion="btn"]',
            selectorCollapse: '[data-accordion="collapse"]',
            selectorContent: '[data-accordion="content"]',
            activeIndex: 0,
            openAll: false
        }

        Object.assign(this, def, options);

        if (typeof this.selector ==='string'){
            this.accordion = document.querySelector(this.selector);
        } else{
            this.accordion = this.selector;
        }

        if (this.accordion) {
            this.items = Array.from(this.accordion.querySelectorAll(this.selectorItem)).map((i) => {

                let item = new OzimnadAccordionItem({
                    item: i,
                    selectorBtn: this.selectorBtn,
                    selectorCollapse: this.selectorCollapse,
                    selectorContent: this.selectorContent
                });

                if (this.openAll) {
                    item.open();
                }

                return item;

            });
        }
    }
}

class OzimnadAccordionItem {
    constructor(options) {
        Object.assign(this, options);

        this.btn = this.item.querySelector(this.selectorBtn);
        this.collapse = this.item.querySelector(this.selectorCollapse);
        this.content = this.item.querySelector(this.selectorContent);

        this.active = false;

        this.init();
    }

    init() {
        this.btn.addEventListener('click', this.click);

    }

    get height() {
        return this.content.offsetHeight;
    }

    click = () => {
        if (this.active) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        this.active = true;
        this.collapse.style.height = `${this.height}px`;
        this.item.classList.add('active');
    }

    close() {
        this.active = false;
        this.collapse.style.height = `0px`;
        this.item.classList.remove('active');
    }


}