import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import ContactMe from '../../components/organisms/ContactMe';
import { CONTACT_PAGE } from '../../utils/constants';

const ContactMePage = () => {
    return (
        <CommonTemplate
            content={<ContactMe />}
            heading={CONTACT_PAGE.heading}
            subHeading={CONTACT_PAGE.subHeading}
            id="contact"
        />
    );
};

export default ContactMePage;
