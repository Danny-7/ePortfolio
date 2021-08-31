import React from 'react'
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab, fas)

const ContactContainer = () => {
    return (
        <React.Fragment>
            <Container>
                <li className="contact-logo">
                    <a
                        href="https://github.com/Danny-7"
                        title="Find more about my projects !"
                        target="blank"
                    >
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </li>
                <li className="contact-logo">
                    <a
                        href="mailto:daniel.aguiar@outlook.fr"
                        title="Send a mail !"
                        target="blank"
                    >
                        <FontAwesomeIcon icon={['fas', 'envelope']} />
                    </a>
                </li>
                <li className="contact-logo">
                    <a
                        href="https://www.linkedin.com/in/daniel-aguiar7/"
                        title="Contact me on my linkedin !"
                        target="blank"
                    >
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                </li>
            </Container>
        </React.Fragment>
    );
};

export default ContactContainer;
