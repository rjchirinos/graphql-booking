import React from 'react';

import './EventItem.css';

const eventItem = props => (
  <li key={props.eventId} className="event-item">
    <div>
      <h1>{props.title}</h1>
      <h2>
        {'$' + props.price} - {new Date(props.date).toLocaleDateString()}
      </h2>
    </div>
    <div>
      {props.userId === props.creatorId ? (
        <p>Owned</p>
      ) : (
        <button
          className="btn btn-blue"
          onClick={props.onDetail.bind(this, props.eventId)}
        >
          View Details
        </button>
      )}
    </div>
  </li>
);

export default eventItem;
