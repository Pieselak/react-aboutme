interface Props {
  avatar: string;
  username: string;
  firstname?: string;
  nationality?: string;
  age?: string;
}

const Profile_User = ({
  avatar,
  username,
  firstname,
  nationality,
  age,
}: Props) => {
  return (
    <div className="Profile_User">
      <img src={avatar} alt="avatar" />
      <div className="Profile_Name">
        <h1>
          <i className="bx bx-code-block" /> {username ? username : "Unknown"}
        </h1>
        <div className="Profile_Info">
          {firstname && (
            <p>
              <i className="bx bx-user" /> {firstname}
            </p>
          )}
          {age && (
            <p>
              <i className="bx bx-calendar" /> {age} years old
            </p>
          )}
          {nationality && (
            <p>
              <i className="bx bx-home" /> Citizen of {nationality}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile_User;
