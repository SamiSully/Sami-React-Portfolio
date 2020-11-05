import React from 'react';

function Card(props) {
    return (
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-header">
              <h5>{props.title}</h5>
            </div>
            <div className="card-body">
              <img
                className="card-img-top"
                src={props.image}
                alt="Project"
              />
              <hr />
              <p className="card-text">
                    {props.content}
              </p>
              <a
                className="btn btn-primary center" target="_blank" rel="noreferrer"
                href={props.github}
                role="button"
                >Github</a>
              <a
                className="btn btn-primary center" target="_blank" rel="noreferrer"
                href={props.demo}
                role="button"
                >Live Demo</a>
            </div>
          </div>
          </div>
    );
}

export default Card;