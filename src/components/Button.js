import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';

const Button = ({
  title,
  backgroundColor = '#000',
  titleColor = '#000',
  titleSize = 16,
  onPress,
  width = '40%',
  containerStyle
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={args => {
        if (args.pressed) {
          return [
            styles.base,
            {
              opacity: 0.5,
              backgroundColor,
              width
            },
            containerStyle
          ];
        }

        return [
          styles.base,
          {
            opacity: 0.7,
            backgroundColor,
            width
          },
          containerStyle
        ];
      }}
    >
      <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '500'
  },
  base: {
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 10,
    paddingHorizontal: 12,
  }
});

export default Button;