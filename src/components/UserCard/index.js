const UserCard = ({ user }) => {
  return (
    <div class="card text-center">
      <img
        src={user.profileImageUrl}
        class="card-img-top w-25"
        alt={user.name}
      />
      <div class="card-body">
        <h5 class="card-title">{user.name}</h5>
        <p class="card-text">{user.bio}</p>
        <a href={user.githubUrl} class="btn btn-primary">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default UserCard;
