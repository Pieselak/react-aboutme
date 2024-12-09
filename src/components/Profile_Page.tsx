import Profile_Socials from "./Profile_Socials";

interface Props {
  avatar: string;
  username: string;
  firstname?: string;
  nationality?: string;
  age?: string;
  description?: string;
  sociallinks?: { [key: string]: { Icon: string; Link: string } };
}

const Profile_Header = ({
  avatar,
  username,
  firstname,
  nationality,
  age,
  description,
  sociallinks,
}: Props) => {
  return (
    <div className="Profile_Page">
      <div className="Profile_Header">
        <div className="Profile_User"></div>
        <div className="Profile_Links"></div>
      </div>
      <div className="Profile_Description"></div>
      <div className="Profile_Buttons"></div>

      <div className="Profile_Title">
        <div className="Profile_Main">
          <img className="Profile_Avatar" src={avatar} alt="avatar" />
          <div className="Profile_Name">
            <h1>
              {username ? (
                <>
                  {username}
                  <i className="bx bx-award" />
                </>
              ) : (
                "Unknown"
              )}
            </h1>
            {firstname ? (
              <p>
                {firstname}
                {age && ", " + age + " years old"}
              </p>
            ) : (
              age && <p>{age + " years old"}</p>
            )}
            {nationality && <p>Citizen of {nationality}</p>}
          </div>
        </div>
        <div className="Profile_Socials">
          <Profile_Socials links={sociallinks} />
        </div>
      </div>

      <div className="Profile_Description">
        {/* Check if description is provided otherwise display nothing */}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Profile_Header;
