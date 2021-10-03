
import "bootstrap/dist/css/bootstrap.css";
import { Card, Col, Container, Row } from "react-bootstrap";


const BlogGrid = () => {

    const data = [
        {
            name: 'Ford Mustang Boss 429',
            keyName: 'ford-mustang-boss-429',
            url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mustang-paul-walker-1586161645.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Americano'
        },
        {
            name: 'Nissan GTR R34',
            keyName: 'nissan-gtr-r34',
            url: 'https://i.pinimg.com/originals/90/89/bf/9089bf12e9a6a351c64df21bbee87ede.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Japonés'
        },
        {
            name: 'Porshe Carrera 911 Turbo',
            keyName: 'porshe-carrera-911-turbo',
            url: 'https://paultan.org/image/2021/04/992-Porsche-911-Turbo-S-Malaysia-1-e1618198018590.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Alemán'
        },
        {
            name: 'Toyota Supra Mk4',
            keyName: 'toyota-supra-mk4',
            url: 'https://images.cdn.circlesix.co/image/2/1200/630/5/1/img3.auto24.ee/auto24/560/831/58198831.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Japonés'
        },
        {
            name: 'Dodge Charger 69',
            keyName: 'dodge-charger-69',
            url: 'https://www.clicacoches.com/wp-content/uploads/2018/11/dodge-charger-rt-general-lee.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Americano'
        },
        {
            name: 'Pagani Zonda R',
            keyName: 'pagani-zonda-r',
            url: 'https://media.gossipvehiculo.com/wp-content/uploads/2021/04/09125241/pagani-zonda-revolucion-getting-road-conversion-1.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Italiano'
        },
        {
            name: 'Corvette C1',
            keyName: 'corvette-c1',
            url: 'https://www.corvetteforum.com/wp-content/uploads/2018/11/1962_chevrolet_corvette_1540927368efcfa866ec63-e1542190742674.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Americano'
        },
        {
            name: 'Formula 1 Red Bull 2019',
            keyName: 'formula-1-red-bull-2019',
            url: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/03/21/15531887983303.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'No Aplica'
        },
        {
            name: 'Ford Mustang Hoonicorn',
            keyName: 'ford-mustang-honnicorn',
            url: 'https://cdn.shopify.com/s/files/1/0163/6227/4916/files/KB_Garage_Hoonicorn_900x.jpg?v=1598400223',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Americano Modificado'
        },
        {
            name: 'Ford GT40',
            keyName: 'ford-gt40',
            url: 'https://www.topgear.com/sites/default/files/news-listicle/image/le-mans-icon-ford-gt40.jpg',
            description: 'Soy el ford mustang 429, lo mas hermoso del mundo',
            origin: 'Americano'
        },
    ]

    window.localStorage.setItem('galleryData', JSON.stringify(data));

    return (<>
        <Container className="mt-5 mb-5">
            <Row >

                {data.map(function (item) {
                    return <Col xs={12} md={4} className="mb-4 d-flex justify-content-center">
                        <Card
                            bg={'light'}
                            border="dark"
                            text={'dark'}
                            style={{ width: '18rem' }}>
                            <Card.Header>{item.origin}</Card.Header>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">{item.origin}</Card.Subtitle> */}
                                <Card.Text>
                                    {item.description}
                                </Card.Text>
                                <Card.Link className="text-dark" href={`https://microfrontends.rocks/detalles/${item.keyName}`}>Ver Auto</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>;
                })}
            </Row>
        </Container>
    </>)
}

export default BlogGrid;

