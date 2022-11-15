import { Environment, Stage, useTexture } from '@react-three/drei';
import { Submarine } from '../components/Submarine';
import { Computer } from './Computer';
import { Table } from './Table';

export const Scene = ({ currentColor, currentTexture, currentCompColor, ...props }) => {
	const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture(currentTexture);
	return (
		<Stage intensity={1}>
			<Environment preset='sunset' background />
			<group>
				<mesh>
					<Table
						{...props}
						map={colorMap}
						normalMap={normalMap}
						roughnessMap={roughnessMap}
						metalnessMap={metalnessMap}
						currentColor={currentColor}
						currentTexture={currentTexture}
					/>
					<Computer
						url={'old.glb'}
						currentCompColor={currentCompColor}
						currentColor={currentColor}
					/>
				</mesh>
			</group>
		</Stage>
	);
};
