/**
 * Renders our React Components
 */

ReactDOM.render(
  React.createElement(Site,{config:config}),
  document.querySelector('#root')
)