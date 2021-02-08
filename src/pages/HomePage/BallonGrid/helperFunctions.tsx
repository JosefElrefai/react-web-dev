interface OldValuesRef {
        current: {
            sort?: string;
            filter: {
                color?: string;
                variant?: string;
            }
        }
} 

//I know this is really really bad and needs to be fixed
//i am disapointed in myself hehe, but for now it works
export const mapUrl = (queryStr: string, oldValuesRef: OldValuesRef) => {

    const urlSearchParams = new URLSearchParams(queryStr);
    let sameAsPrevValues = true;
    const searchParams: any = {};
    
    urlSearchParams.forEach((val, i) => {
        if(i === 'sort'){
            if(!oldValuesRef.current.sort) sameAsPrevValues = false;
            else if (oldValuesRef.current.sort !== val) sameAsPrevValues = false;
            
            searchParams[i] = val;
        } else if(i === 'color' || i === 'variant'){
            if(i === 'color'){
                if(!oldValuesRef.current.filter) sameAsPrevValues = false;
                else if (oldValuesRef.current.filter.color !== val) sameAsPrevValues = false;
            } else if(i === 'variant'){
                if(!oldValuesRef.current.filter) sameAsPrevValues = false;
                else if (oldValuesRef.current.filter.variant !== val) sameAsPrevValues = false;
            }
            !searchParams.filter && (searchParams.filter = {});
            searchParams.filter[i] = val;
        }
    });
    return [searchParams, sameAsPrevValues];
}

