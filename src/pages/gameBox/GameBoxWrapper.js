import styled from 'styled-components'

const GameBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: space-between;


  .game-header {
    display: flex;
    align-items: center;
    padding: 8px;
    width: 70%;
    margin-top: 25px;
    position: relative;
    z-index: 9999;


    .progress {
      margin-left: 6px;
      width: 100%;
      height: 20px;
      border-radius: 13px;
      background-color: #E5E5E5;


      .progress-bar {
        height: 100%;
        background-color: #58CC02;
        border-radius: 13px;

      }
    }
  }

  .game-footer {
    width: 100%;
    border-top: 2px solid #E5E5E5;
    text-align: center;
    position: relative;
    z-index: 9999;

    .submit {
      width: 160px;
      height: 40px;
      margin: 0 250px;
      border-radius: 18px;
      background-color: #E5E5E5;
      color: #919191;
      box-shadow: 0 5px 10px 0 #919191;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 3px;
    }

    .next {
      width: 160px;
      height: 45px;
      margin: 0 250px;
      border-radius: 18px;
      border: 1px solid #919191;
      background-color: #fff;
      color: #919191;
      box-shadow: 0 5px 10px 0 #919191;
      font-size: 15px;
      font-weight: bold;
      letter-spacing: 3px;


      &:hover {
        background-color: #E5E5E5;
        color: #919191;
      }
    }
  }

  .modalFinish {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 999;
  }
`
export default GameBoxWrapper;