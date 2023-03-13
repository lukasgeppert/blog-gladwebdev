---
title: "Creating a Professional Github profile"
subtitle: "This blog post provides a step-by-step guide on creating a custom profile overview page on GitHub, allowing developers to showcase their work and skills to potential collaborators and employers."
date: "2023-03-09"
image: "https://i.ibb.co/2Fj2zVc/github-image.png"
author: "NataNoob"
authorImage: "/images/Glenn Ladrido.JPG"
categories: ["Github", "Technology"]
---

As a developer who frequently uses GitHub, I've found that creating a custom profile overview page can be a great way to showcase my work and provide an easy-to-navigate hub for visitors to my profile. While GitHub provides a basic profile overview page by default, creating a custom page can allow us to display our repositories, contributions, and other important information in a more visually appealing and user-friendly way.

In this blog post, I'll guide you through the steps that I took to create my own custom profile overview page in GitHub. We'll cover how I use GitHub's built-in features to add and customize elements on my profile page, as well as introduce some third-party tools that can enhance the design and functionality of my page. If you follow along, by the end of this blog, you'll have a professional-looking and informative profile page that will help you stand out in the GitHub community and showcase your skills to potential collaborators and employers. Let's get started!

## Getting Started

> Creating a custom profile overview page is a special feature in Github that comes out when you create a repository with the same name as your username.

### Creating the repository

Start by creating a repository with the same name as your username. A prompt will show that looks something like this:

