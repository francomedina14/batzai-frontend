import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";

const style = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    margin: 100,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ED604C",
    marginVertical: 40,
  },
  textInput: {
    borderWidth: 1,
    width: Dimensions.get("screen").width * 0.8,
    borderColor: "gray",
    borderRadius: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 13,
    marginBottom: 10,
  },
  okButton: {
    backgroundColor: "#ED604C",
    width: Dimensions.get("screen").width * 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
  },
  okText: {
    color: "white",
    fontSize: 20,
  },
});

const clientURL =
  "ec2-3-84-116-82.compute-1.amazonaws.com:8000/api/v1/clientes";

const NewClient = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phone2, setPhone2] = useState("");
  const [address, setAddress] = useState("");
  const [nuit, setNuit] = useState("");

  const addClient = async () => {
    axios
      .post(clientURL, {
        name: name,
        phone: phone,
        phone2: phone2,
        address: address,
        nuit: nuit,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    clearInput();
  };

  const clearInput = () => {
    setName("");
    setPhone("");
    setPhone2("");
    setAddress("");
    setNuit("");
  };

  return (
    <View style={style.container}>
      <Text style={style.title}>Adicionar Cliente</Text>
      <View>
        <Text style={style.label}>ESCREVA O NOME DO NEGOCIO</Text>
        <TextInput
          style={style.textInput}
          onChangeText={setName}
          value={name}
        />
        <Text style={style.label}>ESCREVA O TELEFONE DO CLIENTE *</Text>
        <TextInput
          style={style.textInput}
          onChangeText={setPhone}
          value={phone}
        />
        <Text style={style.label}>ESCREVA UM TELEFONE ALTERNATIVO</Text>
        <TextInput
          style={style.textInput}
          onChangeText={setPhone2}
          value={phone2}
        />
        <Text style={style.label}>ESCREVA A LOCALIZACAO DO CLIENTE *</Text>
        <TextInput
          style={style.textInput}
          onChangeText={setAddress}
          value={address}
        />
        <Text style={style.label}>ESCREVA O NUIT DO CLIENTE</Text>
        <TextInput
          style={style.textInput}
          onChangeText={setNuit}
          value={nuit}
        />
      </View>
      <TouchableOpacity
        style={style.okButton}
        onPress={() => navigation.navigate("menu")}
      >
        <Text style={style.okText}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NewClient;
