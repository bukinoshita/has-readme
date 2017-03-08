# has-readme [![Build Status](https://travis-ci.org/bukinoshita/has-readme.svg?branch=master)](https://travis-ci.org/bukinoshita/has-readme)
> Check if a project has README.md

Useful for tools that needs to know whether to write on README.md or create a new one.

Checks if a README.md file is present in the working directory.

## Install

```bash
$ npm install --save has-readme
```

## Usage
```
.
├── project-zero
│   └── package.json
└── project-one
    ├── package.json
    └── README.md
```

```js
import hasReadme from 'has-readme'

hasReadme('project-zero')
//=> false

hasReadme('project-one')
//=> true
```

## API

### hasReadme([cwd])

Returns a `boolean`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.

## License
[MIT](https://github.com/bukinoshita/travis-init/blob/master/LICENSE) &copy; Bu Kinoshita
