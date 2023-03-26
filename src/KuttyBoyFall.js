/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 KuttyBoyFall.glb
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function KuttyBoyFall(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/KuttyBoyFall.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log(actions[Object.keys(actions)[0]].play());
    // actions.joy.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorig6Hips} />
          <skinnedMesh name="Ch09" geometry={nodes.Ch09.geometry} material={materials.Ch09_body} skeleton={nodes.Ch09.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/KuttyBoyFall.glb')
