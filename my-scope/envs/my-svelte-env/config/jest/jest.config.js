/* eslint-disable */
// Override the Jest config to ignore transpiling from specific folders
    // See the base Jest config: https://bit.cloud/teambit/react/react/~code/jest/jest.config.js
    
    // Force bit to detect this dependency
    require("svelte-jester")
    
    const { generateNodeModulesPattern } = require('@teambit/dependencies.modules.packages-excluder');
    const { jestConfig } = require('@teambit/react.react-env');
    
    const packagesToTransform = [
      "svelte",
      "testing-library__dom",
      "@teambit"
    ];
    
    const transformIgnorePatterns = generateNodeModulesPattern({ packages: packagesToTransform, excludeComponents: true });
    
    module.exports = {
      ...jestConfig,
      transformIgnorePatterns: [
        '^.+.module.(css|sass|scss)$',
        transformIgnorePatterns
      ],
      transform: {
        ...jestConfig.transform, 
        "^.+\.svelte$": [
          "svelte-jester",
          {
            "preprocess": require.resolve('./svelte.config.js')
          }
        ],
      },
      moduleFileExtensions: [...jestConfig.moduleFileExtensions, "svelte"],
    };
    