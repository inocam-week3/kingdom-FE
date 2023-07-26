import { css, styled } from "styled-components";

const ListOutline = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const ListInline = styled.div`
  width: 100%;

  h2 {
    display: inline-block;
    width: 90px;
    height: 17px;
    font-size: 1.1rem;
    margin: 0 0 8px;
    strong {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
  div {
    width: 100%;
    select {
      width: 120px;
      height: 26px;
      margin: 8px 3px 0 0;
      padding: 0 15px 0 3px;
    }
  }
`;

const ResumeListGrid = styled.div`
  width: 1260px;
  display: grid;
  grid-template-columns: 236px 675px 220px 130px;
  grid-column-gap: 0;
  /* gap: 10px 0; */
  margin: 10px 0;
`;

const ResumeListBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  /* gap: 10px 0; */
  margin: 10px 0;
  &:hover {
    background-color: rgba(0, 136, 250, 0.1);
  }
`;

const ResumeListTitle = styled.div`
  border-top: 2px solid #ccc;
  background-color: #f2f2f2;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ResumeListCell = styled.div`
  font-size: 14px;
  text-align: center;
  padding: 20px 0 11px;
  border-bottom: 1px solid #e4e4e4;

  ${({ $type }) =>
    $type === "name"
      ? css`
          font-size: 1rem;
        `
      : $type === "career"
      ? css`
          font-size: 12px;
          strong {
            color: blue;
            font-weight: 400;
          }
        `
      : $type === "createdAt"
      ? css`
          text-align: center;
        `
      : css`
          text-align: left;
          cursor: pointer;
        `}
`;

export {
  ListOutline,
  ListInline,
  ResumeListGrid,
  ResumeListTitle,
  ResumeListBox,
  ResumeListCell,
};
