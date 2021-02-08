import { FormValues } from '../../../interfaces';

const calcUrlQuery = (formValues: FormValues) => {
    let queryStr = '?';
    let andSign = ''; //sets after first loop

    for (const [key, value] of Object.entries(formValues)) {
        if(value === '') continue;
        queryStr += `${andSign}${key}=${value}`;
        andSign = '&';
    }

    return queryStr;
}
export default calcUrlQuery;