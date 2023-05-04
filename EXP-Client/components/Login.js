import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import * as utils from '../utils/utils';

export default function Login({ setUser }) {
  const [users, setUsers] = React.useState([]);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // const todayDate = new Date();
  // let todayTodos;
  // todos.forEach((todo, index) => {
  //   if (utils.sameDay(new Date(todo.date), todayDate)) {
  //     todayTodos = todo;
  //   };
  // });
  // return todayTodos;

  const fetchData = () => {
    // Definitely 100% secure login
    utils.getAllUsers().then((res) => {
      setUsers(res.data);
    });
  };

  React.useEffect(() => {
    fetchData()
  }, []);

  const handleLogin = () => {
    users.forEach((user, index) => {
      if (user.email === email && user.password === password) {
        setUser(user);
      }
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        style={styles.marginX}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        style={styles.marginX}
      />
      <Button mode="contained" onPress={handleLogin} style={{marginTop: 10, ...styles.marginX}} > Log In </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  marginX: {
    marginLeft: 15,
    marginRight: 15
  }
});
