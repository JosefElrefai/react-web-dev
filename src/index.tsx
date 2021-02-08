import ReactDOM from 'react-dom';
import { Provider as UrqlProvider , createClient, fetchExchange, CombinedError } from 'urql';
import { retryExchange } from '@urql/exchange-retry';
import { createStore, applyMiddleware } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import { reducers } from './reducers'
import './index.scss';

// interface RetryExchangeOptions {
//     initialDelayMs?: number;
//     maxDelayMs?: number;
//     randomDelay?: boolean;
//     maxNumberAttempts?: number;
//     /** Conditionally determine whether an error should be retried */
//     retryIf?: (error: CombinedError, operation: Operation) => boolean;
// }

const retryOptions = {
    initialDelayMs: 100,
    maxDelayMs: 500,
    maxNumberAttempts: 4,
    retryIf: (error: CombinedError) => !!error.graphQLErrors.length 
}

const client = createClient({
    url: 'https://polar-stream-48200.herokuapp.com/https://balloons.thetc.se/graphql',
    exchanges: [
        retryExchange(retryOptions),
        fetchExchange
    ]
});

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(

    <ReduxProvider store={store} >
        <UrqlProvider value={client} >
            <App /> 
        </UrqlProvider>
    </ReduxProvider>

, document.getElementById('root'));