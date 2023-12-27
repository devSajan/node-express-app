module.exports = {
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  restoreMocks: true,
  // coveragePathIgnorePatterns: ['node_modules', 'src/config', 'src/app.js', 'tests'],
  // coverageReporters: ['text', 'lcov', 'clover', 'html'],
  // !NOTE: jest-html-reporter config
  // reporters: [
  //   'default',
  //   [
  //     './node_modules/jest-html-reporter',
  //     {
  //       pageTitle: 'Test Report',
  //       includeFailureMsg: true,
  //       includeSuiteFailure: true,
  //       includeObsoleteSnapshots: true,
  //       outputPath: './testResults/test-report.html',
  //       // includeStackTrace: true,
  //       // includeConsoleLog: true,
  //     },
  //   ],
  // ],
  // !NOTE: jest-html-reporters config
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './test-report',
        filename: 'report.html',
        openReport: false,
        includeConsoleLog: true,
        darkTheme: true,
        pageTitle: 'Test Report',
      },
    ],
  ],
};
