module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://www.aaronelam.com`,
    // Your Name
    name: 'Aaron Elam',
    // Main Site Title
    title: `Aaron Elam | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit, ipsum.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/aaronelam`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/aaronjelam/`,
    // Content of the About Me section
    about: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus perferendis porro cumque ea error ab voluptatem. Temporibus adipisci exercitationem similique itaque quibusdam laudantium, qui molestiae quas, aut amet animi id.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Interactive CPU Datapath Simulator',
        description:
          'An educational architecture webapp to teach CPU architecture to students',
        link: 'https://cpudatapath.com',
      },
      {
        name: 'Review Sentiment Analyzer',
        description:
          'Judges whether an IMDb-scraped movie review is positive or negative',
        link: 'https://google.com',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Domino\'s Delivery Driver🍕',
        description: 'Brought happiness in a box: directly to your door.',
        link: 'https://google.com',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'C/C++, Java, Python',
      },
      {
        name: 'Other',
        description:
          'GNU/Linux, Git, Docker, Virtual Private Servers (VPS)',
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
