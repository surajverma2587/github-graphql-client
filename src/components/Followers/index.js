import FollowerCard from "../FollowerCard";

const Followers = ({ followers }) => {
  return (
    <div className="border p-2 m-2">
      <h2 className="text-center p-3">My Followers</h2>
      <div className="d-flex flex-wrap justify-content-between">
        {followers.map((follower) => {
          return <FollowerCard follower={follower} />;
        })}
      </div>
    </div>
  );
};

export default Followers;
