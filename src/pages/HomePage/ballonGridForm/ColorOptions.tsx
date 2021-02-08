import { Fragment } from 'react';
import { Color} from '../../../interfaces';

const ColorOptions = (): JSX.Element => {
    return (
        <Fragment>
            <option value='' >Filter Color</option>
            <option value={Color.RED} >Red</option>
            <option value={Color.PINK} >Pink</option>
            <option value={Color.GREEN} >Green</option>
            <option value={Color.BLUE} >Blue</option>
            <option value={Color.YELLOW} >Yellow</option>
            <option value={Color.PURPLE} >Purple</option>
            <option value={Color.WHITE} >White</option>
            <option value={Color.ORANGE} >Orange</option>
            <option value={Color.BLACK} >Black</option>
        </Fragment>
    );
}

export default ColorOptions;