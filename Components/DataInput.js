import React from 'react';
import { View, Text, TextInput } from 'react-native';

const DataInput = ({ label, value, setValue, keyboardType = 'default' }) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={String(value)}
        onChangeText={setValue}
        keyboardType={keyboardType}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
    </View>
  );
};

export default DataInput;
