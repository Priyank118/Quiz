import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import questions from '../questions';
import CustomButton from '../components/CustomButton';
import Card  from '../components/Card';
import { useEffect, useState, useRef } from "react";
import { useQuizContext } from '../providers/QuizProvider';
import { useTimer } from '../components/hooks/useTimer';
import LottieView from 'lottie-react-native';
import party from '../../assets/party.json';



export default function QuizScreen() {
   const {question, questionIndex,  onNext, score, totalQuestions, bestScore } =
    useQuizContext();

    const { time, startTimer, clearTimer} = useTimer(10);

    useEffect(() => {
      startTimer();
     return () => {
      clearTimer();
     };
}, [question]);

   useEffect(() => {
    if (time<= 0) {
      onNext();
    }
   }, [time]);

  return (
      <SafeAreaView style={styles.page}>
    <View style={styles.container}>
      {/* Header */}
      <View>
        <Text style={styles.title}>
          Question {questionIndex + 1}/{totalQuestions}
          </Text>
      </View>

      {/* Body */}
      {question ? (
      <View>
        <QuestionCard question={question} />
        <Text style={styles.timer}>{time} sec</Text>
      </View>
      ) : (
        <>
        <Card title='Well done'>
          <LottieView
          style={StyleSheet.absoluteFill}
          autoPlay
          loop={false}
           source={require('../../assets/party.json')} />
          <Text>
            Correct answers: {score}/{totalQuestions}
            </Text>
          <Text>Best score: {bestScore}</Text>
        </Card>
        </>
      )}
      {/* Footer */}
      <CustomButton 
      title='Next'
      onPress={onNext}
      rightIcon={
        <FontAwesome6 name="arrow-right-long" size={16} color="white" />
      }
      />

    </View>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FDFEF4',
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    color: '#005055',
  },
  timer: {
    marginVertical: 15,
    textAlign: 'center',
    color: '#005055',
    fontWeight: 'bold',
  },
});