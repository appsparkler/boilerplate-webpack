import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './styles';

export default class Bar extends Component {
  render() {
    return (
      <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top border border-primary">
        <div class="container">
          <a class="navbar-brand text-info" href="#">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container">

        <header class="jumbotron my-4 text-info border border-primary">
          <h1 class="display-3">A Warm Welcome!</h1>
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repellat.</p>
          <a href="#" class="btn btn-primary btn-lg">Call to action!</a>
        </header>


        <div class="row text-center">

          <div class="col-lg-3 col-md-6 mb-4 text-primary">
            <div class="card h-100 border border-dark">
              <img class="card-img-top" src="http://placehold.it/500x325" alt=""></img>
              <div class="card-body">
                <h4 class="card-title text-dark">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 border border-dark text-primary">
              <img class="card-img-top" src="http://placehold.it/500x325" alt=""></img>
              <div class="card-body">
                <h4 class="card-title text-dark">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 border border-dark text-primary">
              <img class="card-img-top" src="http://placehold.it/500x325" alt=""></img>
              <div class="card-body">
                <h4 class="card-title text-dark">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <div class="card h-100 border border-dark text-primary">
              <img class="card-img-top" src="http://placehold.it/500x325" alt=""></img>
              <div class="card-body">
                <h4 class="card-title text-dark">Card title</h4>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
              </div>
              <div class="card-footer">
                <a href="#" class="btn btn-primary">Find Out More!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

ReactDom.render(<Bar />, document.querySelector('.bar'));

if (module.hot) {
  module.hot.accept();
}
