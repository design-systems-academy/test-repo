var artefacts = require("./artefacts");

module.exports = {
  siteTitle: "Design Systems Academy", // <title>
  shortSiteTitle: "DS Academy", // <title> ending for posts and pages
  siteDescription: "Academy of Design Systems",
  siteUrl: "https://github.com/design-systems-academy/design-systems.academy",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Design Systems Team",
  // info
  headerTitle: "Design Systems are awesome",
  headerSubTitle: "your portal into systematic design :-)",
  // manifest.json
  manifestName: "HeroBlog - a GatsbyJS starter",
  manifestShortName: "HeroBlog", // max 12 characters
  manifestStartUrl: "/index.html",
  manifestBackgroundColor: "white",
  manifestThemeColor: "#666",
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/design-systems-academy/design-systems.academy" },
  ],
  artefacts: artefacts,
};
