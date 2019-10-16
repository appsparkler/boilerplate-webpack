import './styles';

document.getElementById('foo').innerHTML = `
  <div class="container">
    <div class="row">
      <div class="col-3">
        <h2 class=" p-2 text-primary bg-secondary">I am Foo...</h2>
      </div>
    </div>
  </div>
`;

if (module.hot) {
  module.hot.accept();
}
