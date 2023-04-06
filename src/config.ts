export const SITE = {
  title: "WebDev Notes",
  description: "WebDev Notes",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string;
  description: string;
  layout: string;
  image?: { src: string; alt: string };
  dir?: "ltr" | "rtl";
  ogLocale?: string;
  lang?: string;
};

export const KNOWN_LANGUAGES = {
  English: "en",
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = "";

export const COMMUNITY_INVITE_URL = "";

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  apiKey: "XXXXXXXXXX",
};

export type Sidebar = Record<
  typeof KNOWN_LANGUAGE_CODES[number],
  Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
  en: {
    "WebDev Notes": [
      { text: "Overview", link: "en/overview" },
      { text: "Introduction to HTML", link: "en/introduction-to-html" },
      { text: "File Management", link: "en/file-management" },
      { text: "Introduction to css", link: "en/intro-css" },
      { text: "Fonts", link: "en/fonts" },
      { text: "Emoji Cheatsheet", link: "en/emoji-cheatsheet" },
      { text: "Markdown Cheatsheet", link: "en/markdown-cheatsheet" },
      { text: "Public APIs", link: "en/public-apis" },
    ],
  },
};
