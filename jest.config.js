// jest.config.js


const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/contexts/(.*)$': '<rootDir>/contexts/$1',
    '^@/models/(.*)$': '<rootDir>/models/$1',
    '^@/themes/(.*)$': '<rootDir>/themes/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/config/(.*)$': '<rootDir>/config/$1',
    "\\.(css|less|scss|sass)$": "jest-css-modules-transform"

  },
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],

  testEnvironment: 'jest-environment-jsdom',
  "globals": {
    // we must specify a custom tsconfig for tests because we need the typescript transform
    // to transform jsx into js rather than leaving it jsx such as the next build requires. you
    // can see this setting in tsconfig.jest.json -> "jsx": "react"
    "ts-jest": {
      "tsConfig": "<rootDir>/tsconfig.jest.json"
    }
  }
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)