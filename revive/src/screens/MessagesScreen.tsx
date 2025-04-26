import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  ListRenderItemInfo,
  ImageSourcePropType,
} from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

// Type for a single message item
interface Message {
  id: number;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

const initialMessages: Message[] = [
  {
    id: 1,
    title: 'Shivam Tiwari',
    description: 'Hi, this is my project app.',
    image: require('../assets/users/guy.jpg'),
  },
  {
    id: 2,
    title: 'John',
    description: 'Hello',
    image: require('../assets/users/John.jpg'),
  },
];

function MessagesScreen() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleDelete = (message: Message) => {
    setMessages(messages.filter(m => m.id !== message.id));
  };

  const renderItem = ({item}: ListRenderItemInfo<Message>) => (
    <ListItem
      title={item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log('Message selected', item)}
      renderRightActions={() => (
        <ListItemDeleteAction onPress={() => handleDelete(item)} />
      )}
    />
  );

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 1,
              title: 'Shivam Tiwari',
              description: 'Hi, this is my project app.',
              image: require('../assets/users/guy.jpg'),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
