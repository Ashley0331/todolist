import styled from '@modern-js/runtime/styled';

export const TodosBox = styled.div`
  .todos-box {
    background: #fff;
    margin: 130px 0 40px 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
  .new-todo {
    width: 100%;
  }
  .new-todo h1 {
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    position: absolute;
    top: -130px;
    color: rgba(175, 47, 47, 0.15);
  }
  .new-todo input {
    width: 100%;
    padding: 16px 16px 16px 60px;
    border: none;
    box-sizing: border-box;
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    background: rgba(0, 0, 0, 0.003);
    font-size: 24px;
  }

  .new-todo input::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }
  .todos-form {
    width: 100%;
    position: relative;
  }
  .complete-all {
    position: absolute;
    top: -40px;
    left: 10px;
  }
  .todos-form ul {
    width: 100%;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
    margin-top: 0;
  }
  .todos-form ul li {
    display: block;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
  }
  .front {
    position: relative;
  }
  .complete {
    position: absolute;
    left: 10px;
    top: 15px;
    width: 30px;
    height: 30px;
    border: 1px solid rgb(207, 207, 207);
    border-radius: 15px;
  }
  .completed .complete {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(118, 213, 118);
    border-color: rgb(160, 209, 160);
  }
  .content {
    display: block;
    width: 100%;
    line-height: 1.2;
    padding: 15px 50px 15px 60px;
  }
  .del {
    position: absolute;
    right: 10px;
    top: 15px;
  }
  .completed .content {
    color: #d9d9d9;
    text-decoration: line-through;
  }
  .edit {
    position: relative;
    width: 100%;
    top: 0;
    font-size: 24px;
    line-height: 1.2;
    box-sizing: border-box;
    padding: 15px 50px 15px 60px;
    display: block;
    border: 1px solid #999;
    box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  }
  /* .editing .edit {
  display: block;
} */
  .todos-footer {
    width: 100%;
    position: relative;
    display: block;
  }
  .none-todo .todos-footer {
    display: none;
  }
  .todos-footer:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
    z-index: 0;
  }

  .todos-footer span {
    display: block;
    position: absolute;
    left: 5px;
    bottom: 7px;
  }
  .todos-footer ul {
    width: 100%;
    text-align: center;
    list-style: none;
    position: relative;
    right: 0;
  }
  .todos-footer ul li {
    display: inline-block;
    cursor: pointer;
    margin: 3px;
    margin-right: 20px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 3px;
    padding: 3px 7px;
  }
  .todos-footer ul li a {
    color: inherit;
  }
  .todos-footer ul li:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
`;
