//release.config.js file
module.exports = {
  branches: ['main'],
  tagFormat: 'v${version}',
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        "preset": "conventionalcommits",
        "releaseRules": [
          { "type": "feat", "release": "minor" },
          { "type": "fix", "release": "patch" },
          { "type": "chore", "release": "patch" },
          { "type": "ci", "release": "patch" },
          { "type": "docs", "release": "patch" },
          { "type": "style", "release": "patch" },
          { "type": "refactor", "release": "patch" },
          { "type": "perf", "release": "patch" },
          { "type": "test", "release": "patch" }
        ]
      }
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        writerOpts: {
          headerPartial: '## Changes in version {{version}}',
        },
      },
    ],
    '@semantic-release/changelog',      
    '@semantic-release/github',     
    '@semantic-release/git',
  ]
};
