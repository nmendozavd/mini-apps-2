import React from 'react';

function EventListEntry( {eventEntry} ) {
  return (
    <div>
      <div>Date: {eventEntry.date}</div>
      <div>Description: {eventEntry.description}</div>
      <div>Category 1: {eventEntry.category1}</div>
      <div>Category 2: {eventEntry.category2}</div>
      <br/>
    </div>
  );
}

export default EventListEntry;