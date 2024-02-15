// Timeline.js

import React from 'react';
import './styles/Timeline.css'; // Import your stylesheet
import { events } from '../data/events';
const Timeline = () => {
    return (
        <section className="timeline">
            <div className="timeline-content">
                {events.map((event, index) => (
                    <div className="timeline-card" key={index}>
                        <div className="card-date">{event.date}</div>
                        <div className="card-content">
                            <h2>{event.title}</h2>
                            <p>{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
