import React, { useState, useEffect } from 'react'
import ListItem from '../components/KitchenListItem'

const KitchenListPage = () => {

  let [kitchens, setKitchens] = useState([])
  const [isLoading, setIsLoading] = useState([true]);
  const [isNotFound, setIsNotFound] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch('http://127.0.0.1:9500/api/kitchens/')

      if (response.ok === false) {
        setIsNotFound(true);
        return;
      }

      const data = await response.json();
      setKitchens(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (kitchens.length < 1) {
    setIsNotFound(true);
  }

  if (isNotFound) {
    return (
      <>
        <p>Sorry We can't find any kitchens</p>
      </>
    );
  }

 

  return (
    <>

    <div>Kitchens</div>

    <div className='kitchens-list'>
      {kitchens.map((kitchen, index ) => (
        <ListItem key={index} kitchen={kitchen} />
      ))}

      
    </div>
    </>
  )
}

export default KitchenListPage