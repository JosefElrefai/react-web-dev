const gqlQuery = `
query($id: String!){
  balloon(id: $id){
    id
    name
    description
    availableSince
    color
    variant
    price
    imageUrl
  }
}
`;
export default gqlQuery;