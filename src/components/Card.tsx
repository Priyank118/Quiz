import { View, StyleSheet, Text } from 'react-native';
import { PropsWithChildren } from 'react';

type Card = {
  title: string;
};

export default function Card({ title, children }: PropsWithChildren<Card>) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    paddingVertical: 40,
    gap: 20,

    // Shaddow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    lineHeight: 30,
  },
});

