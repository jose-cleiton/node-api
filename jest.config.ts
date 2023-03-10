export default {

  clearMocks: true,

  coverageProvider: "v8",

  transform: {
    "^.+\\.(t|J)sx?$": [
      "@swc/jest",
      {
        "jsc": {
          "parser": {
            "syntax": "typescript",
            "tsx": false,
            "decorators": true,
          },
          
          target: "es2017",
         
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
        },
        module: {
          type: "es6",
          noInterop: false,
        },
      },
    ],
  },

};
