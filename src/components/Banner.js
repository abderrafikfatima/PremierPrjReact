
import '../styles/Banner.css';
import Recommendation from './Recommand';

function Banner({children}){
    
    return (
    <div className="img-banner">
        {children}
        <Recommendation/>
    </div>
    )
}

export default Banner;

