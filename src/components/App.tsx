import { BrowserRouter, Route } from 'react-router-dom';
import CheckOutPage from '../pages/CheckOutPage/CheckOutPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import HomePage from '../pages/HomePage/HomePage';
import IndexPage from '../pages/IndexPage/IndexPage';
import Navbar from './Navbar';

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar />  
            <Route path="/" exact component={IndexPage} />
            <Route path="/home" component={HomePage} />
            <Route path="/home/details" component={DetailsPage} />
            <Route path="/checkout" component={CheckOutPage} />
        </BrowserRouter>
    );
}

export default App;