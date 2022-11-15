import React from 'react';

export const MenuColors = ({
	handleTableColorChange,
	handleCompColorChange,
	handleTextureChange,
}) => {
	return (
		<nav>
			<span>Computer colors</span>
			<ul>
				<li>
					<a href='/brown' onClick={(event) => handleCompColorChange(event, 'brown')}>
						Brown
					</a>
				</li>
				<li>
					<a href='/perple' onClick={(event) => handleCompColorChange(event, 'perple')}>
						Perple
					</a>
				</li>
				<li>
					<a href='/green' onClick={(event) => handleCompColorChange(event, 'green')}>
						Green
					</a>
				</li>
			</ul>

			<span>Table colors</span>
			<ul>
				<li>
					<a href='/red' onClick={(event) => handleTableColorChange(event, 'crimson')}>
						Red
					</a>
				</li>
				<li>
					<a href='/green' onClick={(event) => handleTableColorChange(event, 'teal')}>
						Green
					</a>
				</li>
				<li>
					<a href='/blue' onClick={(event) => handleTableColorChange(event, 'steelblue')}>
						Blue
					</a>
				</li>
			</ul>
			<span>Texture</span>
			<ul>
				<li>
					<a href='/smooth' onClick={(event) => handleTextureChange(event, 'smooth')}>
						smooth
					</a>
				</li>
				<li>
					<a href='/aged' onClick={(event) => handleTextureChange(event, 'rough')}>
						rough
					</a>
				</li>
				<li>
					<a href='/beatup' onClick={(event) => handleTextureChange(event, 'beatup')}>
						beatup
					</a>
				</li>
			</ul>
		</nav>
	);
};
