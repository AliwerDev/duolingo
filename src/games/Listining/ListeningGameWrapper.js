import styled from "styled-components";
// import TranslateGame from "./Translate";

const ListeningGameWrapper = styled.div`
  .translate-header {
    padding: 10px 20px;
    h2 {
      font-size: 24px;
    }
  }
  .translate-body {
    .result-words, .variant-words{
      min-height: 60px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 20px 0;
    }
    .result-words{
      border: 2px solid #909090;
      border-left: none;
      border-right: none;
    }
  }
`;

export default ListeningGameWrapper;
