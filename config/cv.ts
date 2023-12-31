import { MoreType } from "components/Section/Works/WorkItem";

export const WorkType: { [key: string]: string } = {
    Everything: "*",
    Web: "web",
    Mobile: "mobile",
    Own: "own",
};

export const cvConfig = {
    title: "Le Trung Do CV",
    description:
        "DOLT CV is a personal portfolio/CV/resume website template built with NextJs and Mterial-UI. This was created especially for those who want to build up their portfolio sites.",
    name: "Le Trung Do",
    about: `I am Le Trung Do, a fullstack developer from Ho Chi Minh City, Viet Nam. I have rich experience in web apps & mobile apps. I am also good at ReactJs, NextJs, Flutter and Xamarin Forms.`,
    mainJob: ["Flutter developer", "ReactJs developer", "Xamarin Forms developer"],
    cvDownloadLink: "https://www.topcv.vn/xem-cv/XFdRWFUEDgYEUwdWAgdVVVYHBAkKAQpRXVtUAwb4da",
    skills: [
        {
            name: "Flutter",
            value: 98,
            bgColor: "#29b6f6",
        },
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
            name: "Azure DevOps Pipelines",
            value: 90,
            bgColor: "#0078D4",
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
            count: 34,
        },
        {
            icon: "icon-cup",
            name: "Cup of coffee",
            count: 45,
        },
        {
            icon: "icon-people",
            name: "Satisfied clients",
            count: 11,
        },
        {
            icon: "icon-badge",
            name: "Nominees winner",
            count: 9,
        },
    ],
    menu: [
        {
            label: "Home",
            href: "home",
            className: "icon-home",
        },
        {
            label: "About",
            href: "about",
            className: "icon-user-following",
        },
        {
            label: "Services",
            href: "services",
            className: "icon-briefcase",
        },
        {
            label: "Experience",
            href: "experience",
            className: "icon-graduation",
        },
        {
            label: "Works",
            href: "works",
            className: "icon-layers",
        },
        {
            label: "Blog",
            href: "blog",
            className: "icon-note",
        },
        {
            label: "Contact",
            href: "contact",
            className: "icon-bubbles",
        },
    ],
    services: [
        {
            className: "text-light",
            imgSrc: "/images/service-1.svg",
            bgColor: "#6C6CE5",
            name: "Mobile Development",
            description:
                "I'm currently working with Flutter. Before that I had two years of experience using Xamarin Forms. The apps I make have high performance and beautiful effects.",
        },
        {
            className: "text-dark",
            imgSrc: "/images/service-2.svg",
            bgColor: "#F9D74C",
            name: "Web Development",
            description:
                "Currently I still 50% on ReactJS projects. I have experience as a team leader for several large projects. NextJs is my favorite framework.",
        },
        {
            className: "text-light",
            imgSrc: "/images/service-3.svg",
            bgColor: "#F97B8B",
            name: "Blogger & SEOer",
            description: "In my free time, I write blog posts to share my experiences.",
        },
    ],
    experience: {
        education: [
            {
                time: "7/2022 - 1/2023",
                title: "Full Stack open 2022",
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
                time: "5/2022 - Present",
                title: "Flutter, ReactJs Developer",
                description: `I switched to mobile developer with Flutter, and still 50% on ReactJS projects`,
            },
            {
                time: "1/2020 - 5/2022",
                title: "ReactJs Developer",
                description: `From a mobile developer, I switched to making web apps with limited front end knowledge. FundSquare is the first project I've worked as a team leader for almost a year and got the maximum CSS score from client.
                    \n7/2021: I have officially been promoted to team leader.`,
            },
            {
                time: "12/2017 - 1/2020",
                title: "Xamarin Forms Developer",
                description: `Sys-FX: Securities application makes customers Japanese was the first project I worked on as a trainee.
                    \n12/2018 - 8/2019: This time I have a part-time job at home for a Philippine company with Australian clients.`,
            },
        ],
    },
    works: [
        {
            type: [WorkType.Mobile, WorkType.Web],
            title: "auカブコム証券 アプリ",
            term: "Flutter, Nextjs",
            description: "",
            moreIcon: MoreType.Link,
            thumbnail: "/images/works/kcmsr.jpg",
            href: "https://kabu.com/company/lp/app/index.html",
        },
        {
            type: [WorkType.Web],
            title: "FGS Production",
            term: "NextJs",
            description: "FGS Production",
            moreIcon: MoreType.Link,
            thumbnail: "/images/works/fgs-production.webp",
            href: "https://fgsproduction.vn",
        },
        {
            type: [WorkType.Web],
            title: "先OPナビ (Derivative Simulator)",
            term: "ReactJs",
            description:
                "Risk management tool that provides stress test function and 3D chart.\nTechnology: ReactJs Typescript, Redux, Mterial-UI, Highcharts",
            moreIcon: MoreType.Options,
            thumbnail: "/images/works/derivative-simulator.webp",
            href: "https://aukabucom.ds.guide.inc",
        },
        {
            type: [WorkType.Web],
            title: "Fund Square | kabu.com Securities",
            term: "NextJs",
            description:
                "FundSquare is the first project I've worked as a team leader for almost a year and got the maximum CSS score from client.",
            moreIcon: MoreType.Options,
            thumbnail: "/images/works/fund-square.webp",
            href: "https://fund.square.kabu.co.jp",
        },
        {
            type: [WorkType.Mobile],
            title: "FX｜Securities smartphone app",
            term: "Xamarin Forms",
            moreIcon: MoreType.Link,
            thumbnail: "/images/works/sys-fx.webp",
            href: "https://kabu.com/app/sysfx/default.html",
        },
        {
            type: [WorkType.Mobile],
            title: "Bmoji - Custom Emojis by Designers",
            term: "Xamarin Forms",
            moreIcon: MoreType.Link,
            thumbnail: "/images/works/bmoji.webp",
            href: "http://www.thebmoji.com",
        },
        {
            type: [WorkType.Own, WorkType.Web],
            title: "TĐ.VN - My blog",
            term: "Gatsby",
            moreIcon: MoreType.Link,
            thumbnail: "/images/works/my-blog.webp",
            href: "https://xn--t-lia.vn",
        },
        // {
        //     type: [WorkType.Own, WorkType.Web],
        //     title: "React UI component lib Template",
        //     term: "npm",
        //     moreIcon: MoreType.Link,
        //     thumbnail: "/images/works/react-ui-component-lib.webp",
        //     href: "https://github.com/letrungdo/react-ui-component-lib",
        // },
    ],
};
