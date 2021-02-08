import BallonGridForm from './ballonGridForm/BallonGridForm';
import BallonGrid from './BallonGrid/BallonGrid';
import './homePage.scss';

const HomePage: React.FC = () => {


    return (
        <div id="home-page">
            <div className="container">
                <BallonGridForm />
                <BallonGrid  /> {/* Uses url to fetch right movies */}
            </div>
        </div>
    );
}

export default HomePage;