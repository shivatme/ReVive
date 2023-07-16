import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-native";
import AppText from "../components/AppText";

const initialMessages = [
  {
    id: 1,
    title: "Shivam Tiwari",
    description: "Hi, this is my project app.",
    image: require("../assets/users/guy.jpg"),
  },
  {
    id: 2,
    title: "John",
    description: "Hello",
    image: require("../assets/users/John.jpg"),
  },
];

function MessagesScreen(props) {
  const dispatch = useDispatch();
  const addbtn = () => {
    dispatch({
      type: "increment",
    });
  };

  // const { c } = useSelector((state) => state.custom);
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: "Shivam Tiwari",
              description: "Hi, this is my project app.",
              image: require("../assets/users/guy.jpg"),
            },
          ]);
        }}
      />
      {/* <AppText>{c}</AppText>
      <Button onPress={addbtn} title="add" /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
