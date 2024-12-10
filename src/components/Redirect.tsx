interface Props {
  link?: string;
  links?: {
    [key: string]: {
      Icon: string;
      Link: string;
    };
  };
  buttons?: {
    [key: string]: {
      Icon: string;
      Label: string;
      Link: string;
    };
  };
}

const RedirectFromParam = ({ link, links, buttons }: Props) => {
  if (link) {
    let Redirects: { [key: string]: string } = {};

    if (buttons) {
      Object.keys(buttons).forEach((key) => {
        Redirects[key.toLowerCase()] = buttons[key].Link;
      });
    }
    if (links) {
      Object.keys(links).forEach((key) => {
        Redirects[key.toLowerCase()] = links[key].Link;
      });
    }

    if (Redirects[link.toLowerCase()]) {
      window.location.href = Redirects[link.toLowerCase()];
    } else {
      window.location.href = "/";
    }
  }

  return null;
};
export default RedirectFromParam;
