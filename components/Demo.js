import React, {Component} from 'react';
import {TextInput, Text, View, Image,Button,Alert} from 'react-native';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: 'please type your text',
      typedPassword: '',
    };
  }
  _onPressButton = () => {
    Alert.alert('That is cú lừa !');
  };
  render() {
    const imageSource = {
      uri:
        'data:image/png;base64,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',
    };
    return (
      <View style={{ flex:1, backgroundColor:'#C8EFCE'}}>
        <Image
          source={imageSource}
          style={{width: 200, height: 200, marginLeft: 100}}></Image>
        <Greeting name="Email:"></Greeting>
        <TextInput
          style={{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          keyboardType="email-address"
          placeholder="Enter your email"
          //placeholderTextColor="red"
          onChangeText={(text) => {
            // this.state =
            this.setState((previousState) => {
              return {
                typedText: text,
              };
            });
          }}
        />
        <Greeting name="Password:"></Greeting>
        <TextInput
          style={{
            height: 40,
            margin: 20,
            padding: 10,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          keyboardType="default"
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(text) => {
            this.setState(() => {
              return {
                typedPassword: text,
              };
            });
          }}
        />
        <View>
          <Button
            onPress={this._onPressButton}
            title="Login"
            color="blue"></Button>
        </View>
      </View>
    );
  }
}
class Greeting extends Component {
  render() {
    let greetingString = `

         ${this.props.name}`;
    return <Text>{greetingString} </Text>;
  }
}
