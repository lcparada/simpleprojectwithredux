import { View, TouchableOpacity, Modal } from "react-native";

import { useState } from "react";

import {
  Circle,
  List,
  TextList,
  IconBack,
  Header,
  TextHeader,
  Body,
  InputTasks,
  AddButton,
  TextAddButton,
  DeleteButton,
  TextDeleteButton,
} from "./styles";

import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import {
  addTask,
  deleteTask,
  editTask,
} from "../../features/tasks/tasks-slice";

type IProps = {
  name: string;
  id: string;
};

export default function Tasks(props: IProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const [newNameTask, setNewNameTask] = useState<string>("");

  const dispatch = useDispatch();

  function toggleTask() {
    const data = {
      id: props.id,
      newNameTask,
    };
    dispatch(editTask(data));
    setOpenModal(!openModal);
  }

  function removeTask() {
    const data = {
      id: props.id,
    };
    dispatch(deleteTask(data));
  }

  return (
    <View>
      <TouchableOpacity
        onLongPress={() => setOpenModal(!openModal)}
        delayLongPress={1000}
      >
        <List>
          <Circle />
          <TextList>{props.name.toLowerCase()}</TextList>
        </List>
      </TouchableOpacity>

      <Modal animationType="fade" visible={openModal}>
        <IconBack onPress={() => setOpenModal(!openModal)}>
          <Feather name="arrow-left" size={24} color="black" />
        </IconBack>

        <Header>
          <TextHeader>edit task</TextHeader>
        </Header>

        <Body>
          <InputTasks
            placeholder={props.name.toLowerCase()}
            placeholderTextColor="black"
            value={newNameTask}
            onChangeText={setNewNameTask}
          ></InputTasks>

          <AddButton onPress={toggleTask}>
            <TextAddButton>edit</TextAddButton>
          </AddButton>

          <DeleteButton onPress={removeTask}>
            <TextDeleteButton>delete</TextDeleteButton>
          </DeleteButton>
        </Body>
      </Modal>
    </View>
  );
}
