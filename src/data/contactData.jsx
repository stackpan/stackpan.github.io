import {
  SiFacebook, SiGithub, SiGmail, SiLinkedin, SiMastodon,
} from '@icons-pack/react-simple-icons';
import React from 'react';

const contacts = [
  {
    url: 'mailto:ivanrizqy.ir@gmail.com',
    label: 'ivanrizqy.ir@gmail.com',
    icon: () => <SiGmail />,
  },
  {
    url: 'https://github.com/stackpan',
    label: 'stackpan',
    icon: () => <SiGithub />,
  },
  {
    url: 'https://www.linkedin.com/in/ivanzkyanto',
    label: 'Ivan Rizkya Susanto',
    icon: () => <SiLinkedin />,
  },
  {
    url: 'https://web.facebook.com/PanEpanJoul',
    label: 'Ivan Rizkyanto',
    icon: () => <SiFacebook />,
  },
  {
    url: 'https://mstdn.id/@stackpan',
    label: '@stackpan',
    rel: 'me',
    icon: () => <SiMastodon />,
  },
];

export default contacts;
