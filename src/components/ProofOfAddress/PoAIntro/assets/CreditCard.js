import { h } from 'preact'

const CreditCard =  () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="180"
    height="180"
    ariaHidden="true"
    style={{ MsTransform: "rotate(360deg)" }}
    transform="rotate(360)"
    viewBox="0 0 1024 896"
  >
    <path
      fill="#626262"
      d="M928 112H96q-26 0-48 13t-35 35-13 48v480q0 40 28 68t68 28h832q40 0 68-28t28-68V208q0-26-13-48t-35-35-48-13zM96 176h832q13 0 22.5 9.5T960 208v64H64v-64q0-13 9.5-22.5T96 176zm832 544H96q-13 0-22.5-9.5T64 688V400h896v288q0 13-9.5 22.5T928 720z"
    ></path>
  </svg>
  );
}

export default CreditCard;