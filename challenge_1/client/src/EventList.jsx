import React from 'react';
import EventListEntry from './EventListEntry.jsx';

const EventList = props => {
  const { events } = props;

  return (
    <div>
        {events.map((event, index) => <EventListEntry key ={index} eventEntry= { event } />)}
    </div>
  );
};

export default EventList;