const markdownIt = require("markdown-it");
const markdownItGithubAlerts = require("markdown-it-github-alerts").default;

module.exports = function(eleventyConfig) {
    // Set up markdown-it with options
    const mdOptions = {
        html: true,
        breaks: false,
        linkify: true,
    };

    const mdLib = markdownIt(mdOptions)
        .use(markdownItGithubAlerts); // Use the alerts plugin

    eleventyConfig.setLibrary("md", mdLib);
    
    // Run manual file passthrough copy
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("github-markdown.css");
}