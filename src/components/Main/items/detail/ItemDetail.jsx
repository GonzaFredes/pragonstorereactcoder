import {
  ContainerDetail,
  Img,
  Title,
  DescriptionParagraph,
  StockAlert,
} from "./stylesDetailModal";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
  const { titulo, imagen, descripcion, precio, availableSize, stock } = item;

  return (
    <ContainerDetail>
      <Title>{titulo}</Title>
      <Img src={imagen} alt={titulo} />
      <div className="flex flex-col w-full h-24 items-center justify-between lg:relative md:bottom-40 md:pr-28 md:pl-5">
        <span className="text-3xl font-thin mb-2 md:text-4xl">
          Descripción:
        </span>
        <DescriptionParagraph>{descripcion}</DescriptionParagraph>
        <span className="text-xs md:text-sm">
          {stock <= 0 ? (
            <StockAlert>No hay Stock Disponible</StockAlert>
          ) : (
            availableSize
          )}
        </span>
        <span className="text-3xl font-thin mt-5">
          {stock <= 0 ? "" : "Precio:"}
        </span>
        <span className="font-bold text-lg">
          {stock <= 0 ? "" : `$${precio}`}
        </span>
        <ItemCount stock={stock} item={item} />
      </div>
    </ContainerDetail>
  );
};

export default ItemDetail;
