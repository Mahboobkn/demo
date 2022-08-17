import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from './redux'

const HookIceCreamContainer = () => {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
  return (
    <>
        <h1>Num Of IceCream - {numOfIceCream} </h1>
        <button onClick={()=> dispatch(buyIceCream())}>Buy IceCream</button>
    </>
  )
}

export default HookIceCreamContainer