/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "dest-environment-jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{ tsconfig: 'tsconfig.app.json' }],
  },
  setupFileAfterEnv: ['./jest.setup.ts'],
};