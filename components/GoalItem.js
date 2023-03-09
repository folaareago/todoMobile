import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalText}>
      <Pressable
        andriod_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalText: {
    backgroundColor: "#000000",
    color: "#e5e5e5",

    margin: 5,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalItem: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "300",
    padding: 10,
  },
});
