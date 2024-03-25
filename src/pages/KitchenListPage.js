import React, { useState, useEffect } from 'react'
import ListItem from '../components/KitchenListItem'

const KitchenListPage = () => {

  let [kitchens, setKitchens] = useState([])



  useEffect(() => {
    getKitchens()
    
  }, [])  


  let getKitchens = async () => {
    let response = await fetch('http://127.0.0.1:9500/api/kitchens/')
    let data = await response.json()
    setKitchens(data)
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