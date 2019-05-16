import styled, { keyframes } from 'styled-components'

const MobileMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(255, 255, 255, 0.98);
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.25s linear;
  transition: visibility 0.25s linear;
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

export default MobileMenu
