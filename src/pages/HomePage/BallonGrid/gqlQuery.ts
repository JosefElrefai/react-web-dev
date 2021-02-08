const gqlQuery = `
query($after: ID, $before: ID, $filter: FilterInput, $sort: SortInput){
    balloons(after: $after, before: $before, filter: $filter, sort: $sort) {
        pageInfo{
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
        }
        edges{
            node{
                id
                name
                imageUrl
                price
            }
        }
    }
}
`;
export default gqlQuery;