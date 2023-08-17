import React from 'react';
import "../TicketForm/TicketStyle.css"

function TicketForm() {
  <div className="ticket">
    <div className="header">
      <h2>Ticket details</h2>
      <button className="close">X</button>
    </div>
    <div className="details">
      <p>Number of ticket:</p>
      <p>Status of local ticket:</p>
      <p>Date/Time:</p>
      <p>Latitude:</p>
      <p>Longitude:</p>
      <p>Class name:</p>
      <p>Count Object:</p>
      <p>Confidence:</p>
      <p>Prediction output type:</p>
      <p>Prediction output File:</p>
    </div>
    <div className="actions">
      <button className="approve">Approve</button>
      <button className="reject">Reject</button>
    </div>
    <div className="update">
      <button className="update-status">Update ticket status</button>
    </div>
  </div>
};

export default TicketForm;
