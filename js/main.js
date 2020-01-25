import App from './app.js';

const element = React.createElement(App);
const domContainer = document.querySelector('#app');

ReactDOM.render(element, domContainer);