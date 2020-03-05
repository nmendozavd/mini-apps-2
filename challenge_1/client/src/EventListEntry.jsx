import React from 'react';

function EventListEntry( {eventEntry} ) {
  return (
    <div>
      <div><strong>Date:</strong>{eventEntry.date}</div>
      <div><strong>Category: </strong>{eventEntry.category1}</div>
      <div><strong>Location: </strong>{eventEntry.category2}</div>
      <div><strong>Description: </strong>{eventEntry.description}</div>
      <br/>
    </div>
  );
}

export default EventListEntry;