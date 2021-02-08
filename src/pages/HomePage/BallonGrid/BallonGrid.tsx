import { useQuery } from 'urql';
import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import { Ballon, BallonsQueryResp, BallonsQueryVariables, SortInput } from '../../../interfaces';
import renderGridContent from './renderGridContent';
import { mapUrl } from './helperFunctions';
import gqlQuery from './gqlQuery';


const BallonGrid: React.FC = ()  => {

    const [ballonsList, setBallonsList] = useState<Ballon[]>([]);
    const queryVariablesRef = useRef<BallonsQueryVariables>({
        sort: SortInput.ID,
        filter: {}
    });
    const location = useLocation();

    const [result, reExcQuery] = useQuery<BallonsQueryResp, BallonsQueryVariables>({
        query: gqlQuery,
        variables: queryVariablesRef.current
    });
    const { data, fetching, error } = result;


    useEffect(() => {
        if(!data || fetching || error) return;
        const list = data.balloons.edges.map(edge => edge.node);
        setBallonsList(list);

    }, [fetching]); //will run every time a fetch is done (and unfortunatley when its started)
    

    //updates query variables when url changes
    const { search }  = location;
    useEffect(() => {
        if(location.pathname !== '/home') return;

        const [searchParams, sameAsPrevValues] = mapUrl(search, queryVariablesRef);
        if(sameAsPrevValues) return;
        queryVariablesRef.current = searchParams;
        reExcQuery();

    }, [search]);
    

    const onPrevClick = () => { //data exist because they are only rendered if hasPrevPage exist
        const { startCursor } = data!.balloons.pageInfo;
        queryVariablesRef.current.after = undefined;
        queryVariablesRef.current.before = startCursor; 
        reExcQuery();
    };
    
    const onNextClick = () => {
        const { endCursor } = data!.balloons.pageInfo;
        queryVariablesRef.current.before = undefined;
        queryVariablesRef.current.after = endCursor;
        reExcQuery();
    }

    if(error) return <p>oops error: {error.message}</p>;
    
    if(data || fetching){
            const showPrev = data && data.balloons.pageInfo.hasPreviousPage;
            const showNext = data && data.balloons.pageInfo.hasNextPage;
        return (
            <section id="view-cards-section" >
                <div id="ballon-grid">
                    {renderGridContent(fetching, ballonsList)} 
                </div>
                <div className="page-buttons">
                    {(showPrev && !fetching) && (<button onClick={onPrevClick} >◀ prev</button>)}
                    {(showNext && !fetching) && (<button onClick={onNextClick} >next ▶</button>)}
                </div>
            </section>
        );
    }
    return null;
}

export default BallonGrid;