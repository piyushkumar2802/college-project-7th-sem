import React , { Fragment, useState, useEffect } from 'react'
import './App.css';
import FrontPage from './Construction/FrontPage';
import Website from './Construction/home';

function App() {
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
                    < FrontPage />
                    :
                    < Website />
                }
    </Fragment>
  );
}

export default App;
