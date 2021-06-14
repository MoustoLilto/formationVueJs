module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
        '^.+\\.vue$': 'vue-jest',
    },
    verbose: true,
    browser: true,
    clearMocks: true,
    collectCoverage: true,
    rootDir: '.',
    coverageDirectory: 'tests/test-reports/coverage/',
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{js,vue,jsx}',
        '!<rootDir>/tests/**',
        '!<rootDir>/node_modules/**',
    ],
    moduleFileExtensions: ['js', 'vue'],
    reporters: [
        'default',
        [
            'jest-junit',
            {
                outputDirectory: 'tests/test-reports/',
            },
        ],
        [
            'jest-html-reporter',
            {
                outputPath: 'tests/test-reports/report.html',
                includeFailureMsg: true,
                includeConsoleLog: true,
            },
        ],
    ],
};
