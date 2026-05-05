module.exports = function(eleventyConfig) {
  // Pass through images directory
  eleventyConfig.addPassthroughCopy("content/images");

  // Fix image paths in HTML output (images/ -> /images/)
  eleventyConfig.addTransform("fix-images", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(/(src|href)="images\//g, '$1="/images/');
    }
    return content;
  });

  // Sort posts by date for the collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/*.md")
      .filter(p => p.data.title && p.data.title !== "无标题" && p.page.fileSlug !== "抓取报告")
      .sort((a, b) => {
        // Sort by date descending (newest first)
        const dateA = a.data.date ? new Date(a.data.date) : new Date(0);
        const dateB = b.data.date ? new Date(b.data.date) : new Date(0);
        return dateB - dateA;
      });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    // Use .html for output (clean URLs with directories)
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
