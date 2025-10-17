import { DateTime } from "luxon";

const TIME_ZONE = ""

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("/style.css");

	eleventyConfig.addFilter("postDate", dateObj => {
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toLocaleString(DateTime.DATE_MED);
	})
};

export const config = {
  markdownTemplateEngine: "njk",
};