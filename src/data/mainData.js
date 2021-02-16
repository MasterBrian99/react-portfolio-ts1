import repoEyeimg from '../images/repoeye.png'
import covidimg from '../images/covid-sl.png'
import reactgif from '../images/react-gif.png'

export const about = [
    {
        key: 1,
        aboutP: "I am a programmer with good knowledge of frontend and backend techniques.I love spending time on fixing little details and optimizing web apps. "
    },
    {
        key: 2,
        aboutP: "There’s nothing I enjoy more than designing and developing good websites for nice people. It really is that simple. I’ve spent many years trying to perfect what I do and while I’ll never be perfect, I do my best to come close. If you’ve got a project you’d like to work on with me just get in touch and we can get to work!"
    },
];


export const projectMain = [
    {
        img: repoEyeimg,
        projectName: "REPO EYEv2",
        description: "Get information about repository without cloning it.",
        lang: ["HTML", "CSS", "JS"],
        gitLink:"https://github.com/MasterBrian99/REPO-EYEv2",
        liveLink:"https://repo-eyev2.herokuapp.com/"
    },
    {
        img: covidimg,
        projectName: "covid19 sri lanka",
        description: "Sri lanka COVID-19 Information using Api",
        lang: ["HTML", "CSS", "JS"],
        gitLink:"https://github.com/MasterBrian99/covid-19-sri-lanka",
        liveLink:"https://srilanka-covid-19.herokuapp.com/"
    },
    {
        img: reactgif,
        projectName: "react gif converter",
        description: "convert video to gif format",
        lang: ["HTML", "CSS", "JS"],
        gitLink:"https://github.com/MasterBrian99/react-gif-converter",
        liveLink:"https://gifted-neumann-15328c.netlify.app/"
    }

];

export const projectSm=[
    {
        gitLink:"https://github.com/MasterBrian99/quote-lib",
        projectName: "quote-lib",
        description: "random quote npm package",
        lang:["JavaScript"]
    },
    {
        gitLink:"https://github.com/MasterBrian99/Discord-bot-miku",
        projectName: "Discord-bot-miku",
        description: "discord bot using few apis and discord library",
        lang:["JavaScript"]
    },
    {
        gitLink:"https://github.com/zenika-open-source/promote-open-source-project",
        projectName: "promote-open-source-project",
        description: "How to promote my open source project?",
        lang:[""]
    }
]