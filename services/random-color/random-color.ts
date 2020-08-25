export const createRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .toString()}`;

// REF: https://stackoverflow.com/a/22692743
export const createRandomGreyHexColor = () => {
  const value = (Math.random() * 0xff) | 0;
  const grayscale = (value << 16) | (value << 8) | value;
  const color = `#${grayscale.toString(16)}`;
  return color;
};
