import React, { useLayoutEffect, memo } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export const Computer = memo(({ url, currentCompColor, currentColor }) => {
	const { scene, materials, nodes } = useGLTF(url);

	useLayoutEffect(() => {
		Object.assign(materials['06___Default'], {
			roughness: 0,
			metalness: 0.25,
			emissive: new THREE.Color(0x000000),
			color: currentCompColor,
			envMapIntensity: 0.5,
		});
		Object.assign(materials['03___Default'], {
			roughness: 0,
			metalness: 0.25,
			emissive: new THREE.Color(0x000000),
			color: currentColor,
			envMapIntensity: 0.5,
		});
	}, [scene, nodes, materials, currentCompColor, currentColor]);

	return <primitive object={scene} scale={1.5} position={[0.5, -0.33, -3]} />;
});
