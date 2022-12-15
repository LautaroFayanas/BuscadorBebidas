import { Button, Card, Col } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

export const Bebida = ({bebida}) => {

    const { handleModalClick , handleBebidaIdClick } = useBebidas()

  return (
    <Col md={6} lg={3}>
        <Card className="mt-4">
            <Card.Img
                variant="top"
                src={bebida.strDrinkThumb}
                alt={`Imagen de ${bebida.strDrink}`}
            />

            <Card.Body>
                <Card.Title>{bebida.strDrink}</Card.Title>
                <Button
                    variant="warning"
                    className="w-100 text-uppercase m-2"
                    onClick={
                        () => {
                            handleModalClick()
                            handleBebidaIdClick(bebida.idDrink)
                        }
                    }
                >
                    Ver Receta
                </Button>
            </Card.Body>

        </Card>

        
    </Col>
 )
}
