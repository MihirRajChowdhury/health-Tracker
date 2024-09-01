import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import DataInput from '../components/DataInput';

const HomeScreen = ({ navigation }) => {
  const [waterIntake, setWaterIntake] = useState(0);
  const [exerciseMinutes, setExerciseMinutes] = useState(0);
  const [mood, setMood] = useState('');

  const handleSubmit = () => {
    // Handle the submission logic (store in state or backend)
    console.log({ waterIntake, exerciseMinutes, mood });
  };

  return (
    <View>
      <DataInput
        label="Water Intake (ml)"
        value={waterIntake}
        setValue={setWaterIntake}
        keyboardType="numeric"
      />
      <DataInput
        label="Exercise Minutes"
        value={exerciseMinutes}
        setValue={setExerciseMinutes}
        keyboardType="numeric"
      />
      <DataInput
        label="Mood"
        value={mood}
        setValue={setMood}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <Button
        title="View Weekly Data"
        onPress={() => navigation.navigate('Visualization')}
      />
    </View>
  );
};

export default HomeScreen;
