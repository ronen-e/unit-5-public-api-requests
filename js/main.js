import App from './app.jsx';

const element = React.createElement(App);
const domContainer = document.querySelector('#app');

ReactDOM.render(element, domContainer);
