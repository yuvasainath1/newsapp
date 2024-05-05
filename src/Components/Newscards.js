import React, { Component } from "react";

export default class Newscards extends Component {
  render() {
    let { title, description, urlToImage, srcurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <img
            src={urlToImage}
            className="card-img-top"
            alt="https://img.freepik.com/free-photo/beautiful-aerial-shot-forest-enveloped-creepy-mist-fog_181624-2659.jpg?size=626&ext=jpg&ga=GA1.1.1730265882.1714756339&semt=sph"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={srcurl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
