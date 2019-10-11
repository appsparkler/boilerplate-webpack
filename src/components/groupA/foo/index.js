import './styles.sass';

document.getElementById('foo').innerHTML = '<h1>I am Foo...sball<h1>';

if (module.hot) {
  module.hot.accept();
}
