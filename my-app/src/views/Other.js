import React, { Component } from 'react';
import OtherWorkItem from '../components/OtherWorkItem';

const items = {
    assistantship: {
        item: 'assistantship',
        img: 'other/assistantship.png',
        title: 'Assistantship Posters',
        content: 'This print is one of a series of event posters I created for Seattle University during my graphic design internship.',
        tools: 'Illustrator',
    },
    branding: {
        item: 'branding',
        img: 'other/branding.png',
        title: 'Cerulean Cruises',
        content: 'For the brand development for Cerulean Cruises, I wanted to create a clean, elegant style for this luxury submarine cruise line.',
        tools: 'Illustrator',
    },
    infographic: {
        item: 'infographic',
        img: 'other/infographic.png',
        title: 'The Stigma of Being Bigger',
        content: 'I created this information graphic to break down the concept and stigma of "being bigger". The graphic outlines weight in different contexts as well as the effects of being overweight or obese. I concluded the graphic by state equality as people and acceptance as the solution.',
        tools: 'Illustrator',
    },
}

function getItem(item) {
    return items[item];
}

export default class Other extends Component {
    state = {}

    render () {
        return (
        <div className='other'>
            <section>
                <OtherWorkItem {...getItem('assistantship')} />
                <OtherWorkItem {...getItem('branding')} />
                <OtherWorkItem {...getItem('infographic')} />
            </section>
        </div>
        )
   }
}
