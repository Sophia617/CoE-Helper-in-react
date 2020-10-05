import styled from "styled-components";

const Wrapper = styled.section`
  padding: 4em;
  background: #ebddd6;

  .fa-times-circle {
    color: darkgray;
    font-size: 1.7rem;
    position: absolute;
    right: 10px;
    :hover {
      cursor: pointer;
      color: grey;
    }
  }

  .fa-question-circle {
    color: #857e7a;
    cursor: pointer;
    :hover {
      color: #665045;
    }
  }
`;

export default Wrapper;
