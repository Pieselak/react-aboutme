interface Props {
  buttons?: {
    [key: string]: { Icon: string; Label: string; Link: string };
  };
}

const Profile_Buttons = ({ buttons }: Props) => {
  if (!buttons) return null;
  if (Object.keys(buttons).length === 0) return null;

  return (
    <div className="Profile_Buttons">
      {Object.keys(buttons).map((key) => (
        <a href={buttons[key].Link}>
          <i className={buttons[key].Icon}></i> {buttons[key].Label}
        </a>
      ))}
    </div>
  );
};

export default Profile_Buttons;
