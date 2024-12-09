interface Props {
  buttons?: {
    [key: string]: { Icon: string; Label: string; Link: string };
  };
}

const Profile_Buttons = ({ buttons }: Props) => {
  return (
    <div className="Profile_Buttons">
      {buttons &&
        Object.keys(buttons).map((key) => (
          <a href={buttons[key].Link}>
            <i className={buttons[key].Icon}></i> {buttons[key].Label}
          </a>
        ))}
    </div>
  );
};

export default Profile_Buttons;
