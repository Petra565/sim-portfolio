import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

//Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

    return (
        <>
            <section className=" fullContainer container-fluid p-0">
                <Hero></Hero>

                <Row className="mainContainer m-0 d-flex justify-content-center">
                    <Col sm={10} md={8} className="mainSection" >
                        <About></About>
                        <Skills></Skills>
                        <Portfolio></Portfolio>
                    </Col>
                </Row>

                <Row className="contactContainer mx-0 mt-4 d-flex justify-content-center">

                    <Col className="contactSection" sm={10} md={8}>
                        <Contact></Contact>
                    </Col>

                </Row>

                <footer className="footerSection">
                    <p className="mb-0" style={{ height: "2rem" }}>&copy; 2025 Petra Šimončičová</p>
                </footer>
            </section>
        </>
    )
}

export default App
