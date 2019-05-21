import ReactGA from 'react-ga';

ReactGA.initialize('UA-130632736-4');


export function trackScroll(category, depth) {
    ReactGA.event({
        category: category,
        action: 'scroll',
        label: '' + depth,
    });
};

export function trackLinkClick(linkId) {
    ReactGA.event({
        category: 'link',
        action: 'click',
        label: linkId,
    });
};

export function trackLightbox(page, action, label) {
    ReactGA.event({
        category: 'lightbox-' + page,
        action: action,
        label: label,
    })
}

export class ScrollTracker {
    constructor(page) {
        this.category = page;
        this.action = 'scroll';
        this.nextScrollPercentage = 10;
        this.lastScrollDepth = 0;

        window.addEventListener("scroll", this.onScroll.bind(this));
    }

    onScroll(e) {
        const scrollDepth = window.scrollY;
        if (scrollDepth <= this.lastScrollDepth + 50) {
            return;
        }

        const scrollMax = Math.max(document.body.scrollHeight, document.body.offsetHeight,
            document.documentElement.clientHeight, document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        ) - window.innerHeight;
        const scrollPercentage = 100 * (scrollDepth / scrollMax);
        if (scrollPercentage >= this.nextScrollPercentage) {
            const currentScroll = this.nextScrollPercentage;
            this.nextScrollPercentage += 10;
            trackScroll(this.category, currentScroll);
        }
    }
}
