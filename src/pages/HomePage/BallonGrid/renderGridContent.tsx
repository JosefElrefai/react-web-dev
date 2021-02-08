import { Link } from 'react-router-dom';

import Loader from '../../../components/Loader';
import Card from '../../../components/ItemCard';
import { Ballon } from '../../../interfaces';

const renderGridContent = (fetching: boolean, ballonsList: Ballon[]) => {   
    if(fetching) return (
        <div className="loader-container" >
            <Loader />
        </div>
    );
    if(!ballonsList.length) return (
        <div className="no-ballons-container" >
            <p>Could not find any ballons with the specified properties :(</p>
        </div>
    );

    return ballonsList.map(ballon => {
        const { imageUrl, id, name, price } = ballon;
        const linkTo = `/home/details?${id}`    
        return (
            <Card imgUrl={imageUrl} key={id} > {/*render-child component, must show a picture, renders childs below it */}
                <h5 className="card-title" >{name} </h5>
                <p className="price-tag" >{price} kr</p>
                <Link to={linkTo} >
                    <button className="dark-button" >View Ballon</button>
                </Link>
            </Card>
        );
    });
}

export default renderGridContent;