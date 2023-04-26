import styled from "styled-components/native";

export const List = styled.View`
  margin-left: 30px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  background-color: #e1dee9;
  width: 330px;
  border-radius: 15px;
  padding-left: 20px;
`;

export const Circle = styled.View`
  width: 5px;
  height: 5px;
  border-radius: 20px;
  background-color: black;
`;

export const TextList = styled.Text`
  font-family: Lexend_400Regular;
  font-size: 16px;
`;

export const IconBack = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 20px;
`;

export const Header = styled.View`
  margin-top: 50px;
  margin-left: 30px;
`;

export const TextHeader = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 24px;
`;

export const Body = styled.View`
  margin-left: 30px;
  margin-top: 20px;
`;

export const TextHeaderModal = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 24px;
`;

export const InputTasks = styled.TextInput`
  width: 330px;
  height: 40px;
  background-color: #e1dee9;
  border-radius: 10px;
  align-items: center;
  font-family: Lexend_400Regular;
  padding-left: 20px;
  padding-right: 20px;
  color: black;
  margin-top: 20px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  background-color: #e1dee9;
  border-radius: 60px;
  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const TextAddButton = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 330px;
  height: 60px;
  background-color: #9b050f;
  border-radius: 60px;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
`;

export const TextDeleteButton = styled.Text`
  font-family: Lexend_700Bold;
  font-size: 16px;
`;
