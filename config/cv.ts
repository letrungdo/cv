import { MoreType } from "components/Section/Works/WorkItem";

export const cvConfig = {
    title: "Le Trung Do CV",
    description: "Le Trung Do CV",
    name: "Le Trung Do",
    mainJob: ["ReactJs developer", "Xamarin Forms developer"],
    skills: [
        {
            name: "ReactJs",
            value: 95,
            bgColor: "#FFD15C",
        },
        {
            name: "Xamarin Forms",
            value: 85,
            bgColor: "#FF4C60",
        },
        {
            name: "NodeJs",
            value: 70,
            bgColor: "#6C6CE5",
        },
    ],
    facts: [
        {
            icon: "icon-fire",
            name: "Projects completed",
            count: 22,
        },
        {
            icon: "icon-cup",
            name: "Cup of coffee",
            count: 1240,
        },
        {
            icon: "icon-people",
            name: "Satisfied clients",
            count: 324,
        },
        {
            icon: "icon-badge",
            name: "Nominees winner",
            count: 35,
        },
    ],
    menu: [
        {
            label: "Home",
            href: "#",
            className: "icon-home",
        },
        {
            label: "About",
            href: "#about",
            className: "icon-user-following",
        },
        {
            label: "Services",
            href: "#services",
            className: "icon-briefcase",
        },
        {
            label: "Experience",
            href: "#experience",
            className: "icon-graduation",
        },
        {
            label: "Works",
            href: "#works",
            className: "icon-layers",
        },
        {
            label: "Blog",
            href: "#blog",
            className: "icon-note",
        },
        {
            label: "Contact",
            href: "#contact",
            className: "icon-bubbles",
        },
    ],
    services: [
        {
            className: "shadow-blue text-light",
            imgSrc: "images/cv/service-1.svg",
            bgColor: "#6C6CE5",
            name: "Mobile Development",
            description:
                "With two years of experience in mobile programming using Xamarin Forms. The apps I make have high performance and beautiful effects.",
        },
        {
            className: "shadow-yellow",
            imgSrc: "images/cv/service-2.svg",
            bgColor: "#F9D74C",
            name: "Web Development",
            description:
                "I’m currently the ReactJs team leader at an outsource company. NextJs is my favorite framework.",
        },
        {
            className: "shadow-pink text-light",
            imgSrc: "images/cv/service-3.svg",
            bgColor: "#F97B8B",
            name: "Blogger & SEOer",
            description: "In my free time, I write blog posts to share my experiences.",
        },
    ],
    experience: {
        education: [
            {
                time: "7/2021 - Present",
                title: "Full Stack open 2021",
                description: `https://fullstackopen.com\nLearn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. 
                    \nThe main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.`,
            },
            {
                time: "10/2014 - 10/2018",
                title: "Ho Chi Minh City University of Food Industry",
                description: "Major: Software technology\nDegree grade: Good\nGPA: 3.3",
            },
        ],
        work: [
            {
                time: "1/2020 - Present",
                title: "ReactJs Developer",
                description: `From a mobile developer, I switched to making web apps with limited front end knowledge. FundSquare is the first project I've worked as a team leader for almost a year and got the maximum css score from client.
                    \n7/2021: I have officially been promoted to team leader.`,
            },
            {
                time: "12/2017 - 1/2020",
                title: "Xamarin Forms Developer",
                description: `Sys-FX: Securities application makes customers Japanese is the first project when I was a trainee.
                    \n12/2018 - 8/2019: This time I have a part-time job at home for a philippine company with australian clients.`,
                animDelay: 0.2,
            },
        ],
    },
    works: [
        {
            className: "art",
            title: "Project Managment Illustration",
            term: "Art",
            moreIcon: MoreType.MagnifierAdd,
            thumbnail: "images/cv/works/1.svg",
            href: "images/cv/works/1.svg",
        },
        {
            className: "creative design",
            title: "Guest App Walkthrough Screens",
            term: "Creative",
            moreIcon: MoreType.Options,
            thumbnail: "images/cv/works/2.svg",
            href: "images/cv/works/2.svg",
        },
        {
            className: "branding",
            title: "Delivery App Wireframe",
            term: "Branding",
            moreIcon: MoreType.Camrecorder,
            thumbnail: "images/cv/works/3.svg",
            href: "https://www.youtube.com/watch?v=qf9z4ulfmYw",
        },
        {
            className: "creative",
            title: "Onboarding Motivation",
            term: "Creative",
            moreIcon: MoreType.Music,
            thumbnail: "images/cv/works/4.svg",
            href: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240233494&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        },
        {
            className: "art branding",
            title: "iMac Mockup Design",
            term: "Art, Branding",
            moreIcon: MoreType.Gallery,
            thumbnail: "images/cv/works/5.svg",
            href: "#gallery-1",
        },
        {
            className: "creative design",
            title: "Game Store App Concept",
            term: "Creative, Design",
            moreIcon: MoreType.Link,
            thumbnail: "images/cv/works/6.svg",
            href: "#link",
        },
    ],
};
