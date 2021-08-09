import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
    faCodepen,
    faFacebookF,
    faFreeCodeCamp,
    faGithub,
    faLinkedinIn,
    faPinterest,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleUp,
    faFolderOpen,
    faRss,
    faSearch,
    faTags,
    faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(
    faCodepen,
    faFreeCodeCamp,
    faGithub,
    faFacebookF,
    faLinkedinIn,
    faTwitter,
    faPinterest,
    faYoutube,
    faRss,
    faAngleUp,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faFolderOpen,
    faTags,
    faSearch,
    faArrowUp,
);
config.autoAddCss = false;
