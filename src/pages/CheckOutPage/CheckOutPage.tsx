import { connect } from 'react-redux';
import styled from '@emotion/styled';
import { Store } from '../../reducers'
import { CartObject } from '../../interfaces';
import { mainImgBaseUrl } from '../../config';
import './checkOutPage.scss';

interface Props {
    cart: CartObject[];
}

const CheckOutPage: React.FC<Props> = ({cart}) => {

    let grandtTotalPrice = 0;    
    return (
        <div id="check-out-page">
            <div className="container">
                {!cart.length && <p>You have no items in cart</p>}
                {!!cart.length && cart.map(ballon => {
                    grandtTotalPrice += ballon.price*ballon.quantity;
                    return (
                        <div key={ballon.id} className="cart-item">
                            <CartItemImg imgUrl={ballon.imgUrl} />
                            <ul className="item-details" >
                                <li><strong>Name:</strong> {ballon.name} </li>
                                <li><strong>Quantity:</strong> {ballon.quantity} </li>
                                <li><strong>Price:</strong> {ballon.price} kr</li>
                                <li><strong>Total:</strong> {ballon.price*ballon.quantity} kr</li>
                            </ul>
                        </div>
                    );
                })}
                <button className="main-button" >Checkout:</button>
                <p className="grand-total" >{grandtTotalPrice} kr</p>
            </div>
        </div>
    );
}

const CartItemImg = styled.figure<{imgUrl: string}>`
    height: 5rem;
    width: 5rem;
    border: 1px solid #000;
    background: url('${props => mainImgBaseUrl + props.imgUrl}') center center / cover;
`;

const mapStateToProps = (state: Store) => {
    return { cart: state.cart };
}

export default connect(mapStateToProps)(CheckOutPage);