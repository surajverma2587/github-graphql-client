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
      <UserCard
        user={{
          username: "LeeFarnell",
          bio: "31 | Coding Boot Camp Student | Looking to become a full stack developer.\r\n\r\nEmail Me: leefarnell@mac.com",
          name: "Lee Farnell",
          githubUrl: "https://github.com/LeeFarnell",
          profileImageUrl:
            "https://avatars.githubusercontent.com/u/77978817?v=4",
          followers: 17,
          following: 25,
          company: null,
          email: null,
          twitterUsername: "leefarnell",
          publicGists: 1,
          publicRepos: 15,
        }}
      />
      <Followers followers={data.followers} />
    </div>
  );
};

export default App;
