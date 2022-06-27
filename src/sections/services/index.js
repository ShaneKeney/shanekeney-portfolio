import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import BaffleText from 'components/baffle-text'
import AnimationContainer from 'components/animation-container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faAngular, faAws, faConnectdevelop } from '@fortawesome/free-brands-svg-icons'
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode,
  faCoffee,
  faProjectDiagram,
  faMobile,
  faMobileAlt,
  faNetworkWired,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons'
import Counter from 'components/counter'
import ThemeContext from '../../context'
import './styles.scss'

class Services extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
    }
    this.show = this.show.bind(this)
  }

  static contextType = ThemeContext

  show() {
    this.setState({ show: true })
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== 'auto'
                ? this.context.height * 0.8
                : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="What I Do"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== 'auto'
                      ? this.context.height * 0.6
                      : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    )
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>React Web App</h4>
              <p>
                React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faMobile} />
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>{'React Native & Expo'}</h4>
              <p>
                Learn once, write everywhere. Make universal native apps for Android, iOS, and the web with JavaScript and React. 
                React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faAws} />
              </div>
              <h4>AWS Management</h4>
              <p>
                Have worked with services such as S3, Lambda, IAM, CloudFormation, and more
                to supplement existing app archeitecture.  Currently learning and preparing for AWS Cloud Practictioner Exam.
                Learning to better leverage AWS services and best practices in the cloud.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faConnectdevelop} className="solid" />
              </div>
              <h4>Apollo GraphQL</h4>
              <p>
                The leading GraphQL implementation.  The only end-to-end GraphQL management solution.  
                Leverage the power of GraphQL to power your application business needs: speed, flexibility and discoverability.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faDatabase} className="solid" />
              </div>
              <h4>Database Management</h4>
              <p>
                Leverage database solutions such as MongoDB and deployment tools such as
                Mongo Atlas to store and access your business data.  MongoDB is a NoSQL document storage
                with the scalability and flexibility that you want with the querying and indexing that you need.
                Currently learning other database solutions such as MySQL, PostgreSQL, and more.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faServer} className="solid" />
              </div>
              <h4>{'API Design & Development'}</h4>
              <p>
                Leaveraging libraries such as Node / Express to build and deploy REStful APIs 
                to design robust backend capability to support your business needs.  Leverage 
                features such as authentication, database connection and operations, unit testing 
                and more to create scalable services for your needs.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      )
    }
  }

  counters() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={3}
                text="Happy Clients"
                symbol=""
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCoffee}
                value={1000}
                text="Diet Cokes Drank"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faProjectDiagram}
                value={100}
                text="Projects"
                symbol="+"
                duration={5}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={1000000}
                text="Lines of Code"
                symbol="+"
                duration={5}
              />
            </AnimationContainer>
          </Col>
        </Container>
      )
    }
  }
}

export default Services
