# offline-pose

> Analyze poses by uploading video

[![NPM](https://img.shields.io/npm/v/offline-pose.svg)](https://www.npmjs.com/package/offline-pose) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save offline-pose
```

Install dependencies.

```json
{
  "@mediapipe/pose": "~0.4.0",
  "@tensorflow-models/pose-detection": "^0.0.6",
  "@tensorflow/tfjs-backend-wasm": "^3.8.0",
  "@tensorflow/tfjs-backend-webgl": "^3.8.0",
  "@tensorflow/tfjs-converter": "^3.8.0",
  "@tensorflow/tfjs-core": "^3.8.0",
  "dat.gui": "^0.7.7",
  "stats.js": "^0.17.0"
}
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'offline-pose'
import 'offline-pose/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

MIT © [maddyonline](https://github.com/maddyonline)
