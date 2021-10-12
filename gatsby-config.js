module.exports = {
  siteMetadata: {
    description: "Cameron Yee is a software developer specializing in React and developer experience.",
    siteUrl: "https://cameron-yee.dev",
    title: "Cameron Yee",
    titleTemplate: "cameronYee(%s)"
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
};
