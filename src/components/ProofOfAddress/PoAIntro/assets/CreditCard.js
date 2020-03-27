import { h } from 'preact'

function CreditCard() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-1313 -987)">
          <g transform="translate(1313 987)">
            <circle cx="50" cy="50" r="50" fill="#EAECF0"></circle>
            <g transform="translate(17 28)">
              <rect
                width="64.433"
                height="35.052"
                x="0"
                y="8.247"
                fill="#D4D4D4"
                rx="5"
              ></rect>
              <rect width="64.433" height="38.144" fill="#FFF" rx="5"></rect>
              <path fill="#7F8C8D" d="M0 7.216H64.433V15.979H0z"></path>
              <g fill="#555252" transform="translate(30.928 27.32)">
                <circle cx="2.577" cy="2.577" r="2.577"></circle>
                <circle cx="12.887" cy="2.577" r="2.577"></circle>
                <circle cx="23.196" cy="2.577" r="2.577"></circle>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default CreditCard;