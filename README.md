# React Starter

> Project starter template based on Facebook's [React](https://facebook.github.io/react/)
> front-end framework and [Alt](https://github.com/goatslacker/alt) a Flux implementation.
> Also: Hapi, Glup, Sass, Webpack, and TypeScript.

### Directory Layout

```
.
├── /client/                    # Source code of the React web client
│   ├── /actions/               # Action creators that allow to trigger a dispatch to stores
│   ├── /components/            # React components
│   ├── /data/                  # Methods for fetching data
│   ├── /dist/                  # Compiled CSS, bundles JavaScript, and other HTML assets
│   ├── /fonts/                 # Source font-files
│   ├── /images/                # Original images
│   ├── /pages/                 # Higher-order react components that handle top-level routes
│   ├── /stores/                # Stores contain the application state and logic
│   ├── /styles/                # Sass source files
│   ├── /app.js                 # Client-side startup script
│   └── /index.html             # HTML mount point for React application
├── /node_modules/              # 3rd-party libraries and utilities
├── /server/                    # Source code of the web API server written in Hapi
│   ├── /build/                 # Compiled TypeScript files
│   ├── /modules/               # Functional modules that compromise the application
│   └── /server.ts              # Main server file
├── /shared/                    # Isomorphic code shared between the React client and API server
│   ├── /components/            # Shared components
│   └── /alt.js                 # Alt js reference
│── gulpfile.js                 # Gulp configuration for tasks
│── package.json                # The list of 3rd party libraries and utilities used in this application
│── README.md                   # This file (inception)
│── tsconfig.json               # TypeScript compiler settings
└── webpack.development.js      # Webpack configuration for bundling and optimization
```

### Getting Started

Just [clone](github-windows://openRepo/https://github.com/rramdat-i/react-starter) or
[fork](https://github.com/rramdat-i/react-starter/fork) the repo and start hacking:

```shell
$ git clone -o react-starter -b master --single-branch \
      https://github.com/rramdat-i/react-starter.git MyApp
$ cd MyApp
$ npm install -g gulp           # Install Gulp task runner globally
$ npm install                   # Install Node.js components listed in ./package.json
```

### How to Build

```shell
$ npm run build                    # or, `gulp build`
```

### How to Run

```shell
$ npm start                          # or, `gulp`
```

This will start a lightweight development server with BrowserSync.
