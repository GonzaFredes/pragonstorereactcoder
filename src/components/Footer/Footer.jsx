import {ContainerFooter,} from "./stylesFooter";
import { Logo } from "../Header/stylesNav";
import useAppContext from "../../hooks/useAppContext";

const Footer = () => {
  const { loading } = useAppContext();
  return (
    <>
      {!loading && (
        <ContainerFooter>
          <Logo>
            <a href="#">Pragon Store™</a>
          </Logo>
        </ContainerFooter>
      )}
    </>
  );
};

export default Footer;
