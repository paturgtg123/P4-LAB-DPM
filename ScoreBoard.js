import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ScoreBoard = ({ teamName, score, increment, decrement, winner }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>

      {winner && <Text style={styles.winner}>{winner}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#3b3f47',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#282c34',
  },
  winner: {
    marginTop: 10,
    color: '#32CD32',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ScoreBoard;
