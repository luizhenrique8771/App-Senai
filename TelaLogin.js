
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function TelaLogin ({ navigation }) {
  const [senhaOculta] = useState(true);
    var usuarioDigitado="";
    var senhaDigitada="";
    function fazerLogin(){
      if(usuarioDigitado == "ALUNO" && senhaDigitada=="1234"){
        navigation.navigate('Tela Administrativa');
      }else{
        Alert.alert("Aviso","Usuário e/ou senha incorretos!")
      }
    }

    const SemConta = () => {
      navigation.navigate('Tela Cadastro');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.cxText}>Login</Text>
      <StatusBar style="auto" />

      <View style={estilos.cxLogin}>
        <TextInput 
          onChangeText={(texto)=>{usuarioDigitado=texto}}
          mode="outlined"
          style={{width: 300, marginBottom:20, marginTop: 60}}
          label="Usuário"/>
          
          <TextInput
          secureTextEntry={senhaOculta}
          onChangeText={(texto)=>{senhaDigitada=texto}}
          mode="outlined"
          style={{width: 300, marginBottom:50}}
          label="Senha"/>

          <TouchableOpacity 
            onPress={()=>{fazerLogin()}}
            style={estilos.cxBotao} >
            <Text style={{
                    color: "white",
                    fontSize: 20, 
                    fontWeight:'bold',
                    
                    }}>
              Entrar
            </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>{SemConta()}}
             >
            <Text style={estilos.cxText2}>
              Não Tenho Conta
            </Text>
            </TouchableOpacity>
            
            <View style={estilos.cxImagem}>
            <Image source={require('./assets/logo_senai.png')}
             Style={estilos.Imagem}  
             />
             

            
            </View>
            
      </View>
    </View>
    
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3850D2',
    alignItems: 'center',
    justifyContent: 'center',
    
 
    
  },
  cxText:{
    color:'#FFFFFF',
    fontSize: 20,
    fontWeight:'bold',
    marginTop: 500
    
  },
  cxBotao:{
    backgroundColor: "#6079FF",
    width: 300,
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
  },
  cxImagem:{
    width:'75%',
    height:'75%',
    marginLeft:17
    
  },
  Imagem:{
    width:'100%',
    height:'100%',
    
  },
  cxText2:{
    color:'#FFFFFF',
    marginTop: 30,
    justifyContent:'center',
    alignItems:'center',
    fontSize: 20,
    marginLeft: 65,
    textDecorationLine:"underline"
  },
});
