import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  coverageProvider: "babel",
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
};

export default config;
