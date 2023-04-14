import {customize} from 'customization-api';
import React from 'react';
import { Chat } from "customization-api";
import {View, Text, StyleSheet} from 'react-native';

const customization = customize({
  components: {
    videoCall: {
      bottomBar: Chat,
    },
  },
});


const AddChat = () => {
  return (
    <View>
      <Chat />
    </View>
  );
};

export default customization;