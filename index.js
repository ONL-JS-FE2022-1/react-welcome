const root = document.querySelector('#root');
const h1 = React.createElement('h1', {}, 'Hello React!');

ReactDOM.render(h1, root); // прицепить, заапендить = монтировать