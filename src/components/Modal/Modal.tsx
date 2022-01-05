import { MouseEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const DELAY = 350;

interface IProps {
  children?: JSX.Element | JSX.Element[];
  onCloseModal: () => void;
}

const Modal = ({ children, onCloseModal }: IProps) => {
  const [goAnimation, setGoAnimation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        setGoAnimation((prev) => !prev);
        setTimeout(() => onCloseModal(), DELAY);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setGoAnimation((prev) => !prev);
      setTimeout(() => onCloseModal(), DELAY);
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Content goAnimation={goAnimation}>{children}</Content>
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

  overflow: auto;
`;

const openModal = keyframes`
      0% { opacity: .2; }
      25% { opacity: .4; }
      50% { opacity: .6; }
      75% { opacity: .8; }
      100% {  opacity: .9; }`;

const closeModal = keyframes`
      0% { opacity: .9; }
      25% { opacity: .8; }
      50% { opacity: .6; }
      75% { opacity: .4; }
      100% {  opacity: .2; }`;

type TContentProps = {
  goAnimation: boolean;
};

const Content = styled.div<TContentProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  max-width: 600px;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  animation: ${({ goAnimation }) => (goAnimation ? closeModal : openModal)}
    ${DELAY}ms ease-in-out;
`;

export default Modal;
