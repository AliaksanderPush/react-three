import React, { useLayoutEffect, memo } from 'react';
import { useGLTF } from '@react-three/drei';

export const Table = memo(
	({ currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap }) => {
		const { scene, nodes, materials } = useGLTF('old_metal_table.glb');
		useLayoutEffect(() => {
			Object.assign(materials.DefaultMaterial, {
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

		return <primitive scale={1.5} object={scene} position={[0, 0, -2]} />;
	},
);
