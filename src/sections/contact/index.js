import React from 'react'
import './styles.scss'
import { Row, Col } from 'react-bootstrap'
import AnimationContainer from 'components/animation-container'
import BaffleText from 'components/baffle-text'
import ThemeContext from '../../context'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            phone: "",
            message: "",
            error: false,
            show: false,
            emailResponse: {
                statusCode: null,
                message: ""
            }
        }
        this.show = this.show.bind(this)
    }
    static contextType = ThemeContext


    show() {
      this.setState({show : true})
    }

    check(val) {
        if (this.state.error && val === "") {
            return false
        } else {
            return true
        }
    }

    async submit() {
        if (this.state.name === "" || this.state.email === "" || this.state.message === "") {
            this.setState({error: true})
        } else {
            this.setState({error: false})

            const result = await axios.post('https://sck-portfolio-mailer.herokuapp.com/api/contact', { 
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                message: this.state.message
            })

            console.log(result.status)
            this.setState({
                // Reset form if the contact email was sent successfully
                name: result.status === 201 ? "" : this.state.name,
                email: result.status === 201 ? "" : this.state.email,
                phone: result.status === 201 ? "" : this.state.phone,
                message: result.status === 201 ? "" : this.state.message,
                emailResponse: { statusCode: result.status, message: result.data.message }
            })
        }
    }

    handleClose(event, reason) {
        this.setState({
            emailResponse: { statusCode: null, message: "" }
        })
    }

    showAlertStyle() {
        if(this.state.emailResponse.statusCode === 201) return "success"
        return "error"
    }

    render() {
        return (
            <section id={`${this.props.id}`} className="contact" style={{height: this.context.height}}>
                { 
                    <Snackbar open={!!this.state.emailResponse.statusCode} autoHideDuration={5000} onClose={(e) => this.handleClose()}>
                        <Alert onClose={() => this.handleClose()} severity={this.showAlertStyle()} sx={{ width: '100%' }}>
                            {this.state.emailResponse.message}
                        </Alert>
                    </Snackbar>
                }

                <Row>
                    <Col md={2} className="side">
                        <h2>
                            <BaffleText text="Contact" revealDuration={500} revealDelay={500} parentMethod={this.show} callMethodTime={1100} />
                        </h2>
                    </Col>
                    <Col md={5} className="form">
                        {this.form()}
                    </Col>
                    <Col md={5} className="map">
                        {this.map()}
                    </Col>
                </Row>
            </section>
        )
    }

    form() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={0} animation="fadeInUp fast">
                <div className="form-container">
                    <div className="line-text">
                        <h4>Get In Touch</h4>
                        <AnimationContainer delay={50} animation="fadeInUp fast">
                            <div className="form-group">
                                <input type="text" className={`name ${this.check(this.state.name) ? "" : "error"}`} placeholder="Name" onChange={e => this.setState({name: e.target.value})} value={this.state.name} />
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={100} animation="fadeInUp fast">
                        <div className="form-group">
                            <input type="text" className={`email ${this.check(this.state.email) ? "" : "error"}`} placeholder="Email" onChange={e => this.setState({email: e.target.value})} value={this.state.email} />
                        </div>
                        </AnimationContainer>
                        <AnimationContainer delay={150} animation="fadeInUp fast">
                            <div className="form-group">
                                <input type="text" className="phone" placeholder="Phone" onChange={e => this.setState({phone: e.target.value})} value={this.state.phone}/>
                            </div>
                        </AnimationContainer>
                        <AnimationContainer delay={200} animation="fadeInUp fast">
                        <div className="form-group">
                            <textarea className={`message ${this.check(this.state.message) ? "" : "error"}`} placeholder="Message" onChange={e => this.setState({message: e.target.value})} value={this.state.message}></textarea>
                        </div>
                        </AnimationContainer>
                        <AnimationContainer delay={250} animation="fadeInUp fast">
                        <div className="submit">
                            <button className={`hover-button ${this.state.error ? "error" : ""}`} onClick={() => this.submit()}>
                                <span>Send Message</span>
                            </button>
                        </div>
                        </AnimationContainer>
                    </div>
                </div>
                </AnimationContainer>
            )
        }
    }

    map() {
        if (this.state.show || this.context.height === "auto") {
            return (
                <AnimationContainer delay={1000} animation="fadeIn fast" height={this.context.height}>
                    <iframe title="map" width="100%" height="100%" src="https://www.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Wilmington%25North%25CArolina&amp;ie=UTF8&amp;t&amp;z=14&amp;iwloc=B&amp;output=embed"/>
                </AnimationContainer>
            )
        }
    }

}

export default Contact