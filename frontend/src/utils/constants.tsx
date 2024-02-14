import code from '../../public/assets/icons/code.svg';
import brush from '../../public/assets/icons/brush.svg';
import tab from '../../public/assets/icons/tab.svg';
import react from '../../public/assets/icons/react.svg';
import html from '../../public/assets/icons/html.svg';
import css from '../../public/assets/icons/css.svg';
import storybook from '../../public/assets/icons/storybook.svg';
import mui from '../../public/assets/icons/mui.svg';
import java from '../../public/assets/icons/java.svg';
import spring from '../../public/assets/icons/spring.svg';
import postman from '../../public/assets/icons/postman.svg';
import mysql from '../../public/assets/icons/mysql.svg';
import graphql from '../../public/assets/icons/graphql.svg';
import jest from '../../public/assets/icons/jest.svg';
import cypress from '../../public/assets/icons/cypress.svg';
import git from '../../public/assets/icons/git.svg';
import github from '../../public/assets/icons/github.svg';
import typescript from '../../public/assets/icons/typescript.svg';
import javascript from '../../public/assets/icons/javascript.svg';
import seeder from '../../public/assets/icons/seeder.svg';
import pocketpay from '../../public/assets/icons/pocketpay.svg';
import contiq from '../../public/assets/icons/contiq.svg';
import skill from '../../public/assets/icons/skill.svg';
import project from '../../public/assets/icons/project.svg';
import commitment from '../../public/assets/icons/loyalty.svg';
import contact from '../../public/assets/icons/contact.svg';
import about from '../../public/assets/icons/about.svg';
import discord from '../../public/assets/icons/discord.svg';
import linkedIn from '../../public/assets/icons/linkedin.svg';
import Icon from '../components/atoms/Icon';
import React from 'react';

export const ACTIONS = [
    {
        icon: <Icon src={github} sx={{ width: 30, height: 30 }} />,
        name: 'Github',
        link: 'https://github.com/Jinankhan'
    },
    {
        icon: <Icon src={linkedIn} sx={{ width: 30, height: 30 }} />,
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jinan-khan-008323253'
    },
    {
        icon: <Icon src={discord} sx={{ width: 30, height: 30 }} />,
        name: 'Discord',
        link: 'https://discord.com'
    }
];
export const ROLE_LIST = [
    { color: '#2ecc71', role: 'Front-end' }, // Orange
    { color: '#3498db', role: 'Back-end' }, // Blue
    { color: '#8e44ad', role: 'Full-stack' } // Purple
];

export const NAVBAR_ELEMENTS = [
    {
        id: 1,
        name: 'About',
        path: 'about',
        icon: about
    },
    {
        id: 3,
        name: 'Projects',
        path: 'projects',
        icon: project
    },
    {
        id: 2,
        name: 'Skills',
        path: 'skills',
        icon: skill
    },

    {
        id: 4,
        name: 'Our Commitment',
        path: 'commitment',
        icon: commitment
    },
    {
        id: 4,
        name: 'Contact',
        path: 'contact',
        icon: contact
    }
];

export const SKILL_ELEMENTS = [
    {
        id: 1,
        icon: brush,
        title: 'Design + Development',
        description:
            'Creating seamless and visually appealing websites with a focus on user experience.'
    },
    {
        id: 2,
        icon: code,
        title: 'Latest Technology',
        description:
            'Staying updated with the latest technologies to implement cutting-edge solutions.'
    },
    {
        id: 3,
        icon: tab,
        title: 'Always responsive and ahead of the curve',
        description:
            'Ensuring that websites are responsive and keeping up with industry trends.'
    }
];

