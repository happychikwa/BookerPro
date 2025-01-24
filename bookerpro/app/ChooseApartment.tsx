import React from "react"

export default function chooseApartment(props){
    const {data, handleChange} = props

    return(
        <form>
            <div className="flex flex-col" >
                {/* Title */}
                <h2>Fully Furnished</h2>
                {/* apartment content */}
                <div className="flex flex-row" >
                    <li>
                        <ul>Living room</ul>
                        <ul>King sized bed</ul>
                        <ul>Living room</ul>
                        <ul>Shower with geyser</ul>
                        <ul>fully stocked kitched</ul>
                        <ul>Satellite TV; DSTV</ul>
                    </li>
                    <input type="number" id="fullyfurnished" name="fullyfurnished" min="1" max="4" value="0" step="1"/>
                    <strong><p>K650</p></strong>
                </div>
            </div>
            <div className="flex flex-col" >
                {/* Title */}
                <h2>Single Room</h2>
                {/* apartment content */}
                <div className="flex flex-row" >
                    <li>
                        <ul>King sized bed</ul>
                        <ul>Shower with geyser</ul>
                        <ul>Satellite TV; DSTV</ul>
                    </li>
                    <input type="number" id="singleroom" name="singleroom" min="1" max="2" value="0" step="1"/>
                    <strong><p>K400</p></strong>
                </div>
            </div>
        </form>
    )
}