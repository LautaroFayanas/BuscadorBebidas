import { Image, Modal } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

export const ModalBebida = () => {

    const { modal , handleModalClick , receta , setReceta } = useBebidas()

    const mostrarIngredientes = () =>{
        let ingredientes = []
        
        console.log(ingredientes);
        //Uso for porque ya conozco la cantidad de veces que quiero iterar
        for(let i = 1; i < 16 ; i++){
          if( receta [`strIngredient${i}`]){
              ingredientes.push(
                <li> {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]} </li>
              )
          }
        }

        return ingredientes
    }

  return (
    <Modal show={modal} onHide={() => {
        handleModalClick() 
        setReceta({})
    }}> 
          <Image 
                src={receta.strDrinkThumb}
                className='w-50 m-auto mt-5'
                 alt={`Imagen receta ${receta.strDrink}`}
          />
          <Modal.Header>
            <Modal.Title className="m-auto">{receta.strDrink}</Modal.Title>
          </Modal.Header>
        <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredientes y cantidades</h2>

                {mostrarIngredientes()}
                
            </div>
        </Modal.Body>
    </Modal>
  )
}
