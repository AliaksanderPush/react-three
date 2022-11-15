import { usePlane } from '@react-three/cannon';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export function Plane() {
	const [stone, fon] = useLoader(TextureLoader, ['box.jpeg', 'fon.jpeg']);
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [1, 0, -1],
	}));
	return (
		<mesh ref={ref}>
			<planeGeometry args={[10, 10]} />
			<meshStandardMaterial map={fon} />
		</mesh>
	);
}
