import React from "react"

export default function Page(){
    return(
        <form>
            <p>How many apartments are you reserving ?</p>
            <li>
                <ul>

                </ul>
            </li>
            <input type="number" id="spinner" name="spinner" min="1" max="4" value="1" step="1"/>
            <p>K650</p>
            <button name="Next"/>
        </form>
    )
}

