
import '../styles/Categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='list-categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='categories-select'
			>
				<option value=''>---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button className='refresh' onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories;