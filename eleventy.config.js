const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const markdownIt = require("markdown-it");
const markdownItGithubAlerts = require("markdown-it-github-alerts").default;

module.exports = async function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

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
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("styles.css");
    eleventyConfig.addPassthroughCopy("github-markdown.css");

    return {
        pathPrefix: "/~ksalesin/cs50/"
    };
}