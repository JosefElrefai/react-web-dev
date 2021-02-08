import { Fragment, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import './modal.scss';

interface Props {
    returnTo: string;
    children(callback: () => void): JSX.Element;
}

const Modal: React.FC<Props> = (props) => {

    const scrollToTop = (): void => { //bad protorypal method to stop scrolling
        window.scrollTo(0,0);
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollToTop);
        return () => window.removeEventListener('scroll', scrollToTop);
    },[])

    const history = useHistory();
    const leaveModal = (): void => {
        history.push(props.returnTo);
    }

    return ReactDOM.createPortal(
        <Fragment>
            <div className="overlay" onClick={leaveModal} >
                <div className="content" onClick={(e) => e.stopPropagation()} >
                    {props.children( leaveModal )}
                </div>
            </div>
        </Fragment>
    , document.getElementById('portal')!);
}
export default Modal;