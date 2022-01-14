import React from "react";

const Item = ({item}) => {
    return (
        <section className="Item">
            <div>
                console.log(item)
                <p>Username: {item.user_id}</p>
                <p>Latitude: {item.latitude}</p>
                <p>Longitude: {item.longitude}</p>
                <p>Keywords: {item.keywords}</p> 
                {/* array needs mapping */}
                <p>Description: {item.description}</p>
                <p>Date posted: {item.date_from}</p>
            </div>
        </section>
    )
}

export default Item