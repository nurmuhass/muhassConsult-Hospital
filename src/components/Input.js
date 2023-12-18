import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const Input = (props) => {

    const onChangeText = (text) => {
        props.onInputChanged(props.id, text)
    }

  return (
    <View style={{     width: "100%",
    height: 48,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22}}>
  
        <TextInput
            {...props}
            onChangeText={onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            style={{
                width: "100%"
            }}
        />
    {props.errorText && (
        <View style={{marginVertical: 4,}}>
            <Text style={{ color: 'red',
        fontSize: 12,}}>{props.errorText[0]}</Text>
        </View>
    )}
</View>
  )
}

export default Input