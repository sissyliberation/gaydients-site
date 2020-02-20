# gaydients
gaydients is a collection of lgbtqiap+ gradients made with css. they help make the web gay. free and always will be.

## documentation
below are the available functions to build out flags.

### gaydient-rainbow
function used to generate rainbow flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $red | #ff0018 | red portion | hex |
| $orange | #ffa52c | orange portion | hex |
| $yellow | #ffff41 | yellow portion | hex |
| $green  | #008018 | green portion | hex |
| $blue | #0000f9 | blue portion | hex |
| $purple | #86007d | purple portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-trans
function used to generate trans flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $blue | #55cdfc | blue portion | hex |
| $pink | #f7a8b8 | pink portion | hex |
| $white | #fff | white portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-enby
function used to generate non-binary flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $yellow | #fff433 | yellow portion | hex |
| $white | #fff | white portion | hex |
| $purple | #9b59d0 | purple portion | hex |
| $black | #000 | black portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-genderqueer
function used to generate genderqueer flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $lavender | #b77fdd | lavendar portion | hex |
| $white | #fff | white portion | hex |
| $green | #48821e | green portion | hex |
| $black | #000 | black portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-ace
function used to generate ace flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $black | #000 | black portion | hex |
| $grey | #a4a4a4 | grey portion | hex |
| $white | #fff | white portion | hex |
| $purple | #810081 | purple portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-pansexual
function used to generate pansexual flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $pink | #ff1b8d | pink portion | hex |
| $yellow | #ffda00 | yellow portion | hex |
| $blue | #1bb3ff | blue portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-aro
function used to generate aro flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $green | #3aa63f | green portion | hex |
| $lightgreen | #a8d47a | light green portion | hex |
| $white | #ffffff | white portion | hex |
| $grey | #aaaaaa | grey portion | hex |
| $black | #000000 | black portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-agender
function used to generate agender flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $black | #000000 | black portion | hex |
| $white | #a8d47a | white green portion | hex |
| $grey | #a4a4a4 | grey portion | hex |
| $purple | #810081 | purple portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

### gaydient-interset
function used to generate interset flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $yellow | #ffda00 | yellow portion | hex |
| $purple | #7a00ac | purple green portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |
| $flag | true | determites whether to render a flag or gradient | bool |

### gaydient-bisexual
function used to generate bisexual flag

| parameter | default value | description | type |
| ------ | ------ | ------ | ------ |
| $pink | #d60270 | pink portion | hex |
| $purple | #9b4f96 | purple green portion | hex |
| $blue | #0038a8 | blue portion | hex |
| $opacity | 1 | the opacity of each color | number between 0 and 1 (inclusive) |
| $degrees | 180deg | degrees at which gradient is rendered | degrees |
| $chunk | 1 | how solid each color portion is | number between 0 and 1 (inclusive) |

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
