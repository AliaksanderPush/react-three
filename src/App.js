import React, { Suspense, useState, useRef } from 'react';
import { OrbitControls, Html, useProgress, Environment, useFBX } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Physics, usePlane, useCompoundBody } from '@react-three/cannon';
import { TextureLoader } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import './App.css';

function Loader() {
	const { progress } = useProgress();
	return <Html center>{progress} % loaded</Html>;
}

function Plane() {
	const [stone, fon] = useLoader(TextureLoader, ['box.jpeg', 'fon.jpeg']);
	const [ref] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0],
		position: [1, -0.5, -1],
	}));
	return (
		<mesh ref={ref}>
			<planeGeometry args={[10, 10]} />
			<meshStandardMaterial map={fon} />
		</mesh>
	);
}

function CompoundBody(props) {
	return (
		<group>
			<mesh receiveShadow castShadow>
				<Box />
				<meshNormalMaterial />
			</mesh>
			<Model />
		</group>
	);
}

function Model(props) {
	const fbx = useFBX('jackolantern.fbx');
	const material = useLoader(TextureLoader, 'Jackolantern.png');
	return (
		<mesh {...props}>
			<primitive object={fbx} scale={0.1} position={[0, 0.5, 0]} />
			<meshStandardMaterial map={material} />
		</mesh>
	);
}

function Box(props) {
	const ref = useRef();
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	const [box, stone] = useLoader(TextureLoader, ['box.jpeg', 'Jackolantern.png']);

	return (
		<mesh
			{...props}
			ref={ref}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial map={box} />
		</mesh>
	);
}

function Torus(props) {
	const torus = useRef();
	const [box, stone] = useLoader(TextureLoader, ['box.jpeg', 'fon.jpeg']);
	const [hovered, hover] = useState(false);
	const [clicked, click] = useState(false);
	useFrame((state, delta) => {
		torus.current.rotation.y += 0.01;
		//ref.current.rotation.x += delta;
	});
	return (
		<mesh
			{...props}
			ref={torus}
			scale={clicked ? 1.5 : 1}
			onClick={(event) => click(!clicked)}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
		>
			<torusGeometry args={[1, 0.3, 20, 50]} />
			<meshStandardMaterial map={box} />
		</mesh>
	);
}

function App() {
	return (
		<div className='App'>
			<Canvas>
				<Physics>
					<Suspense fallback={<Loader />}>
						<ambientLight intensity={0.3} />
						<directionalLight position={[0, 0, 5]} color='green' />
						<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
						<pointLight position={[-10, -10, -10]} />
						<CompoundBody position={[1.5, 5, 0.5]} rotation={[1.25, 0, 0]} />
						<Plane />
						<OrbitControls />
						<Environment preset='sunset' background />
					</Suspense>
				</Physics>
			</Canvas>
		</div>
	);
}

export default App;
