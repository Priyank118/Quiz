import { View , Text} from 'react-native';
import AnswerOption from './AnswerOption';
import { Question } from '../types';
import Card from './Card';
import { useEffect, useState } from "react";


type QuestionCard = {
    question: Question;
};

export default function QuestionCard({ question }: QuestionCard) {
  const [counter, setCounter] = useState(0);

  console.log('Re-render');
  
    useEffect(()=> {
      console.log('Question card mounted');

      return () => {
        console.log('Question card UNcounted');
};
    }, []);
      
    useEffect(()=> {
      console.log('Question changed');
      
      return () => {
        console.log('Question card change : Cleanup');
};
    }, [question]);
   
  return (
    <Card title={question.title}>
      <Text onPress={() => setCounter((c) => c + 1)} style={{ fontSize: 48}}>
</Text>
      <View style={{ gap: 10 }}>
        {question.options.map((option) => (
        <AnswerOption key={option} option={option} 
        />
        ))}   
      </View>
     </Card> 
  );
}


  
  