import './styles';
import 'bootstrap';

document.getElementById('bar').innerHTML = `
  <h1 class="text-secondary bg-primary ">I am Bar...</h1>
  <div class="test">
    I am Test...
  </div>
`;

if (module.hot) {
  module.hot.accept();
}
