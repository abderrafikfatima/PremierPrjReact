
import { useState } from 'react';
import { plantList } from '../data/plantList'
import '../styles/ShoppingList.css';
import Categories from './Categories';
import PlanItem from './PlantItem';

function ShoppingList({cart,updateCart}) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<ul className='plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id}>
							<PlanItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				)}
			</ul>
			
		</div>
	)
}
 

export default ShoppingList;


/* && précède un élément JSX et précise que l'élément ne sera généré que si la condition 
est respectée.*/
/*<span>balise est un conteneur en ligne utilisé pour marquer une partie d'un texte 
ou une partie d'un document.*/