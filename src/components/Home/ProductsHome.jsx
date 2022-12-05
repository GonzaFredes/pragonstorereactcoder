import {
  ContainerFatherItemsHome,
  ContainerItem,
  Img,
  ContainerDetails,
  PriceDetail,
  InputDetail,
  TextStock,
} from "../../components/Main/stylesMain";
import useAppContext from "../../hooks/useAppContext";
import { Link } from "react-router-dom";

const ProductsHome = () => {
  const { productsHomeFilter } = useAppContext();

  return (
    <ContainerFatherItemsHome>
      {productsHomeFilter.map((info) => (
        <ContainerItem key={info.id}>
          <h2 className="text-lg font-medium">{info.titulo}</h2>

          <Img src={info.imagen} alt={info.titulo} />

          <span className="text-xs font-medium md:text-sm text-gray-400">
            {info.descripcion}
          </span>

          <ContainerDetails>
            <PriceDetail stock={info.stock}>${info.precio}</PriceDetail>
            <Link to={`/itemDetails/product/${info.id}`}>
              <InputDetail type="button" value="Más Detalles" />
            </Link>
          </ContainerDetails>
          <TextStock stock={info.stock}>
            {!info.stock ? "No hay Stock Disponible" : "¡Stock Disponible!"}
          </TextStock>
        </ContainerItem>
      ))}
    </ContainerFatherItemsHome>
  );
};

export default ProductsHome;
