import React, { Suspense, useState, useRef, useLayoutEffect } from 'react';
import {
	OrbitControls,
	useGLTF,
	
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { TextureLoader } from 'three';
import { MenuColors } from './components/MenuColors';
import { Scene } from './components/Scene';
import { Plane } from './components/Plane';
import { Loader } from './components/Loader';
import { UserOnBox } from './components/UserOnBox';
import * as THREE from 'three';
import './App.css';



function App() {
	const crimson = new THREE.Color(0xdc143c);
	const teal = new THREE.Color(0x008080);
	const steelblue = new THREE.Color(0x4682b4);
	const brown = new THREE.Color(0xb47846);
	const perple = new THREE.Color(0x7846b4);
	const green = new THREE.Color(0x4bb446);

	const smooth = [
		'./textures/Metal030_1K_Color.jpg',
		'./textures/Metal030_1K_NormalGL.jpg',
		'./textures/Metal030_1K_Roughness.jpg',
		'./textures/Metal030_1K_Metalness.jpg',
	];

	const rough = [
		'./textures/Metal040_1K_Color.jpg',
		'./textures/Metal040_1K_NormalGL.jpg',
		'./textures/Metal040_1K_Roughness.jpg',
		'./textures/Metal040_1K_Metalness.jpg',
	];

	const beatup = [
		'./textures/Metal021_1K_Color.jpg',
		'./textures/Metal021_1K_NormalGL.jpg',
		'./textures/Metal021_1K_Roughness.jpg',
		'./textures/Metal021_1K_Metalness.jpg',
	];

	const [currentTexture, setCurrentTexture] = useState(smooth);
	const [currentColor, setCurrentColor] = useState(teal);
	const [currentCompColor, setCurrentCompColor] = useState(brown);

	const handleTableColorChange = (event, color) => {
		event.preventDefault();
		if (color === 'crimson') {
			setCurrentColor(crimson);
		} else if (color === 'teal') {
			setCurrentColor(teal);
		} else if (color === 'steelblue') {
			setCurrentColor(steelblue);
		}
	};

	const handleCompColorChange = (event, color) => {
		event.preventDefault();
		if (color === 'brown') {
			setCurrentCompColor(brown);
		} else if (color === 'perple') {
			setCurrentCompColor(perple);
		} else if (color === 'green') {
			setCurrentCompColor(green);
		}
	};

	const handleTextureChange = (event, texture) => {
		event.preventDefault();
		if (texture === 'smooth') {
			setCurrentTexture(smooth);
		} else if (texture === 'rough') {
			setCurrentTexture(rough);
		} else if (texture === 'beatup') {
			setCurrentTexture(beatup);
		}
	};

	return (
		<div className='App'>
			<MenuColors
				handleTableColorChange={handleTableColorChange}
				handleCompColorChange={handleCompColorChange}
				handleTextureChange={handleTextureChange}
			/>
			<Canvas>
				<Physics>
					<Suspense fallback={<Loader />}>
						<ambientLight intensity={0.3} />
						<directionalLight position={[0, 0, 5]} color='red' />
						<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
						<pointLight position={[-10, -10, -10]} />
						<UserOnBox position={[1, 5, 0]} rotation={[1.25, 0.25, 1]} />
						<Plane />
						<Scene
							currentTexture={currentTexture}
							currentColor={currentColor}
							currentCompColor={currentCompColor}
						/>
						<OrbitControls />
					</Suspense>
				</Physics>
			</Canvas>
		</div>
	);
}

export default App;
