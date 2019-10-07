const body = document.querySelector('body');
body.innerHTML = `
  <h1>Hello World</h1>
`

if(module.hot) {
  module.hot.accept();
}
