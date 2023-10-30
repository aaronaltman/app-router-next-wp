import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export async function fetchPostData(postId: string) {
  const client = new ApolloClient({
    uri: "https://productionsaas.wpenginepowered.com/graphql",
    cache: new InMemoryCache(),
  });

  const query = gql`
    query GetFirstSixPosts {
        posts(first: 6) {
          nodes {
            author {
              node {
                id
              }
            }
            categories {
              edges {
                node {
                  id
                }
              }
            }
            content
            date
            featuredImage {
              node {
                uri
              }
            }
            title
            excerpt
          }
        }
      }
    `;

  const { data } = await client.query({
  query,
  variables: { id: postId },
});

  return data;
}
