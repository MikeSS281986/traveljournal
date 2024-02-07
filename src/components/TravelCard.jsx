import React from "react"

export default function TravelCard(props) {
    return (
        <div>
            <div className="travelCard">
                <img src={`assets/${props.coverImg}`} className="loc--image" />
                <div className="loc--data">
                    <div className="loc--info">
                        <img src="assets/location-pin.png" className="loc--pin" />
                        <p className="country">{props.country.toUpperCase()}</p>
                        <a href={props.link} target="_blank" className="loc--link">View on google maps</a>
                    </div>
                    <h1 className="loc--name">{props.destination}</h1>
                    <p className="travel--date">{props.data}</p>
                    <p className="travel--info">{props.description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}