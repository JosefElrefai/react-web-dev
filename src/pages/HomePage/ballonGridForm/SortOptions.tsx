import { Fragment } from 'react';
import { SortInput } from '../../../interfaces';

const SortOptions = (): JSX.Element => {
    return (
        <Fragment>
            <option value="">Sort</option>
            <option value={SortInput.NAME} >Name</option>
            <option value={SortInput.PRICE} >Price</option>
            <option value={SortInput.AVAILABLE_SINCE} >Date</option>
            <option value={SortInput.COLOR} >Color</option>
        </Fragment>
    );
}

export default SortOptions;