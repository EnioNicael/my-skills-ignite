module.exports = {
  preset: "react-native",
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ],
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.tsx",
    "!src/**/*.spec.tsx"
  ],
  coverageReporters: [
    "lcov"
  ]
}