import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ScoreBoard from './ScoreBoard';

const App = () => {
  const [teamA, setTeamA] = useState(0);
  const [teamB, setTeamB] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null); 
  const maxScore = 10;

  // Fungsi untuk reset skor
  const resetScores = () => {
    setTeamA(0);
    setTeamB(0);
    setGameOver(false); 
    setWinner(null); 
  };

  
  useEffect(() => {
    if (teamA >= maxScore) {
      setGameOver(true);
      setWinner('Dobleh Fc');
    } else if (teamB >= maxScore) {
      setGameOver(true);
      setWinner('Real Ngawi Fc');
    }
  }, [teamA, teamB]); 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Futsal Match</Text>
      
      {/* Tampilkan Skor Tim A */}
      <ScoreBoard
        teamName="Dobleh Fc"
        score={teamA}
        increment={() => !gameOver && setTeamA(teamA + 1)}
        decrement={() => !gameOver && setTeamA(teamA > 0 ? teamA - 1 : 0)}
      />
      
      {/* Tampilkan Skor Tim B */}
      <ScoreBoard
        teamName="Real Ngawi Fc"
        score={teamB}
        increment={() => !gameOver && setTeamB(teamB + 1)}
        decrement={() => !gameOver && setTeamB(teamB > 0 ? teamB - 1 : 0)}
      />

      {/* Tampilkan pesan jika pertandingan selesai */}
      {gameOver && (
        <Text style={styles.gameOverText}>
          Pertandingan Telah Berakhir, {winner} Wins!
        </Text>
      )}
      
      {/* Tombol Reset */}
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 40,
  },
  gameOverText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6347',
    marginTop: 20,
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 10,
  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default App;
