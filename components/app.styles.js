import styled, { css } from '@emotion/native'

export const ActiveLayout = styled.View`
    display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  //background-color: blue;
`;

export const HappyImage = styled.Image`
display: flex;
  flex: 1;
  height: 70%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const SadImage = styled.Image`
display: flex;
  flex: 1;
  height: 40%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TitleImage = styled.Image`
        flex: 0.4;
        display: flex;
  width: 50%;
  height: 10%;
  margin-top: 15%;
`;

export const RulesButton = styled.View`
    height: 10%;
    width: 60%;
    border: 4px white solid;
    //border-radius: 20%;
    background-color: red;
`;

export const TextInstructions = styled.Text`
`;

export const ButtonContainer = styled.View`
    width: 83%;
    height: 10%;
    position: absolute;
    bottom: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ButtonTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-radius: 36px;
    background-color: #ffee58;
    ${({ isActive }) =>
    isActive &&
    `
        //box-shadow: 0 7px 13px 0 rgba(0, 0, 0, 0.19);
        elevation: 4;
        //border: solid 1px #283238;
    `};

    height: 100%;
`;

export const ButtonText = styled.Text`
    font-size: 26px;
    color: white;
`;
