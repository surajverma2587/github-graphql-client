import "./FollowerCard.css";

const FollowerCard = ({ follower }) => {
  return (
    <div className="card card--follower">
      <a href={follower.githubUrl}>
        <img
          src={follower.profileImageUrl}
          className="card-img-top"
          alt={follower.username}
        />
      </a>
      <div className="card-body">
        <h3>{follower.username}</h3>
      </div>
    </div>
  );
};

export default FollowerCard;
