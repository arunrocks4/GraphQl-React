import './App.css';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

export const GET_TOPICS = gql`
  query topic($name: String!) {
    topic(name: $name) {
      name
      relatedTopics(first: 10) {
        name
        relatedTopics(first: 10) {
          name
          stargazers(first: 10) {
            totalCount
          }
        }
      }
      
    }
  }
`;

function App() {

  const {loading, error, data, refetch } = useQuery(GET_TOPICS, { variables: { name: 'react' }});
  const [search, setSearch] = useState('react');
  const [showTopic, setShowTopic] = useState(null);

  if(loading) return (<div>Loading...</div>)
  if(error) return (<div>Error...</div>)

  if(data) {
    return (
      <div className="App">
        <input type={'text'} value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => refetch({
          name: search
        })}>Search</button>
        <div className='topic-wrapper'>
        {
          data.topic.relatedTopics.map((topic, index) => (
            <div key={index}>
              <div className="topic-title" onClick={() => setShowTopic(topic.name)}>{topic.name}</div>
              {showTopic === topic.name && (
                <table style={{marginLeft: '10px'}} border={1}>
                  <tr>
                    <th>Related Topic</th>
                    <th>Stargazer Count</th>
                  </tr>
              
                {topic.relatedTopics.map((relatedTopic, i) => 
                    <tr key={i}>
                      <td>{relatedTopic.name}</td>
                      <td>{relatedTopic.stargazers.totalCount}</td>
                    </tr>
                )}
                </table>
              )}
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}

export default App;
