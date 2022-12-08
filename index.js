class HeaderComponent extends React.Component {
    render() {
        console.log(this.props);
        const p = React.createElement('p', {}, 'Super paragraph');
        const h2 = React.createElement('h2', {title: 'Hi!'}, `Hello ${this.props.name}`);
        const article = React.createElement('atricle', {}, h2, p); 
        return article;
    }
}

const component = React.createElement(HeaderComponent, {name: 'React!11!'}, 'Text');
const component2 = React.createElement(HeaderComponent, {name: 'JavaScript'});
const parentElement = React.createElement('section', {}, component, component2);

const root = document.querySelector('#root');
ReactDOM.render(parentElement, root);

/*
Зробіть класову компоненту, яка приймає через props ім'я і повертає h1 з текстом "Привіт, <ім'я>"
*/