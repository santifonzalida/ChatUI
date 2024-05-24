const Events = ({ fooEvents }) => {
    return (
        <div>
            <h2>Events</h2>
            <ul>
                {fooEvents && fooEvents.length >0 ? fooEvents.map(event => (
                    <li key={event}>{event}</li>
                ))
                : 'no events..'}    
            </ul>
        </div>
    )
}

export { Events };