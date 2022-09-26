import "@testing-library/jest-dom"
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App, { GET_TOPICS } from "./App";

const mocks = [
  {
    request: {
      query: GET_TOPICS,
      variables: {
        name: 'react'
      }
    },
    result: {"data":{"topic":{"name":"react","relatedTopics":[{"name":"angular","relatedTopics":[{"name":"react","stargazers":{"totalCount":77726,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"vue","stargazers":{"totalCount":50657,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"javascript","stargazers":{"totalCount":132694,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"aws-lambda","stargazers":{"totalCount":95,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"typescript","stargazers":{"totalCount":29810,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"serverless","stargazers":{"totalCount":11206,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"nextjs","relatedTopics":[{"name":"javascript","stargazers":{"totalCount":132694,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"hacktoberfest","stargazers":{"totalCount":15814,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"optimization","stargazers":{"totalCount":186,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"scala","stargazers":{"totalCount":8106,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"redux","stargazers":{"totalCount":12942,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"react-native","relatedTopics":[{"name":"reactjs","stargazers":{"totalCount":1166,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"hacktoberfest","stargazers":{"totalCount":15814,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"ios","stargazers":{"totalCount":31175,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"express","stargazers":{"totalCount":16949,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"javascript","stargazers":{"totalCount":132694,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"android","stargazers":{"totalCount":104585,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"vue","relatedTopics":[{"name":"angular","stargazers":{"totalCount":45658,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"react","stargazers":{"totalCount":77726,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"blockchain","stargazers":{"totalCount":6050,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"ethereum","stargazers":{"totalCount":22184,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"machine-learning","stargazers":{"totalCount":58785,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"frontend","stargazers":{"totalCount":35600,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"library","stargazers":{"totalCount":12803,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"nodejs","relatedTopics":[{"name":"tutorial","stargazers":{"totalCount":191,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"react","stargazers":{"totalCount":77726,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"rest","stargazers":{"totalCount":106,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"deployment","stargazers":{"totalCount":13448,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"typescript","relatedTopics":[{"name":"es6","stargazers":{"totalCount":17970,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"javascript","stargazers":{"totalCount":132694,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"language","stargazers":{"totalCount":2232,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"nodejs","stargazers":{"totalCount":59696,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"golang","stargazers":{"totalCount":1543,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"deep-learning","stargazers":{"totalCount":53661,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"arduino","stargazers":{"totalCount":46605,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"tensorflow","stargazers":{"totalCount":29650,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"phoenix","stargazers":{"totalCount":41,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"docker","relatedTopics":[{"name":"django","stargazers":{"totalCount":43397,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"spring-boot","stargazers":{"totalCount":23430,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"angular","stargazers":{"totalCount":45658,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"electron","stargazers":{"totalCount":18781,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"rust","relatedTopics":[{"name":"c-plus-plus","stargazers":{"totalCount":321,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"language","stargazers":{"totalCount":2232,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"nodejs","stargazers":{"totalCount":59696,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"cli","stargazers":{"totalCount":33132,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"computer-vision","stargazers":{"totalCount":1730,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"swift","stargazers":{"totalCount":23498,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"},{"name":"language","relatedTopics":[{"name":"tensorflow","stargazers":{"totalCount":29650,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"webapp","stargazers":{"totalCount":14617,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"azure","stargazers":{"totalCount":40282,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"api","stargazers":{"totalCount":59583,"__typename":"StargazerConnection"},"__typename":"Topic"},{"name":"computer-vision","stargazers":{"totalCount":1730,"__typename":"StargazerConnection"},"__typename":"Topic"}],"__typename":"Topic"}],"__typename":"Topic"}}}
  }
];

test('renders without error', async () => {
  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );

  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});

it('should render default topics', async () => {
  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );

  expect(await screen.findByText("Loading...")).toBeInTheDocument();
  expect(await screen.findByText("angular")).toBeInTheDocument();
})
