const devices = {
  laptop: '1080px',
  phone: '600px',
};

export const breakpointAbove = {
  laptop: `@media (min-width: ${devices.laptop})`,
  phone: `@media (min-width: ${devices.phone})`,
};

export const breakpointBelow = {
  laptop: `@media (max-width: ${devices.laptop})`,
  phone: `@media (max-width: ${devices.phone})`,
};
