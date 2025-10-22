import { DateTime } from "luxon";

const TIME_ZONE = ""

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("/style.css");

	eleventyConfig.addFilter("postDate", dateObj => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(DateTime.DATE_MED);
	})

	eleventyConfig.addLayoutAlias("gallery", "layouts/gallery.njk");
	eleventyConfig.addLayoutAlias("fiction", "layouts/fiction.njk");
	eleventyConfig.addLayoutAlias("poetry", "layouts/poetry.njk");
	eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
	eleventyConfig.addLayoutAlias("home", "layouts/home.njk");

};

export const config = {
  	markdownTemplateEngine: "njk",
	dir: {
		input: 'src',
		output: '_site',
	},
};