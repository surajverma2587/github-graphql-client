import { gql, useQuery } from "@apollo/client";

import Followers from "./components/Followers";
import UserCard from "./components/UserCard";

import "./App.css";

const QUERY = gql`
  query DashboardQuery {
    followers(username: "leefarnell") {
      username
      profileImageUrl
      githubUrl
    }
    user(username: "leefarnell") {
      username
      bio
      name
      githubUrl
      profileImageUrl
      followers
      following
      company
      email
      twitterUsername
      publicGists
      publicRepos
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) {
    return (
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
    );
  }

  return (
    <div>
      <UserCard user={data.user} />
      <Followers followers={data.followers} />
    </div>
  );
};

export default App;
