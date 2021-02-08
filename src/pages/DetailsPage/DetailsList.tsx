import { StrictBallon } from "../../interfaces";

interface Props {
    ballon: StrictBallon
}

const DetailsList = (props: Props): JSX.Element => {

    const { name, color, price, variant, availableSince, description } = props.ballon;

    return (
        <ul>
            <li><strong>Name:</strong> {name}</li>
            <li><strong>Color:</strong> {color}</li>
            <li><strong>Variant:</strong> {variant}</li>
            <li><strong>AvailableSince:</strong> {availableSince.substring(0,10)}</li>
            {description !== '' && <li><strong>Description:</strong> {description}</li>}
            <li><strong>Price:</strong> {price} kr</li>
        </ul>
    );
}
export default DetailsList;