import React, { useState , useEffect } from 'react';
import Home from './Home';
import Title from './Title';

function Website() {
    const [loading, setloading] = useState(false);

    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 5000);
    }, [])
    return (
        <div>
            {
                loading ?
                    < Title />
                    :
                    < Home />
            }
        </div>
    )
}

export default Website;
