import { MouseEvent } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface IProps {
  children?: JSX.Element | JSX.Element[];
  onCloseModal: () => void;
}

const Modal = ({ children, onCloseModal }: IProps) => {
  // useEffect(() => {
  //   const handleKeyDown = (e) => {
  //     if (e.code === "Escape") {
  //       onCloseModal();
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [onCloseModal]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content>{children}</Content>
    </Backdrop>,
    document.getElementById("modal-root") as HTMLElement
  );
};

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  max-width: 600px;
  width: 100%;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
`;

export default Modal;
