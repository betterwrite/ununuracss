export default {
  repository: 'https://github.com/betterwrite/ununuracss',
  silent: false,
  commits: 'conventional-commits',
  tag: true,
  version: true,
  push: true,
  publish: false,
  release: false,
  exclude: [' typo'],
  prerelease: 'beta',
  packagePath: 'package.json',
  lernaPath: 'lerna.json',
}
