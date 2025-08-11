import CarouselComponent from './CarouselComponent'

//Bootstrap
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Portfolio() {

    const accommodationImages = [
        { image: "/images/AccommodationProject01.png" },
        { image: "/images/AccommodationProject02.png" },
        { image: "/images/AccommodationProject03.png" },
        { image: "/images/AccommodationProject04.png" },
        { image: "/images/AccommodationProject05.png" },
    ]

    const interierImages = [
        { image: "/images/Interier01.png" },
        { image: "/images/Interier02.png" },
        { image: "/images/Interier03.png" },
    ]

    const TravelAppkaImages = [
        { image: "/images/TravelAppka1.png" },
        { image: "/images/TravelAppka2.png" },
        { image: "/images/TravelAppka3.png" },
    ]

    return (
        <>
            <section className="portfolio">

                <h4 className="headings my-4">Portfólio</h4>

                <Row className="justify-content-md-center text-start">
                    <h5>Informačný portál určený pre poskytovateľov ubytovania</h5>

                    <p>Informačný portál, kde si poskytovatelia ubytovania vedia efektívne evidovať všetky informácie o objednávkach. Portál umožňuje vytvárať objednávky a cenník, upravovať ich a vymazať, sprostredkováva check-in formulár pre hostí, zobrazuje objednávky v kalendári a v sumarizuje celkové výsledky v grafoch.   </p>
                </Row>

                <Row className="mx-0 mb-4">
                    <Button className=" buttonBgColor w-full" as="a" href="https://github.com/Petra565/accomodation.git" target="_blank" rel="noopener noreferrer"><strong>Odkaz na GitHub repozitár</strong></Button>
                </Row>

                <CarouselComponent
                    carouselImages={accommodationImages}
                />

                <Row className="justify-content-md-center text-start">
                    <p className="my-3"><strong>Použité technológie:</strong></p>

                    <ul className="list-unstyled">
                        <li><Badge bg="secondary fs-6 mb-1">React</Badge></li>
                        <li><Badge bg="secondary fs-6">Bootstrap</Badge></li>
                    </ul>
                </Row>

                <div className="border-bottom border-black"></div>

                <Row className="justify-content-md-center text-start">
                    <h5 className="mt-4">Stránka prezentujúca nábytok na mieru</h5>
                    <p>Jednoduchá responzívna stránka pozostávajúca z úvodnej obrazovky, galérie a kontaktu.</p>
                </Row>

                <Row className="mx-0 mb-4">
                    <Button className=" buttonBgColor w-full" as="a" href="https://github.com/Petra565/InterierWeb.git" target="_blank" rel="noopener noreferrer"><strong>Odkaz na GitHub repozitár</strong></Button>
                </Row>

                <Row className="mx-0 mb-4">
                    <Button variant="secondary" className=" w-full" as="a" href="https://simoncic-interier.sk" target="_blank" rel="noopener noreferrer"><strong>Odkaz na stránku</strong></Button>
                </Row>

                <CarouselComponent
                    carouselImages={interierImages}
                />

                <Row className="justify-content-md-center text-start">
                    <p className="my-3"><strong>Použité technológie:</strong></p>

                    <ul className="list-unstyled">
                        <li><Badge bg="secondary fs-6 mb-1">React</Badge></li>
                        <li><Badge bg="secondary fs-6">Tailwind</Badge></li>
                    </ul>
                </Row>

                <div className="border-bottom border-black"></div>

                <Row className="justify-content-md-center text-start">
                    <h5 className="mt-4">Webová aplikácia TravelAppka</h5>
                    <p>Webová aplikácia, ktorá umožňuje zaznamenávať navštívené miesta na svetovej mape a zapisovať si zážitky k jednotlivým lokalitám. Nechýba ani zoznam plánovaných miest na navštívenie. Aplikácia je stále vo vývoji.</p>
                </Row>

                <Row className="mx-0 mb-4">
                    <Button className=" buttonBgColor w-full" as="a" href="https://github.com/Petra565/TravelAppka" target="_blank" rel="noopener noreferrer"><strong>Odkaz na GitHub repozitár</strong></Button>
                </Row>

                <Row className="mx-0 mb-4">
                    <Button variant="secondary" className=" w-full" as="a" href="https://relaxed-gumdrop-2494dd.netlify.app/" target="_blank" rel="noopener noreferrer"><strong>Odkaz na stránku</strong></Button>
                </Row>

                <CarouselComponent
                    carouselImages={TravelAppkaImages}
                />

                <Row className="justify-content-md-center text-start">
                    <p className="my-3"><strong>Použité technológie:</strong></p>

                    <ul className="list-unstyled">
                        <li><Badge bg="secondary fs-6 mb-1">React</Badge></li>
                        <li><Badge bg="secondary fs-6">Tailwind</Badge></li>
                    </ul>
                </Row>

            </section>
        </>
    )
}

export default Portfolio