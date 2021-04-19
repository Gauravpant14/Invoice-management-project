import styled from "styled-components";
export const Back = styled.div`
  background-color: #F1F6FC;
  border-radius: 50px;
  .options {
    display: inline-flex;
    list-style: none;
    padding: 5px;
  }
  .list {
    padding: 10px;
  }
  .checkbox-para {
    // margin-top: 15px;
    font-size: 12px;
    padding: 10px;
  }
  .outer-icon {
    background-color: #4589FE;
    border-radius: 5px;
    width: 70px;
    height: 45px;
  }
  .arrow-image {
    width: 50%;
    margin: 15px;
  }
  .btn-sub {
    border: none;
    margin-top:-14px
  }
  .para {
    color: #DD3545;
  }
  .hover-effect ul li:hover {
    border-bottom: 2px solid #4589FE;
    cursor: pointer;
  }
`;
export const InputFirst = styled.input`
  padding: 5px 8px;
  border-radius: 10px !important;
  /* box-shadow: -5px 0px 1px 1px #4589FE; */
  border: 1px solid #4589FE !important;
  border-left: 10px solid #4589FE !important;
`;
export const InputS = styled.input`
  padding: 5px 8px;
  border-radius: 10px !important;
  /* box-shadow: -5px 0px 1px 1px #4589FE; */
`;