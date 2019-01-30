import React from "react";
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';

const IconPicker = () => {
	const icons = [
		'fab fa-accessible-icon',
		'fas fa-ambulance',
		'fas fa-bicycle',
		'fas fa-bus',
		'fas fa-car',
		'fas fa-fighter-jet',
		'fas fa-motorcycle',
		'fas fa-paper-plane',
		'far fa-paper-plane',
		'fas fa-plane',
		'fas fa-rocket',
		'fas fa-ship',
		'fas fa-shopping-cart',
		'fas fa-space-shuttle',
		'fas fa-subway',
		'fas fa-taxi',
		'fas fa-train',
		'fas fa-truck',
		'fas fa-wheelchair',
  ];
  
	return (
		<FontIconPicker
			icons={icons}
			value='fas fa-truck'
			onChange={(val) => console.log(val)}
		/>
	);
};
export default IconPicker;