import { StyledFooter } from "./styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        .
      </p>
      <p>
        Coded by <a href="https://github.com/erwinrmendez">Erwin Méndez</a>.
      </p>
    </StyledFooter>
  );
};

export default Footer;
