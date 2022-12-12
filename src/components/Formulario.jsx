import { useState } from "react";
import {  Form , Row , Col, Button, Alert } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas";
import useCategoria from "../hooks/useCategoria"



export const Formulario = () => {

    const [ busqueda , setBusqueda ] = useState({
        nombre: '',
        categoria: ''
    })
    const { categorias } = useCategoria();
    const [ alerta , setAlerta ] = useState('')
    const { consultarBebidas } = useBebidas() 

    const handlesubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')
        consultarBebidas(busqueda)
    }
    

  return (
    <Form  
        onSubmit={handlesubmit}
    >
        {alerta &&  <Alert variant="danger" className="text-center">{alerta}</Alert> }
        <Row>
            <Col md={6}>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
                    <Form.Control 
                        id="nombre"
                        name="nombre" 
                        type="text"
                        value={busqueda.nombre}
                        placeholder="Ej: Tequila , Vodka "
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                        />
                </Form.Group>
            </Col>

            <Col md={6}>
            <Form.Group className="mb-3">
                    <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
                    <Form.Select
                        id='categoria'
                        name="categoria"
                        value={busqueda.categoria}
                        onChange={ e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value
                        })}
                    >
                        <option>Selecciona Categoria</option>

                        {
                            categorias.map( item => (
                                <option
                                    key={item.strCategory}
                                    value={item.strCategory}
                                > {item.strCategory}

                                </option>
                            ))
                        }

                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>

        <Row className="justify-content-end">
            <Col md={3}>
                <Button 
                    variant="danger"
                    className="text-uppercase w-100"
                    type="submit"
                >
                    Buscar bebidas
                </Button>
            </Col>
        </Row>
    </Form>
  )
}
