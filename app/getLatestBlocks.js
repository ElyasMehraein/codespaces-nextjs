import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const getLatestBlocks = async () => {
  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
    cache: new InMemoryCache(),
  });

  const query = gql`
    query {
      blocks(first: 10, orderBy: number, orderDirection: desc) {
        number
        timestamp
       
      }
    }
  `;

  try {
    const { data } = await client.query({ query });
    return data.blocks;
  } catch (error) {
    console.error('Error fetching latest Ethereum blocks:', error);
    return [];
  }
};
