import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import calcUrlQuery from './calcUrlQuery';
import { FormValues } from '../../../interfaces';
import ColorOptions from './ColorOptions';
import SortOptions from './SortOptions';
import VariantOptions from './VariantOptions';

const BallonGridForm: React.FC = () => {
    const history = useHistory();
    const initalState: FormValues = { color: '', variant: '', sort: '' };
    const [formValues, setFormValues] = useState<FormValues>(initalState);

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        history.push(calcUrlQuery(formValues));
        setFormValues(initalState);
    }

    const handleFormChange = (e: React.ChangeEvent<HTMLSelectElement> ): void => {
        setFormValues( {...formValues, [e.target.name]: e.target.value} );
    }

    return (
        <form onSubmit={handleSubmit} id="ballons-form" >

            <h2 className="lead" >Options:</h2>
            <div className="selects-container" >
                <select name="color" onChange={handleFormChange} value={formValues.color} className="form-comp">
                    <ColorOptions />
                </select>

                <select name="variant" onChange={handleFormChange} value={formValues.variant} className="form-comp" >
                    <VariantOptions />
                </select>

                <select name="sort" onChange={handleFormChange} value={formValues.sort}  className="form-comp" >
                    <SortOptions />
                </select>
                <button className="dark-button" >Search</button>
            </div>

        </form>
    );
}
export default BallonGridForm;