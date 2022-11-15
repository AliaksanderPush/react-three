import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useFBX } from '@react-three/drei';

export function Hellowen(props) {
	const fbx = useFBX('jackolantern.fbx');
	const material = useLoader(TextureLoader, 'Jackolantern.png');
	return (
		<mesh {...props}>
			<primitive object={fbx} scale={0.05} position={[2, 0.3, 0]} rotation={[0, 1.5, 0]} />
			<meshStandardMaterial map={material} />
		</mesh>
	);
}
