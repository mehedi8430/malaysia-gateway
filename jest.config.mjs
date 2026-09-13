import nextJest from "next/jest.js";
const createJestConfig = nextJest({ dir: "./" });
const customJestConfig = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  testMatch: ["**/__tests__/**/*.test.(ts|tsx)"],
};
export default createJestConfig(customJestConfig);