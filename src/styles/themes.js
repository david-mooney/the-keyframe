const colors = {
  alabaster: '#FDFDFD',
  gumbo: '#7AA4AA',
  tussock: '#C59A3A',
  paarl: '#AD482E',
  bastille: '#26202D',
};

export default {
  light: {
    primary: colors.paarl,
    background: colors.alabaster,
    text: colors.bastille,
    lightest: colors.alabaster,
    focus: colors.gumbo,
  },
  dark: {
    primary: colors.tussock,
    background: colors.bastille,
    text: colors.alabaster,
    lightest: colors.alabaster,
    focus: colors.gumbo,
  },
};
