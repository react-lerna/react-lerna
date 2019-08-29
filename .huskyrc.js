module.exports = {
  'hooks': {
    'pre-commit': 'yarn test'
  }
}

/*
use array for multiple tasks

const tasks = arr => arr.join(' && ')

module.exports = {
  'hooks': {
    'pre-commit': tasks([
      'yarn test:ui',
      'yarn test:web'
    ])
  }
}

*/
