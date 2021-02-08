import styled from '@emotion/styled';
import { mainImgBaseUrl } from '../config';


// This is a render child component, Its a card that must have a picture and optional onImgClick function

interface Props{
    imgUrl: string;
    className?: string;
}

const ItemCard: React.FC<Props> = (props) => {
    return (
        <Card>
            <Figure imgUrl={props.imgUrl} />
            {props.children}
        </Card>
    );
}
export default ItemCard;

const Card = styled.article`
    padding: .5rem;
    box-shadow: 0px 0px 5px #aaa;
    display: flex;
    flex-direction: column;
    gap: .7rem;
`;

const Figure = styled.figure<{imgUrl: string}>`
    height: 65%;
    background: url('${props => mainImgBaseUrl + props.imgUrl}') center center / cover;
`;