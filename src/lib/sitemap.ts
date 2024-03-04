interface ISiteMap {
  [key: string]: {
    title: string;
    description: string;
    path: string;
  },
}

const SiteMap: ISiteMap = {
  home: {
    title: 'Home',
    description: 'Welcome to the home page',
    path: '/',
  },
  about: {
    title: 'About',
    description: 'Welcome to the about page',
    path: '/about',
  },
  contact: {
    title: 'Contact',
    description: 'Welcome to the contact page',
    path: '/contact',
  },
  blog: {
    title: 'Blog',
    description: 'Welcome to the blog page',
    path: '/blog',
  },
};

export default SiteMap;
