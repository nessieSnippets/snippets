module.exports = {
    roots    : ['<rootDir>'],
    testMatch: ['**/?(*.)+(test).+(ts|js)'],
    transform: {
      '^.+\\.(ts)$': 'ts-jest',
    }
  }