import { Fragment } from 'react';
import { Variant } from '../../../interfaces';

const VariantOptions = (): JSX.Element => {
    return (
        <Fragment>
            <option value="">Filter Variant</option>
            <option value={Variant.NORMAL} >Normal</option>
            <option value={Variant.HEART} >Heart</option>
            <option value={Variant.STAR} >Star</option>
        </Fragment>
    );
}

export default VariantOptions;