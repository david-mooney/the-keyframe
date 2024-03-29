export const HOME_OG_IMAGE_URL =
  'https://og-image.vercel.app/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg';

export const KEYS = {
  ENTER: 'Enter',
  ESCAPE: 'Escape',
  SPACE: ' ',
  TAB: 'Tab',
};

export const FIELDS = {
  preview: [
    'id',
    'title',
    'excerpt',
    'created',
    'slug',
    'coverImage',
    'readTime',
    'tags',
    'featured',
  ],
  post: [
    'id',
    'title',
    'author',
    'content',
    'created',
    'updated',
    'slug',
    'ogImage',
    'coverImage',
    'readTime',
    'tags',
  ],
};

export const LINKS = {
  home: {
    href: '/',
    label: 'Home',
    scrollToTop: false,
  },
  portfolio: {
    href: '/portfolio',
    label: 'Portfolio',
  },
  privacy: {
    href: '/privacy',
    label: 'privacy',
  },
  email: {
    href: 'mailto:thekeyframe@gmail.com',
    label: 'Email',
  },
  github: {
    href: 'https://github.com/david-mooney/the-keyframe',
    label: 'Github',
  },
};
