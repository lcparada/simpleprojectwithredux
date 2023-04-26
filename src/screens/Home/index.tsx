import { TouchableOpacity, Modal, FlatList, Alert, Text } from "react-native";

import {
  Container,
  SubHeader,
  TextSubHeader,
  TextHeaderModal,
  Body,
  InputTasks,
  AddButton,
  TextAddButton,
  Header,
  TextHeader,
  Name,
  IconBack,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { addTask } from "../../features/tasks/tasks-slice";

import uuid from "react-native-uuid";

import { RootState } from "../../features/store/store";

import Tasks from "../../components/Tasks";

export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [nameTasks, setNameTasks] = useState<string>("");

  const tasks = useSelector((state: RootState) => state.tasks);

  const dispatch = useDispatch();

  function addTaskInHome() {
    if (nameTasks !== "") {
      const data = {
        id: uuid.v4() as string,
        nameTask: nameTasks,
      };
      dispatch(addTask(data));
      setOpenModal(!openModal);
      setNameTasks("");
    } else {
      Alert.alert("Erro", "The fields can't be empty");
    }
  }

  return (
    <Container>
      <Header>
        <Ionicons name="person-circle-outline" size={90} color="#e1dee9" />
        <TextHeader>
          hello,{"\n"}
          <Name>name</Name>
        </TextHeader>
      </Header>

      <SubHeader>
        <TextSubHeader>your tasks</TextSubHeader>
        <TouchableOpacity onPress={() => setOpenModal(!openModal)}>
          <Feather name="plus-square" size={24} color="black" />
        </TouchableOpacity>
      </SubHeader>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Tasks name={item.nameTask} id={item.id} />}
      />

      <Modal animationType="fade" visible={openModal}>
        <IconBack onPress={() => setOpenModal(!openModal)}>
          <Feather name="arrow-left" size={24} color="black" />
        </IconBack>
        <Body>
          <TextHeaderModal>add Task</TextHeaderModal>
          <InputTasks
            placeholder="write your task"
            placeholderTextColor="black"
            value={nameTasks}
            onChangeText={setNameTasks}
          ></InputTasks>

          <AddButton onPress={addTaskInHome}>
            <TextAddButton>add</TextAddButton>
          </AddButton>
        </Body>
      </Modal>
    </Container>
  );
}
