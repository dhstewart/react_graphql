import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

// Below imports in src/components/Users.js
const CHARACTER_QUERY = gql`
  query {
    fetchCharacters {
      id
      name
    }
  }
`;

function Dashboard() {
  return (
    <Query query={CHARACTER_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching..</div>;
        if (error) return <div>Error</div>;

        return (
          <div>
            {data.fetchCharacters.map((item) => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        );
      }}
    </Query>
  );
}

export default Dashboard;
