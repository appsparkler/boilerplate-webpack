import './styles.sass';

document.getElementById('bar').innerHTML = '<h1>I am Bar...<h1>';

if (module.hot) {
  module.hot.accept();
}
