const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "600px",
  tablet: "960px",
  laptop: "1280px",
  desktop: "1850px",
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`, // sm
  tablet: `(max-width: ${size.tablet})`, // md
  laptop: `(max-width: ${size.laptop})`, // lg
  desktop: `(max-width: ${size.desktop})`, // xl
};

export default device;
