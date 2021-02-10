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


export const TitleImage = styled.Image`
  flex: 0.7;
  display: flex;
  max-width: 80%;
  //max-height: 40%;
  margin: 10%;
  marginBottom: 5%;
  resizeMode: contain;
`;

export const HappyImage = styled.Image`
display: flex;
  flex: 0.6;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const SadImage = styled.Image`
display: flex;
  flex: 0.4;
  //height: 100%;
  //width: 100%;
  margin: 10%;
  marginTop: 20%;
  justify-content: flex-end;
  align-items: flex-end;
  resizeMode:contain;
`;

export const SplashImage = styled.Image`
display: flex;
  flex: 1;
  //height: 100%;
  //width: 100%;
  margin: 50%;
  justify-content: flex-end;
  align-items: flex-end;
  resizeMode:contain;
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
display: flex;
  flex: 0.14;
  height: 100%;
  width: 40%;
  flex-direction: column;
  justify-content: center;
  justify-content: flex-end;
  align-items: center;
        //shadowOpacity: 0.1;
        //shadowRadius: 8;
        //shadowColor: 'black';
        //shadowOffset: { height: 8, width: 15 };
`;

/*
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
*/

export const ButtonTextContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
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
    font-size: 12px;
    color: white;
	font-weight: bold;
`;
