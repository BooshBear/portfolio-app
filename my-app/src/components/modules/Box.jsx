"use client"
import React from "react";

const Box = (props) => {
  return (
    <mesh {...props} receiveShadow={true} castShadow>
      <boxGeometry />
      <meshPhysicalMaterial color={'White'} />
    </mesh>
  )
}

export default Box;