module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-themes',
    '@storybook/addon-backgrounds'
  ],
  "framework": "@storybook/angular",
  "staticDirs": [{"from": './assets', "to": '/assets'}],
  "core": {
    "builder": "webpack5"
  }
}