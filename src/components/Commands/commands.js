/* eslint-disable import/no-anonymous-default-export */
import getcat from "../../utils/cat"
import getnp from "../../utils/spotify"
export default {
    commands: {
        echo: {
            description: 'Prints the given text to the console',
            usage: 'echo <text>',
            fn: (...args) => args.join(" ")
        },
        // cat: {
        //     description: 'Get a cute cat image.',
        //     usage: 'cat',
        //     fn: async () => {
        //         const url = await getcat()
        //         window.open(url, '_blank')
        //         return "fetching cat...\ncat fetched successfully!"
        //     }
        // },
        about: {
            description: 'About Me.',
            usage: 'about',
            fn: () => {
                return "About Me.\n---\nMale\n22\nStudent\nCloudOpsAspirant\nDevOps\nYoutuber\nGamer\nNyctophilicPerson\n---\n"
            }
        },
        twitter: {
            description: 'Opens my Twitter Handle.',
            usage: 'twitter',
            fn: () => {
                window.open('https://twitter.com/gtamilvanan17', '_blank')
                return "opening twitter handle..."
            }
        },
        github: {
            description: 'Opens my GitHub Profile.',
            usage: 'twitter',
            fn: () => {
                window.open('https://github.com/gtamilvanan17', '_blank')
                return "opening github account..."
            }
        },
        discord: {
            description: 'Opens my Discord Account.',
            usage: 'twitter',
            fn: () => {
                window.open('https://discordapp.com/users/868044223105081374', '_blank')
                return "opening discord account..."
            }
        },
        facebook: {
            description: 'Opens my Facebook Profile.',
            usage: 'twitter',
            fn: () => {
                window.open('https://facebook.com/Tamilvanan17', '_blank')
                return "opening facebook profile..."
            }
        },
        languages: {
            description: 'Languages I know.',
            usage: 'languages',
            fn: () => {
                return `
                    these are the languages I know.\n---\n
                    english          
                    tamil            \n---\n
                    gen-z-langauge   - 00%
                    python           - 60%
                    javascript       - 60%
                    html5            - 90%
                    css3             - 80%
                    ruby             - 40%
                    rust             - 10% - [learning]
                    go-lang          - 10% - [learning]\n---\n
                `
            }
        },
        skills: {
            description: 'Skills I have.',
            usage: 'skills',
            fn: () => {
                return `
                    these are the skills I have.\n---\n
                    Azure Services   - 60% - [In-Progress]
                    AWS Services     - 65%
                    AzureDevOps      - 55%
                    Jenkins          - 75%
                    GitLab           - 85%
                    React JS         - 15% - [In-Progress]
                    go-lang          - 10% - [In-Progress]
                    making-playlists - 100%\n---\n
                `
            }
        },
        projects: {
            description: 'Projects I have worked on.',
            usage: 'projects',
            fn: () => {
                return `
                    Cool projects I have worked on.\n---\n
                    'ashterm'                         | 'terminal portfolio'   | 'javascript'
                    'octocolor'                       | 'github profile color' | 'javascript'
                    'kanna-chan'                      | 'Discord-Bot'          | 'python'
                    'wordinal'                        | 'wordle-on-terminal'   | 'javascript'
                    'weeby.py'                        | 'API-wrapper'          | 'python'
                    'gitbanner'                       | 'banner-generator'     | 'javascript'\n---\n
                `
            }
        },
        editor: {
            description: 'Details about my current editor',
            usage: 'editor',
            fn: () => {
                return `
                    Editor: Visual Studio Code\n
                    Theme : Catpuccin\n
                    Font  : Consolas
                `
            }
        },
        repo: {
            description: "Opens this website's github repository.",
            usage: 'repo',
            fn: () => {
                window.open("https://github.com/asheeeshh/AshTerm", '_blank')
                return "opening repository..."
            }
        },
        spotify: {
            description: 'Get info about my recently played song.',
            usage: 'spotify',
            fn: async () => {
                const item = await getnp()
                return `
                    Now Playing/Recently Played\n
                    ---\n
                    Song: ${item.song}\n
                    Artist: ${item.artist}\n---\n
                `
            }
        }
    },
    overwrites:{
        help: {
            description: 'List all available commands',
            usage: 'help',
        },
        cd: {
            description: 'Change directory, not really, lol!',
            usage: 'cd <directory>',
        },
        ls: {
            description: 'List files in the current directory',
            usage: 'ls',
        },
        mkdir: {
            description: 'Make a directory',
            usage: 'mkdir <directory>',
        },
        clear: {
            description: 'Clears the terminal',
            usage: 'clear'
        },
        cat: {
            description: 'Get a cute cat image.',
            usage: 'cat',
        }
    }
}
