import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export function Box(props) {
	//const ref = useRef();
	//const [hovered, hover] = useState(false);
	//const [clicked, click] = useState(false);
	const [box, stone] = useLoader(TextureLoader, ['soviettv.png', 'Jackolantern.png']);

	return (
		<mesh
			{...props}
			//ref={ref}
			//onPointerOver={(event) => hover(true)}
			//onPointerOut={(event) => hover(false)}
			position={[2, -0.2, 0]}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial map={box} />
		</mesh>
	);
}
