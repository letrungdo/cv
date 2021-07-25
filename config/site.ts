const config = {
    // Site info
    siteTitle: "TĐ.VN",
    siteTitleShort: "TĐ.VN", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
    siteTitleAlt: "TĐ.VN - Le Trung Do Blog", // Alternative site title for SEO.
    siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://xn--t-lia.vn", // Domain of your website without pathPrefix.
    pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
    siteDescription: "Tools for Developer", // Website description used for RSS feeds/meta description tag.
    siteRss: "/rss.xml", // Path to the RSS file.
    siteLang: "en",
    siteFBAppID: "2944501422238707", // FB Application ID for using app insights
    googleAnalyticsID: "UA-154318328-2", // GA tracking ID.
    postDefaultCategoryID: "", // Default category for posts.
    adsClientId: "ca-pub-1932696824172910",
    // Use for links widget
    sidebarSticky: true,
    sidebarLinks: [
        {
            label: "My CV",
            url: "https://cv.xn--t-lia.vn/",
        },
        {
            label: "My Shop",
            url: "https://shop.xn--t-lia.vn/",
        },
        {
            label: "My Blog",
            url: "https://xn--t-lia.vn/",
        },
    ],
    // Use for user info
    userName: "letrungdo", // Username to display in the author segment.
    userEmail: "letrdo@gmail.com", // Email used for RSS feed"s author segment
    userTwitter: "letrungdo", // Optionally renders "Follow Me" in the UserInfo segment.
    userLocation: "Ho Chi Minh City, Vietnam", // User location to display in the author segment.
    userAvatar: "https://gravatar.com/avatar/cc508a89f5901e9f8e39a6ffee6f7319?size=300", // User avatar to display in the author segment.
    userDescription: "Software Engineer, Xamarin Forms, React Developer", // User description to display in the author segment.
    // Links to social profiles/projects you want to display in the author segment/navigation bar.
    userLinks: [
        {
            label: "Email",
            url: "mailto:letrdo@gmail.com",
            iconClassName: "far envelope",
        },
        {
            label: "Website",
            url: "https://xn--t-lia.vn/",
            iconClassName: "fas globe",
        },
        {
            label: "Twitter",
            url: "https://twitter.com/letrungdo",
            iconClassName: "fab twitter",
        },
        {
            label: "Facebook",
            url: "https://www.facebook.com/DoMemory/",
            iconClassName: "fab facebook-f",
        },
        {
            label: "Linkedin",
            url: "https://www.linkedin.com/in/letrungdo/",
            iconClassName: "fab linkedin-in",
        },
    ],
    // Use for footer
    socialLinks: [
        {
            label: "GitHub",
            url: "https://github.com/letrungdo",
            iconClassName: "fab github",
        },
        {
            label: "Facebook",
            url: "https://www.facebook.com/DoMemory/",
            iconClassName: "fab facebook-f",
        },
        {
            label: "Linkedin",
            url: "https://www.linkedin.com/in/letrungdo/",
            iconClassName: "fab linkedin-in",
        },
        {
            label: "Twitter",
            url: "https://twitter.com/letrungdo",
            iconClassName: "fab twitter",
        },
        {
            label: "RSS",
            url: "https://xn--t-lia.vn/rss.xml",
            iconClassName: "fas rss",
        },
    ],
    footerLinks: [
        { label: "Home", url: "/" },
        { label: "About", url: "/about" },
        { label: "Contact", url: "/contact" },
        { label: "Terms of Use", url: "/terms" },
        { label: "Privacy Policy", url: "/privacy" },
        { label: "Sitemap", url: "https://xn--t-lia.vn/sitemap.xml" },
    ],
    copyright: "Copyright © 2021 Le Trung Do. Unless otherwise noted, all code MIT license.",
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
    config.pathPrefix = "";
} else {
    // Make sure pathPrefix only contains the first forward slash
    config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/") config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/") config.siteRss = `/${config.siteRss}`;

export default config;
