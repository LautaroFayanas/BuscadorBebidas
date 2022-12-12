import { useContext } from "react";
import categoriasContext from "../context/CategoriaProvider";

const useCategoria = () => {
    return useContext(categoriasContext)
}

export default useCategoria