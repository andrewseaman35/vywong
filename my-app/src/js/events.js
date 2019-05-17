import ReactGA from 'react-ga';

ReactGA.initialize('UA-130632736-4');

export function trackLinkClick(linkId) {
    console.log(linkId)
    ReactGA.event({
        category: 'link',
        action: 'click',
        label: linkId,
    });
};