export const FRONTEND_SKILLS = [
    {
        id: 1,
        skill: 'REACT',
        icon: react
    },
    {
        id: 5,
        skill: 'TYPESCRIPT',
        icon: typescript
    },
    {
        id: 5,
        skill: 'JAVSCRIPT',
        icon: javascript
    },
    {
        id: 2,
        skill: 'HTML',
        icon: html
    },
    {
        id: 3,
        skill: 'CSS',
        icon: css
    },
    {
        id: 4,
        skill: 'STORYBOOK',
        icon: storybook
    },

    {
        id: 5,
        skill: 'MUI',
        icon: mui
    }
];
export const BACKEND_SKILLS = [
    {
        id: 1,
        skill: 'JAVA',
        icon: java
    },
    {
        id: 2,
        skill: 'SPRINGBOOT',
        icon: spring
    },
    {
        id: 3,
        skill: 'POSTMAN',
        icon: postman
    },
    {
        id: 4,
        skill: 'MYSQL',
        icon: mysql
    },
    {
        id: 5,
        skill: 'GRAPHQL',
        icon: graphql
    }
];

export const TESTING_SKILLS = [
    {
        id: 1,
        skill: 'JEST',
        icon: jest
    },
    {
        id: 2,
        skill: 'CYPRESS',
        icon: cypress
    }
];

export const VERSIONING_SKILLS = [
    {
        id: 1,
        skill: 'GIT',
        icon: git
    },
    {
        id: 2,
        skill: 'GITHUB',
        icon: github
    }
];

export const PROJECT_LIST = [
    {
        id: 1,
        background: 'linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
        icon: pocketpay,
        description:
            'PocketPay is a comprehensive Fintech application that provides innovative solutions for secure transactions, financial management, and digital banking. It features a user-friendly interface, real-time updates, and advanced security protocols.',
        title: 'PocketPay',
        about: 'Full stack application providing Fintech solutions'
    },
    {
        id: 2,
        icon: contiq,
        description:
            'Contiq is a versatile full-stack application designed for efficient handling and sharing of PDF files. It streamlines the document management process, offering features like seamless uploading, easy accessibility, and collaborative functionalities.',
        title: 'Contiq',
        background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
        about: 'Full stack application for uploading pdf files'
    },
    {
        id: 3,
        icon: seeder,
        description:
            'Growth Capital is a robust full-stack Fintech application focused on providing comprehensive financial solutions. With features like investment management, portfolio tracking, and real-time market insights.',
        title: 'Growth Capital',
        background: 'linear-gradient(135deg, #FFFEFF 0%, #D7FFFE 100%)',
        about: 'Full stack application providing Fintech solutions'
    }
];

export const CONTACT_ME_FIELDS = [
    {
        id: 1,
        name: 'name',
        placeholder: 'Provide your name'
    },
    {
        id: 1,
        name: 'email',
        placeholder: 'Provide your email'
    },
    {
        id: 1,
        name: 'message',
        placeholder: 'Message me something......'
    }
];

export const FORM_ERRORS = {
    nameError: 'name length should be more than 2',
    emailError: 'provide a valid email',
    messageEror: 'message should not exceed 20 characters'
};

export const CONTACT_PAGE = {
    heading: 'Contact Me',
    subHeading: 'You can also connect with me'
};

export const PROJECT_PAGE = {
    heading: 'Projects',
    subHeading: 'Have a look on some of the projects i worked on'
};
export const SKILL_PAGE = {
    heading: 'Skills',
    subHeading: 'I like to build and craft scalable products'
};

export const SUMMARY_PAGE = {
    heading: 'Responsibility',
    subHeading: 'I make sure your website is running always'
};
export const CONTACT_ME = {
    message: 'Launch Message 🚀',
    formTitle: 'Fill the form carefully!'
};

export const EMOTICON_STATE = ['😊', '😞'];

export const ABOUT_SECTION = {
    title: 'Hi ! I`M Jinan,',
    role: '',
    summary:
        'Passionate about crafting impactful digital experiences with a blend of design finesse and clean code.'
};

export const EMAIL_API = 'https://api.emailjs.com/api/v1.0/email/send';
export const SERVICE_ID = 'service_oopivwh';
export const TEMPLATE_ID = 'template_ezk66wc';
export const USER_ID = 'iA_X6-KXrRw3EEien';
export const RECIPIENT_EMAIL = 'malicecoma@gmail.com';
