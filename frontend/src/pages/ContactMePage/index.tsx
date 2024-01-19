import React from 'react';
import CommonTemplate from '../../components/templates/CommonTemplate';
import ContactMe from '../../components/organisms/ContactMe';

const ContactMePage = () => {
  
    return (
        <CommonTemplate
            content={<ContactMe />}
            heading="Contact Me"
            subHeading="You can also connect wth me"
            id="contact"
        />
    );
};

export default ContactMePage;
