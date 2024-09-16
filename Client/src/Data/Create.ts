export const CreateReactAppData={
    heading:"How to Create a React project using Create React App",
    description:"Create React App is a tool that allows you to quickly set up a new React project with zero configuration. It is a popular tool among beginners because it is easy to use and requires minimal setup. Here are the steps to create a new React project using Create React App:",
    steps:[
        "Install Node.js: Create React App requires Node.js to be installed on your machine. You can download and install Node.js from the official website.",
        "Install Create React App: Once you have Node.js installed, you can install Create React App by running the following command in your terminal:",
        "Create a new React project: To create a new React project, run the following command in your terminal: npx create-react-app myappname",
        "https://res.cloudinary.com/ddnum51yo/image/upload/v1726478879/ReactDocs/mmivualtg7ph1gvg3suy.png",
        "use cd myappname to navigate to the project directory.",
        "https://res.cloudinary.com/ddnum51yo/image/upload/v1726479287/ReactDocs/bqv4b9sy3ylwktnsbrze.png",
        "use npm start to start the development server.",
        "https://res.cloudinary.com/ddnum51yo/image/upload/v1726479411/ReactDocs/createreactwebpagestart.png",
        "Open the project in your browser: Once the development server is running, you can open the project in your browser by navigating to http://localhost:3000.",
        "You now have a new React project set up using Create React App! You can start building your application by editing the files in the src directory."
    ]
}

export const ViteCreateData={
    heading:"How to Create a React project using vite (currently used by developers in 2024)",
    description:"Vite is a build tool that is designed to be fast and lightweight. It is a great choice for setting up React projects because it provides instant server start and hot module replacement. Here are the steps to create a new React project using Vite:",
    steps:[
        "Install Node.js: Vite requires Node.js to be installed on your machine. You can download and install Node.js from the official website.",
        "Install Vite: Once you have Node.js installed, you can install Vite by running the following command in your terminal:",
        "Create a new React project: To create a new React project, run the following command in your terminal: npm create vite@latest myappname --template react for direct react project && npm create vite@latest",
        "https://res.cloudinary.com/ddnum51yo/image/upload/v1726479545/ReactDocs/startviteusingnpm.png",
        "provide name or add . in npm create vite@latest . for direct react project in existing folder and  use cd myappname is not use .(dot) in the command",
        "https://res.cloudinary.com/ddnum51yo/image/upload/v1726479545/ReactDocs/Slect_react_javascript_in_vite.png",
        "then select react and java script or typescript as per your choice and use npm to install the project dependencies.",
        "https://res.cloudinary.com/ddnum51yo/image/upload/v1726481747/ReactDocs/viteFInalwebview.png",
        "use npm run dev to start the development server as in above picture",
        "Open the project in your browser: Once the development server is running, you can open the project in your browser by navigating to http://localhost:5173.",
        "You now have a new React project set up using Vite! You can start building your application by editing the files in the src directory."
    ]
}

export interface SidebarItem {
    heading: string;
    description: string;
}

export const SidebarData=[

            {
             
                heading:"Using Vite",
                description:"React+JavaScript",

            },
            {
                heading:"Using Vite",
                description:"React+Typescript",

            },
            {
                heading:"Using Create React App",
                description:"React+JavaScript",
            },
            {
                heading:"Using Create React App",
                description:"React+TypeScript",
            }
        

        ];