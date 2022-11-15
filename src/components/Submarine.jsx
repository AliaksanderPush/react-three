import React, { useLayoutEffect } from 'react';
import { useGLTF } from '@react-three/drei';

export const Submarine = ({
	currentColor,
	currentTexture,
	colorMap,
	normalMap,
	roughnessMap,
	metalnessMap,
	...props
}) => {
	const { scene, nodes, materials } = useGLTF('submarine.gltf');
	console.log('gltf=>', useGLTF('submarine.gltf'));
	useLayoutEffect(() => {
		Object.assign(materials.Material, {
			metalnessMap: metalnessMap,
			normalMap: normalMap,
			roughnessMap: roughnessMap,
			map: colorMap,
			color: currentColor,
		});
	}, [
		scene,
		nodes,
		materials,
		currentColor,
		currentTexture,
		colorMap,
		normalMap,
		roughnessMap,
		metalnessMap,
	]);

	return <primitive scale={0.1} object={scene} position={[0, 3, -2]} />;
};
