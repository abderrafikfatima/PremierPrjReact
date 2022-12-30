
import CareScale from "./CareScale";
import '../styles/PlantItem.css';

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlanItem({name,cover,light,water}){

    return (
		<li className='lmj-plant-item' onClick={() => handleClick}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />{name}

			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}



export default PlanItem;