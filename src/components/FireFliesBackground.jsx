import React from 'react'

const createFireFly = () => ({
	id: Math.random(),
	top: `${Math.random()*100}%`,
	left: `${Math.random()*100}%`,
	animationDuration:`${Math.random()*5+5}s`
})

const FireFliesBackground = () => {
  return (
	<div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>

	</div>
  )
}

export default FireFliesBackground