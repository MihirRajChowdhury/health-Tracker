import React from 'react';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const VisualizationScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  // Sample data for visualization
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [500, 700, 800, 600, 900, 1000, 1100], // Water intake
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
      {
        data: [30, 45, 60, 55, 70, 80, 90], // Exercise minutes
        color: (opacity = 1) => `rgba(34, 128, 176, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ['Water Intake (ml)', 'Exercise Minutes'], // optional
  };

  return (
    <View>
      <Text>Weekly Data</Text>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
      />
    </View>
  );
};

export default VisualizationScreen;
