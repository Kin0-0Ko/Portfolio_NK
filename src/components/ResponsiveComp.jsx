"use client"
import React from 'react'
import useScreenSize from './hooks/useScreenSize'

const ResponsiveComp = ({children}) => {

	const size = useScreenSize();

  return (
	<>
	{children(size)}
	</>
  )
}

export default ResponsiveComp