import { useEffect } from "react";
import { useParams } from "react-router-dom";

/* Components */
import Profile_User from "../components/Profile_User";
import Profile_Socials from "../components/Profile_Socials";
import Profile_Buttons from "../components/Profile_Buttons";
import Copyrights from "../components/Copyrights";
import Controls from "../components/Controls";
import RedirectFromParam from "../components/Redirect";

/* Utilities */
import setTitle from "../utilities/setTitle";
import calculateAge from "../utilities/calculateAge";

/* Assets */
import avatar from "../assets/avatar.png";

const ProfilePage = () => {
  const ProfileData = {
    avatar: avatar,
    username: "Pieselak",
    firstname: "Patryk",
    nationality: "Poland",
    birthdate: "2009-05-26", // YYYY-MM-DD
    description: "Upcoming web developer and content creator.",
    buttons: {
      Paypal: {
        Icon: "bx bxl-paypal",
        Label: "Paypal",
        Link: "https://paypal.me/pieselak",
      },
      Patreon: {
        Icon: "bx bxl-patreon",
        Label: "Patreon",
        Link: "https://www.patreon.com/c/Pieselak",
      },
      Tipply: {
        Icon: "bx bx-wallet",
        Label: "Tipply",
        Link: "https://tipply.pl/@pieselak",
      },
      Discord: {
        Icon: "bx bxl-discord",
        Label: "Discord",
        Link: "https://discord.gg/pieselak",
      },
    },
    links: {
      Github: {
        Icon: "bx bxl-github", // BoxIcons class name
        Link: "https://github.com/pieselak",
      },
      Steam: {
        Icon: "bx bxl-steam", // BoxIcons class name
        Link: "https://steamcommunity.com/id/pieselak",
      },
      Instagram: {
        Icon: "bx bxl-instagram", // BoxIcons class name
        Link: "https://www.instagram.com/patryk.znamirowski/",
      },
      Youtube: {
        Icon: "bx bxl-youtube", // BoxIcons class name
        Link: "https://www.youtube.com/@pieselak",
      },
      Tiktok: {
        Icon: "bx bxl-tiktok", // BoxIcons class name
        Link: "https://tiktok.com/@pieselak",
      },
      Twitch: {
        Icon: "bx bxl-twitch", // BoxIcons class name
        Link: "https://twitch.tv/mrpieselak",
      },
    },
  };

  // Change title of page

  useEffect(() => {
    setTitle("Home");
  });

  const { link } = useParams();

  return (
    <>
      {link && (
        <RedirectFromParam
          link={link}
          links={ProfileData.links}
          buttons={ProfileData.buttons}
        />
      )}
      <Controls />

      <div className="Profile_Page">
        <div className="Profile_Header">
          <Profile_User
            avatar={ProfileData.avatar}
            username={ProfileData.username}
            firstname={ProfileData.firstname}
            nationality={ProfileData.nationality}
            age={calculateAge(ProfileData.birthdate).toString()}
          />
          <Profile_Socials links={ProfileData.links} />
        </div>
        {ProfileData.description && (
          <div className="Profile_Description">
            <p>{ProfileData.description}</p>
          </div>
        )}
        <Profile_Buttons buttons={ProfileData.buttons} />
      </div>

      <Copyrights />
    </>
  );
};

export default ProfilePage;
