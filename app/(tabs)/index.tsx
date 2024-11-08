import { useState } from "react";
import { ScrollView, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tesouro Selic 2027", done: false },
    { id: 2, title: "Tesouro Selic 2029", done: false },
    { id: 3, title: "Tesouro Prefixado 2027", done: false },
    { id: 4, title: "Tesouro Prefixado 2030", done: false },
    { id: 5, title: "Tesouro IPCA 2032", done: false },
    { id: 6, title: "Tesouro IPCA 2035", done: false },
    { id: 7, title: "Tesouro Renda+ 2034", done: false },
    { id: 8, title: "Tesouro Renda+ 2042", done: false },
    { id: 9, title: "Tesouro Educa+ 2034", done: false },
    { id: 10, title: "Tesouro Educa+ 2038", done: false },
    { id: 11, title: "CDB BMG JAN/2025", done: false },
    { id: 12, title: "CDB BMG MAI/2025", done: false },
    { id: 13, title: "CDB PagBank DEZ/2024", done: false },
    { id: 14, title: "CDB PagBank FEV/2025", done: false },

  ])

  const updateTask = (id: number) => {
    const task = tasks.find(task => task.id == id)
    if (task) {
      task.done = !task.done
      setTasks([...tasks])
    } 
  }
  return (
    <View style={styles.container}>  
      <View style={styles.tasks}>
        <Text style={styles.title}>Investimentos</Text>
        <ScrollView style={styles.tasksLists}>
          { tasks.map(task => (
            <Text 
            style={styles.items} 
            onPress={() => updateTask(task.id)}>
              {task.done ? '✅' : '❌'}
              {task.title}</Text>
          ))}
        </ScrollView>
      </View>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Alternar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 1
  },
  tasks: {
    flex: 1,
    width: "100%"
  },
  tasksLists: {
    flex: 1,
    padding: 20,
  },
  items: {
    padding: 10,
    backgroundColor: "#fff",
    height: 80
  },
  button: {
    backgroundColor: "yellow",
    padding: 20,
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    color: "white",
    marginTop: 15,
    fontWeight: "bold",
    marginLeft: 20,
    fontSize: 25
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold"
  }
})