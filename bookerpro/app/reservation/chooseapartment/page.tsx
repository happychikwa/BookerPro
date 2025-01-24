export default function chooseApartment(){
    return(
        <div>
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
                    <input type="number" id="spinner" name="spinner" min="1" max="4" value="1" step="1"/>
                    <strong><p>K650</p></strong>
                </div>
            </div>
            <div className="flex flex-col" >
                {/* Title */}
                <h2>Fully Furnished</h2>
                {/* apartment content */}
                <div className="flex flex-row" >
                    <li>
                        <ul>King sized bed</ul>
                        <ul>Shower with geyser</ul>
                        <ul>Satellite TV; DSTV</ul>
                    </li>
                    <input type="number" id="spinner" name="spinner" min="1" max="2" value="1" step="1"/>
                    <strong><p>K400</p></strong>
                </div>
            </div>
        </div>
    )
}