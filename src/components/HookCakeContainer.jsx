import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from './redux'

const HookCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <>
        <h1>Num of Cakes - {numOfCakes} </h1>
        <button onClick={()=> dispatch(buyCake())}>Buy Cake</button>
    </>
  )
}

export default HookCakeContainer