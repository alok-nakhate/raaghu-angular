module.exports = {
  "stories": [
    "../projects/**/*.stories.@(md|mdx)",
    "../projects/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "staticDirs": [{"from": './assets', "to": '/assets'}],
  "core": {
    "builder": "webpack5"
  },
  "features": {
    "storyStoreV7": true
  }
}