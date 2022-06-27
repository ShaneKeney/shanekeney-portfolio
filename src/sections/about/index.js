import React from 'react'
import Particles from 'react-particles-js';
import Progress from 'components/progress'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import ThemeContext from '../../context'
import './styles.scss'

class Hero extends React.Component {

    static contextType = ThemeContext

    render() {
        return (
            <section id={`${this.props.id}`} className="about" style={{height: this.context.height}}>
                {this.particles()}
                <Row>
                    <Col md={6} className="content">
                        <div className="content-text">
                            <div className="line-text">
                                <h4>About Me</h4>
                            </div>
                            <h3>I'm a former Technical Lead specializing in the MERN stack</h3>
                            <div className="separator" />
                            <p>{`I'm the sole creator of the Spikeball Mobile App using with React Native & Expo built from scratch from the ground up.  I'm a Full Stack Developer who has experience in React for the FE, Node / Express for the BE (API) and MongoDB for the database solution.  These days, I'm most interested in using and building technology that may be used to enable others to do what inspires them.`}</p>
                            <div className="social social_icons">
                                <FontAwesomeIcon icon={faGithub} className="social_icon" onClick={() => window.open('https://github.com/ShaneKeney')}/>
                                <FontAwesomeIcon icon={faInstagram} className="social_icon" onClick={() => window.open('https://www.instagram.com/skeney8/')} />
                                <FontAwesomeIcon icon={faLinkedin} className="social_icon" onClick={() => window.open('https://www.linkedin.com/in/shane-keney/')} />
                            </div>
                        </div>
                    </Col>
                    <Col md={6} className="skills">
                            <div className="line-text">
                                <h4>My Skills</h4>
                            </div>
                            <div className="skills-container">
                                <Progress name="Javascript / Typescript" value={80} delay={1100} />
                                <Progress name="Node / Express" value={90} delay={1100} />
                                <Progress name={`React Native & Expo`} value={90} delay={1100} />
                                <Progress name="React" value={80} delay={1100} />
                                <Progress name="Amazon Web Services" value={30} delay={1100} />
                                <Progress name={`MongoDB & MongoAtlas`} value={70} delay={1100} />
                                <Progress name="Jest" value={50} delay={1100} />
                                <Progress name="Apollo GraphQL" value={60} delay={1100} />
                            </div>
                    </Col>
                </Row>
            </section>
        )
    }

    particles() {
        return (
            <Particles
                className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                                "enable": false,
                                "value_area": 5000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": .5
                        },
                        "size": {
                            "value": 1
                        },
                    },
                    "retina_detect": true
            }}/>
        )
    }

}

export default Hero