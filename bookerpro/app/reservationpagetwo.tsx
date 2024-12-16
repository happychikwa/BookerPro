export function apartmentQuantity(){
    return(
        <div>
            <p>How many apartments are you reserving ?</p>
            <li>
                <ul>

                </ul>
            </li>
            <input type="number" id="spinner" name="spinner" min="1" max="4" value="1" step="1"/>
            <p>K650</p>
            <button name="Next"/>
        </div>
    )
}

export function checkInAndOutCalender(){
    return(
        <div>
            <div>
                <p id="checkin" ></p>
                <p id="checkout" ></p>
            </div>
            <div>
                <table className="calender" >
                    <thead>
                        <tr>
                            <th colSpan={7} id="month-year" >Month Year</th>
                        </tr>
                        <tr>
                            <th>Su</th>
                            <th>Mo</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thur</th>
                            <th>Fri</th>
                            <th>Sa</th>
                        </tr>
                    </thead>
                    <tbody id="calender-body" ></tbody>
                </table> 
            </div>
            <div className="form-nav" >
                <button>PREVIOUS</button>
                <button>NEXT</button>
            </div>
        </div>
    )
}

export function orderSummary(){
    return(
        <div>
            <table className="orderSummary" >
                <thead>
                    <tr>
                        <th>QTY</th>
                        <th>ITEM</th>
                        <th>NIGHTS</th>
                        <th>PRICE/NIGHT</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
            <div>
                <button>PREVIOUS</button>
                <button>CHECKOUT</button>
            </div>
        </div>
    )
}