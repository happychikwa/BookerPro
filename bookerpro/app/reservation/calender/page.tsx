export default function checkInAndOutCalender(){
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

