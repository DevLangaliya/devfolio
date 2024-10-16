module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Dev Langaliya',
    // Main Site Title
    title: `Dev Langaliya | Student`,
    // Description that goes under your name in main bio
    description: `Sophomore at the University of Illinois Urbana-Champaign, majoring in Statistics and minoring in Computer Science.`,
    // Optional: Github account URL
    github: `https://github.com/DevLangaliya`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/dev-langaliya/`,
    // Content of the About Me section
    about:
      'I am a second-year Statistics student at the University of Illinois Urbana-Champaign, with a minor in Computer Science. My passion for data science and software development drives me to create innovative solutions that merge statistical analysis and technology. I have experience in programming languages such as Python and TypeScript, and I’ve developed applications, including a mobile app for academic schedule management that leverages machine learning for course recommendations. As a Data Science Intern at Motorola Solutions, I engineered a web tool for data catalog management and applied predictive modeling to enhance decision-making. I thrive in collaborative settings, demonstrated by my contributions to team projects and hackathons, including a 4th place finish at BuildIllinois. I am eager to embrace new challenges where I can apply my technical skills and passion for problem-solving.',
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Quantifying "Clutch"',
        description:
          'Currently in a team of 4 working towards developing a novel metric to quantify NFL players’ clutch performance.',
        link: '',
      },
      {
        name: 'WeatherPicks',
        description:
          'Currently building a betting platform with 2 friends for anyone to bet on the weather.',
        link: '',
      },
      {
        name: 'Autonomous Vehicle Safety Analysis',
        description:
          'This project involved analyzing over 500,000 miles of real-world and simulated autonomous vehicle data using probabilistic techniques such as Bayesian inference and Kolmogorov-Smirnov tests to assess AV performance across different weather conditions.',
        link: '',
      },
      {
        name: 'Intellisem',
        description:
          'A schedule management app that allows UIUC students to crate and manage their schedules, while leveraging machine learning to provide course recommendations.',
        link: '',
      },
      {
        name: 'ShowMe!',
        description:
          'A movie recommendation web app that uses machine learning to recommend movies based on user preferences.',
        link: '',
      },
      {
        name: 'Data Science Discovery Individual Project',
        description:
          'Developed a data analysis project that explored correlations between player performance and team success in the NFL, using Python to process large datasets and predict key statistics with linear regression.',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Motorola Solutions',
        description: 'Data Science Intern, May 2024 - August 2024',
        link: 'https://www.motorolasolutions.com/',
      },
      {
        name: 'Kumon Math and Reading',
        description: 'Student Tutor, January 2022 - July 2023',
        link: 'https://kumon.com/',
      },
      {
        name: 'Ascension Alexian Brothers',
        description: 'Volunteer, November 2021 - July 2022',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'Python, C++, R, TypeScript, JavaScript, Java, PostgreSQL, HTML, CSS, Swift, Mathematica, LaTex, TI-BASIC',
      },
      {
        name: 'Dev Tools',
        description:
          'Git/Github, VSCode, Docker, SQL Workbench, AWS Redshift, JetBrains, Scene Builder, Bash',
      },
      {
        name: 'Frameworks/Libraries',
        description:
          'Flask, scikit-learn, pandas, NumPy, Matplotlib, React, React Native, JavaFX, UIKit',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
