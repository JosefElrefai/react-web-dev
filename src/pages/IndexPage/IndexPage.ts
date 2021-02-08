import { useHistory } from "react-router-dom";

const IndexPage: React.FC = () => {
    const history = useHistory();
    history.location.pathname === '/' && history.push('/home')

    return null;
}
export default IndexPage;