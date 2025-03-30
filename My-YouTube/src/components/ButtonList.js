import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Cooking"/>
      <Button name="Soccer"/>
      <Button name="Coding"/>
      <Button name="Magic"/>
      <Button name="Trading"/>
      <Button name="News"/>
    </div>
  )
}

export default ButtonList
