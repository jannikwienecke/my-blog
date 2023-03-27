// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Wienecke | Freelancer | Web Entwickler";
export const SITE_DESCRIPTION =
  "Freiberuflicher Webentwickler aus Hamburg, Deutschland. Verfügbar für freiberufliche Projekte. Willkommen auf meinem Portfolio.";

export const TWITTER_HANDLE = "@jannikwiencke";
export const MY_NAME = "Jannik Wiencke";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
