import React, { Fragment , useState , useEffect } from 'react';
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
        <Fragment className="App">
            {
                loading ?
                    < Title />
                    :
                    < Home />
            }
        </Fragment>
    )
}

export default Website;
