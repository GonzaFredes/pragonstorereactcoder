import { Link } from "react-router-dom";
import {
  ContainerFatherItem,
  ContainerItem,
  ContainerDetails,
  InputDetail,
  PriceDetail,
  TextStock,
  Img,
} from "../stylesMain";

const Item = ({ item }) => {

  return (
    <ContainerFatherItem item={item}>
      {item.map((info) => (
        <ContainerItem key={info.id}>
          <h2 className="text-2xl font-medium ">{info.titulo}</h2>
          <Img src={info.imagen} alt={info.titulo} />
          <span className="text-xs font-medium md:text-sm text-gray-400">
            {info.descripcion}
          </span>
          <ContainerDetails>
            <PriceDetail stock={info.stock}>${info.precio}</PriceDetail>
            <Link to={`/itemDetails/product/${info.id}`}>
              <InputDetail type="button" value="Ver Detalle" />
            </Link>
          </ContainerDetails>
          <TextStock stock={info.stock}>
            {!info.stock ? "No hay Stock Disponible" : "¡Stock Disponible!"}
          </TextStock>
        </ContainerItem>
      ))}
    </ContainerFatherItem>
  );
};

export default Item;
