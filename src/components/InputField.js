import React from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputField = ({
  leftIcon,
  iconColor = "#20202a",
  rightIcon,
  inputStyle,
  containerStyle,
  placeholderTextColor = '#444',
  handlePasswordVisibility,
  ...rest
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {leftIcon ? (
        <MaterialCommunityIcons
          name={leftIcon}
          size={20}
          color={iconColor}
          style={styles.leftIcon}
        />
      ) : null}
      <TextInput
        {...rest}
        placeholderTextColor={placeholderTextColor}
        style={[styles.input, inputStyle]}
      />
      {rightIcon ? (
        <TouchableOpacity onPress={handlePasswordVisibility}>
          <MaterialCommunityIcons
            name={rightIcon}
            size={20}
            color={iconColor}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    flexDirection: 'row',
    width: '70%',
    alignSelf: "center",
    padding: 5,
    height: '8%',
    backgroundColor: "#20202a",
    

  },
  leftIcon: {
    marginRight: 10,
    padding: 10,
    color: '#FFF',

  },
  input: {
    flex: 1,
    width: '70%',
    fontSize: 20,
    padding: 5,
    heigth: '100%',
    color: '#FFF',

  },
  rightIcon: {
    alignSelf: 'center',
    marginLeft: 10,
    color: '#FFF',
    padding: 10 
  }
});

export default InputField;