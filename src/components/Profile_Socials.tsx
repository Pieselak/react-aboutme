interface Props {
  links?: {
    [key: string]: { Icon: string; Link: string };
  };
}

const Profile_Socials = ({ links }: Props) => {
  if (!links) return null;
  if (Object.keys(links).length === 0) return null;

  return (
    <div className="Profile_Socials">
      {Object.keys(links).map((key) => (
        <a key={key} href={links[key].Link}>
          {links[key].Icon && <i className={links[key].Icon}></i>}
          {key}
          <i className="bx bx-link-external"></i>
        </a>
      ))}
    </div>
  );
};

export default Profile_Socials;
