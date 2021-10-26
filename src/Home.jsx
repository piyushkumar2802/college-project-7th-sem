import React, { useState } from 'react';
import Style from './Style/Home';

function Home() {
    const [inputlist, setinputlist] = useState();
    const [item, setitem] = useState([]);


    const itenEvent = (event) => {
        setinputlist(event.target.value)
    };

    const listofitem = () => {
        setitem((olditems) => {
            return [...olditems, inputlist];
        });
        setinputlist('')
    };

    return (
        <div>
            <Style />

            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1>To Do List</h1>
                    <br />
                    <input type="text" placeholder="Add Item's"
                        value={inputlist}
                        onChange={itenEvent} />
                    <button onClick={listofitem}> + </button>

                    <ol>
                        {/* <li> {inputlist} </li> */}
                        {item.map((itemval) => {
                            return <li>{itemval}</li>
                        })}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default Home;