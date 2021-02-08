import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from 'urql';
import { connect } from 'react-redux';
import styled from '@emotion/styled';


import { Store } from '../../reducers';
import { addToCart, AddToCartAction } from '../../actions';
import Modal from '../../components/Modal';
import { BallonQueryResp, CartObject } from '../../interfaces';
import gqlQuery from './gqlQuery';
import './detailsPage.scss';
import { mainImgBaseUrl } from '../../config';
import DetailsList from './DetailsList';

interface Props{
    addToCart: (obj: CartObject) => AddToCartAction;
    cart: CartObject[];
}

const DetailsPage: React.FC<Props> = (props) => {
    
    const [quantity, setQuantity] = useState(0);
    const location = useLocation();
    const id = location.search.substr(1);

    const [result] = useQuery<BallonQueryResp, {id: string}>({
        query: gqlQuery,
        variables: {
            id: id
        }
    });
    const { data, fetching} = result;
    

    const incQuantity = (): void => {
        setQuantity(quantity + 1);
    };
    
    const decQuantity = (): void => {
        if(quantity === 0) return;
        setQuantity(quantity - 1);
    };

    if(data && !fetching) {
        const { imageUrl, name, price } = data.balloon;
        const cartObj: CartObject = {id, quantity, name, price, imgUrl: imageUrl };
        return (
            <Modal returnTo="/home" >
            {(leaveModal) => <section id="ballon-detail" >
                    <DetailImg imgUrl={imageUrl} />
                    <figcaption className="details" >
                        <DetailsList ballon={data.balloon} />
                        <div className="add-to-cart">
                            <button className="small-button" onClick={decQuantity} >−</button>
                            {quantity}
                            <button className="small-button" onClick={incQuantity} >+</button>
                            <button className="main-button" onClick={() => {props.addToCart(cartObj); leaveModal()}}>
                                Add to cart
                            </button>
                        </div>
                    </figcaption>
                </section>}
            </Modal>
        );
    }
    return null;
}

const DetailImg = styled.figure<{imgUrl: string}>`
    height: 100%;
    background: url('${props => mainImgBaseUrl + props.imgUrl}') center center / cover;
`;

const mapStateToProps = (state: Store) => {
    return { cart: state.cart };
}

export default  connect(mapStateToProps, { addToCart })(DetailsPage);