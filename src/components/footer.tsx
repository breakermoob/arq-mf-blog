import "bootstrap/dist/css/bootstrap.css";
import './footer.css';
import {
    BrowserRouter as Router,
} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faInstagram, faLinkedin, faSpeakerDeck, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (<>
        <Router>
            <footer className="bg-dark text-light text-center text-md-left">
                <div className="container">
                    <div className="row pt-4">
                        <div className="col-sm-6 col-md-3 pb-4">
                            <h4 className="mb-4">Services</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/" className="text-light">Web design</a>
                                </li>
                                <li>
                                    <a href="/" className="text-light">Development</a>
                                </li>
                                <li>
                                    <a href="/" className="text-light">Hosting</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 pb-4">
                            <h4 className="mb-4">About</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/" className="text-light">Company</a>
                                </li>
                                <li>
                                    <a href="/" className="text-light">Team</a>
                                </li>
                                <li>
                                    <a href="/" className="text-light">Careers</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 pb-4">
                            <h4 className="mb-4">Web development tools</h4>
                            <ul className="list-unstyled">
                                <li>
                                    <a
                                        href="https://www.phpcrudgenerator.com/tutorials/how-to-create-a-bootstrap-crud-admin-dashboard"
                                        className="text-light">How to create a Bootstrap Admin Dashboard in PHP</a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.phpformbuilder.pro/drag-n-drop-form-builder/index.html"
                                        className="text-light">Drag &amp; drop form builder</a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.tinymce-bootstrap-plugin.com/"
                                        className="text-light">Bootstrap plugin for TinyMce</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center mb-2">
                        <a
                            href="https://github.com/breakermoob"
                            target="_blank"
                            rel="noreferrer"
                            className="d-block px-3">
                            <FontAwesomeIcon icon={faGithub} size="2x" className="arq-mf-icon" />
                        </a>
                        <a
                            href="https://www.instagram.com/leo_argam/"
                            target="_blank"
                            rel="noreferrer"
                            className="d-block px-3">
                            <FontAwesomeIcon icon={faInstagram} size="2x" className="arq-mf-icon" />
                        </a>
                        <i className="d-block px-3">
                            <FontAwesomeIcon icon={faReact} size="5x" style={{ color: "#61dbfb" }} className="arq-mf-icon--center" />
                        </i>
                        <a
                            href="https://www.linkedin.com/in/breakermoob/"
                            target="_blank"
                            rel="noreferrer"
                            className="d-block px-3">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" className="arq-mf-icon" />
                        </a>
                        <a
                            href="https://speakerdeck.com/breakermoob/"
                            target="_blank"
                            rel="noreferrer"
                            className="d-block px-3">
                            <FontAwesomeIcon icon={faSpeakerDeck} size="2x" className="arq-mf-icon" />
                        </a>
                    </div>
                    <p className="text-center text-secondary border-top border-secondary py-4 mb-0">
                        Arquitectura Microfrontends por Leon Arango © 2021
                    </p>
                </div>
            </footer>
        </Router>
    </>)
}

export default Footer;