![Step-1](https://i.ibb.co/gJBg73g/github-step1.png)

Make sure it is set on public before proceeding to create the repository. Once created you can visit that repository where you can see a README.md file. This file will contain the markdown of the information we would like to display in our custom profile overview page.

### Editing the README.md file

When creating a custom profile overview page on GitHub, there are many ways to customize it using Markdown syntax. To get some more inspiration, you can check out this [repository](https://github.com/kautukkundan/Awesome-Profile-README-templates) that collects awesome README.md files, which may provide ideas for how to make your profile page stand out and showcase your work in a visually appealing way. But here is how I get it done:

<strong>Step 1: Greeting</strong>

To get started, I began by including a simple greeting at the beginning of my README.md file. I feel that this can help to make our page more welcoming and set the tone for visitors of our profile.

```
<h2>
  Mabuhay! My name is Glenn Ladrido!
  <img
    src="https://media.giphy.com/media/12oufCB0MyZ1Go/giphy.gif"
    width="50"
  />
</h2>
```

<strong>Step 2: Introduction</strong>

Next, I created a brief introduction section to provide visitors with an overview of my background and skills. I tried keeping it short and sweet, but I made sure to include key information that will help my visitors understand my areas of expertise and interests.

To add a personal touch to my custom profile overview page, I included an image that reflects my work or interests. Consider aligning the image to the right side of the page to leave space on the left for an "about me" section or other important details. You may find inspiration for images and other design elements by browsing through the awesome README.md files collection mentioned earlier.

```
<img align='right' src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="230">
```

I then proceeded to add my about me section. When doing so, be sure to keep it concise and focused on the most important information.

```
<p>
    <em>Head of Area at
        <a href="https://efc.com.ph/">Ecossential Foods Corporation</a>
        <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
    </em>
</p>

<p>I've been coding for fun since 2017. This year, I decided to shift my career to something I really enjoy doing. Hence, I joined a coding bootcamp to become a professional programmer. I am currently completing personal projects to showcase my skills and land a job as a frontend or full-stack developer.

When I'm not coding, I try various MMORPGs with friends. They call me <strong>NataNoob</strong>. I am also into cryptocurrency trading and NFT games.

These are the coding topics I love to study:</p>

<ul>
    <li>Javascript/Typescript</li>
    <li>ReactJS/Native/NextJS</li>
    <li>Redux and other state management tools</li>
    <li>UI/UX Design and implementation</li>
</ul>
```

To complete my introduction, I added some buttons that links to my social media profiles using <strong>img.shields.io</strong> badges. These badges can be customized with various styles and colors to match the design of my page, and can help visitors connect with me on other platforms. On your end, be sure to only add social media profiles that you're comfortable sharing publicly, and consider using professional accounts such as LinkedIn or a personal website.

```
[![Linkedin](https://img.shields.io/badge/-Glenn%20Ladrido-blue?style=flat&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/glenn-ladrido-817250146)
[![Medium](https://img.shields.io/badge/-@gladwebdev-black?style=flat&logo=Medium&logoColor=white)](https://medium.com/@gladwebdev)
[![Instagram](https://img.shields.io/badge/-@natanoobs-c13584?style=flat&labelColor=c13584&logo=instagram&logoColor=white)](https://www.instagram.com/natanoobs)
[![Gmail](https://img.shields.io/badge/-Glenn%20Ladrido-c14438?style=flat&logo=Gmail&logoColor=white)](mailto:glenn.ladrido@gmail.com)
```

<strong>Step 3: Skills</strong>

The next section I created is the skills section, where I highlighted the technologies and tools I am comfortable using, as well as other pertinent details related to my skill set as a developer. On your end, you could consider using bullet points or icons to list out your skills in a clear and concise manner. You should also group your skills by category, such as front-end development, back-end development, database management, and so on, to make it easier for visitors to navigate and find the information they're looking for. Additionally, consider including any certifications or relevant projects that demonstrate your skills and expertise if you have any.

As for me I have seen one profile from the collection that uses a code block that declares his name as a <strong>const</strong> and then proceeded to create a javascript object listing the skills details. In a markdown file, a code block is indicated by any lines of code that start and end with three backticks (```). This allows us to include snippets of code within our text.

```javascript
const Glenn = {
  pronouns: "He" | "Him",
  code: ["Javascript", "php"],
  askMeAbout: ["web dev", "app dev", "sales&marketing", "training", "tech"],
  technologies: {
    mobileApp: ["React Native"],
    frontEnd: {
      js: ["ReactJS"],
      css: ["tailwind", "scss", "mui", "styled-components"],
    },
    backEnd: {
      js: ["node", "express"],
      php: ["laravel"],
    },
    services: ["AWS"],
    databases: ["mongo", "MySql"],
    misc: ["Firebase", "Sanity", "AWS Amplify", "React Bricks"],
    tools: ["Figma", "Git", "Postman", "Android Studio", "Xcode"],
  },
  architecture: [
    "Serverless Architecture",
    "Progressive Web Applications",
    "Single Page Applications",
  ],
  currentProject:
    "I am working on a personal project that caters to the needs of salesforce effectiveness managers utilizing a mobile app for user level employees and a dashboard website for admin level employees",
  funFact:
    "There are two ways to write error-free programs; only the third one works",
};
```

<strong>Step 4: Languages and Tools</strong>

To further enhance the visual appeal of my custom profile overview page and showcase my skills as a developer, I added a set of images representing the programming languages, frameworks, and tools I use. I organized these images by category, such as front-end development, back-end development, or database management etc. You can check [Devicons](https://devicon.dev/) for a list of available programming icons you can use.

```
### Frontend
<img align="left" alt="React" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
<img align="left" alt="Redux" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
<img align="left" alt="JavaScript" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
<img align="left" alt="HTML" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" />
<img align="left" alt="CSS" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" />
<img align="left" alt="SASS" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
<img align="left" alt="MUI" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
<img align="left" alt="Bootstrap" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
<img align="left" alt="TailwindCSS" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" /><br />

<br/>

### Backend
<img align="left" alt="NodeJS" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
<img align="left" alt="Express" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
<img img align="left" alt="php" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
<img img align="left" alt="Laravel" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" /><br/>

<br/>

### Mobile
<img align="left" alt="React" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /><br/>

<br/>

### Database
<img align="left" alt="MongoDB" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
<img align="left" alt="MySQL" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" /><br />

<br/>

### Services
<img align="left" alt="AWS" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" />
<img align="left" alt="Firebase" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
<img align="left" alt="GitHub" width="50px" style="padding-right:10px;" src="https://user-images.githubusercontent.com/67447840/220037637-cff5669e-da0e-45de-98f1-cdf5b67fff26.png" /><br />

<br/>

### Headless CMS
<img img align="left" alt="Wordpress" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" />
<img align="left" alt="Sanity" width="50px" style="padding-right:10px;" src="https://repository-images.githubusercontent.com/252413723/e6f28180-8882-11ea-9e76-78d72dfa2af0" />
<img img align="left" alt="React Bricks" width="50px" style="padding-right:10px;" src="https://reactbricks.com/_next/static/media/reactbricks_vertical.777e5f1e.svg" /><br />


<br/>

### Tools
<img align="left" alt="Git" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
<img align="left" alt="Figma" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
<img align="left" alt="Postman" width="50px" style="padding-right:10px;" src="https://user-images.githubusercontent.com/67447840/220038329-e5213d83-ec34-4a82-9647-1b70ff8f2bfe.png" />
<img align="left" alt="Xcode" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" />
<img align="left" alt="Android Studio" width="50px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" /><br />

<br />
<br />
<br />
<br />

```

<strong>Step 5: Github statistics</strong>

In addition to showcasing our skills, we can also display our GitHub statistics on our custom profile overview page. To do this, I used a third-party tool called GitHub Readme Stats. This generates a dynamic image that display my GitHub activity, including my total contributions, top programming languages, and most popular repositories. By adding these statistics to my page, I can provide visitors with a quick overview of my GitHub profile and demonstrate your commitment to open-source development.

```
<a href="https://github.com/natarake?tab=repositories">
    <img width="500" height="auto" alt="natarake's github stats"
         src="https://github-readme-stats.vercel.app/api?username=natarake&show_icons=true&theme=algolia&count_private=true" /></a>

```

<strong>Step 6: Closing message</strong>

To give my custom profile overview page a strong and memorable conclusion, I added a closing message that reflects my passion for connecting and collaborating with different people. On your end, this could be a motivational quote, a personal mission statement, or a call to action for visitors to collaborate or contribute to your projects. I felt that by leaving visitors with a positive and inspiring message, we can make a lasting impression and encourage them to engage further with our profile and work. I used the closing message that many developers actually have on their profile that goes like this:

```
---
<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="30"> <em><b>I love connecting with different people</b> so if you want to say <b>hi, I'll be happy to meet you more!</b> 😊</em>

```

nd that's it, I've successfully created a professional-looking Github profile. Take a look at the preview of the greeting and about me section that I've included here.

![Final output](https://i.ibb.co/cN3XGmw/github-profile.png)

### If you found this blog helpful in any way, please consider showing your support by leaving a ⭐ in my [custom profile repository](https://github.com/natarake) here.
