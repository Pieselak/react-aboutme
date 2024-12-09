interface Props {
  links?: {
    [key: string]: { Icon: string; Link: string };
  };
}

const Profile_Socials = ({ links }: Props) => {
  return (
    <div className="Profile_Socials">
      {links &&
        Object.keys(links).map((key) => (
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
