function Page(){
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
    );
}

export default Page;