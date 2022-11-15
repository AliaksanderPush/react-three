import { Box } from './Box';
import { Hellowen } from './Hellowen';
import { useCompoundBody } from '@react-three/cannon';

export function UserOnBox(props) {
	const [ref] = useCompoundBody(() => ({
		mass: 6,
		...props,
		shapes: [
			{ type: 'Box', position: [0, 0, 0], rotation: [0, 0, 0], args: [1, 1, 1] },
			{ type: 'Sphere', position: [1, 0, 0], rotation: [0, 0, 0], args: [0.65] },
		],
	}));

	return (
		<group ref={ref}>
			<mesh receiveShadow castShadow>
				<Box />
				<meshNormalMaterial />
			</mesh>
			<Hellowen />
		</group>
	);
}
