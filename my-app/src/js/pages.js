const TRAVERSE_HEADER =
    'I love exploring new cities and seeing the unique local spots, but for most short trips, ' +
    'I find myself scrambling to look up the best spots to explore. My usual process of finding ' +
    'a route to explore is typically something of the following:' +
    'Look up a few sights nearby on Yelp' +
    'Skim some Thrillist articles on new local spots' +
    'Input each location into Google Maps' +
    'Move route of pins on the map to find the most efficient way to get around' +
    'Needless to say, my jumping across apps usually eats up precious time I could be using for exploring. I began to think of how I could create a better experience for exploration and imagined Traverse.' +
    'Traverse is a mobile app that helps individuals explore their surrounding areas. By creating customizable routes, people can discover new sites around them and still make their way to their destinations. Traverse automatically finds, maps, and navigates you to unique places of interest, so you can spend more time exploring.';

const PAGES = {
    mycite: {
        projectDetails: {
            product: 'Mobile App and Web Portal',
            year: '2018–2019',
            experience: 'Product Design, UX/UI Design',
            platform: 'iOS, Android, Responsive web',
        },
        projectIntro: {
            title: 'Medicine Goes Digital',
            content: 'At Mobiquity, I worked on the MYCITE mobile app and web-based portal. My work on the MYCITE project is under strict NDA.',
        },
        projectLinks: {
            header: 'Articles about MYCITE',
            links: [{
                text: 'Interview with Otsuka\'s President and CEO about MYCITE',
                href: 'https://pharmaphorum.com/views-analysis-digital/abilify-mycite-and-innovating-in-digital-health/',
            }, {
                text: 'Mobiquity Contributes To MYCITE\'s Design and Development',
                href: 'https://www.mobiquityinc.com/blog/mobiquity-digital-medicine-system',
            }, {
                text: 'FDA Approves First Drugs with Digital Ingestion Tracking System',
                href: 'https://www.fda.gov/news-events/press-announcements/fda-approves-pill-sensor-digitally-tracks-if-patients-have-ingested-their-medication',
            },
        ]},
    },
    ybvr_white_label: {
        projectDetails: {
            product: 'Virtual Reality',
            year: '2017-2018',
            experience: 'Product Design, UX/UI Design, UX Research',
            platform: 'Android, GearVP',
        },
        projectIntro: {
            title: 'VR Streaming Platform',
            content: 'YBVR, a Silicon Valley based startup, is creating a VR video streaming platform. YBVR\'s white label application allows customers to customize their application with their own branding without having to build one themselves. To showcase YBVR’s white label capabilities, I focused on creating a dynamic home scene that displayed different feature options.',
        },
    },
    ybvr_brand: {
        projectDetails: {
            product: 'Brand Redesign',
            year: '2017-2018',
            experience: 'Branding',
            platform: 'Digital, Print',
        },
        projectIntro: {
            title: 'VR Branding',
            content: 'YBVR, a Silicon Valley based startup, is creating a VR video streaming platform. As the company\'s reach expanded, the need for brand consistency became more apparent. My task was to develop the YBVR brand to be powerful yet approachable. My goal was to refine the existing logo and implement a consistent look and feel across different platforms.',
        },
    },
    traverse: {
        projectDetails: {
            product: 'Mobile App and Landing Page',
            year: '2017',
            experience: 'Product Design, UX/UI Design, Branding',
            platform: 'iOS, web',
        },
        projectIntro: {
            title: 'One exploration experience to unite them all',
            content: TRAVERSE_HEADER,
        },
    },
    amma: {
        projectDetails: {
            product: 'Mobile App and Smart Watch UI',
            year: '2017',
            experience: 'Product Design, UX/UI Design, Branding',
            platform: 'Android',
        },
        projectIntro: {
            title: 'PERSONALIZED ASTHMA TRACKING',
            content: 'Conceptualized by Google Health Initiative, AMMA (Asthma Monitoring and Management App) is a mobile app that tracks and records asthma symptoms through a wearable device. My goal was to create a user experience that allows the wearer to view data about their asthma and monitor their symptoms, with the hopes of providing more accurate information about the user\'s asthma.',
        },
    }
}

export default PAGES;
