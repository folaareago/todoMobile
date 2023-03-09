import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalText}>
        <Text style={styles.goalItem}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    backgroundColor: "#000000",
    color: "#e5e5e5",
    padding: 10,
    margin: 5,
  },
  goalItem: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "300",
  },
});
