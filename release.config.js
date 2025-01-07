module.exports = {
    branches: ['main'],
    tagFormat: 'v${version}',
    plugins: [
      '@semantic-release/commit-analyzer',
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