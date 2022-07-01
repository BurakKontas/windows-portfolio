import React, { Component } from 'react';
import { PanResponder, View, Animated, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-web';

export default class DragAndDrop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
    };
    // Initialize PanResponder
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.pan.setOffset(this.state.pan.__getValue());
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event(
        [null, {dx: this.state.pan.x, dy: this.state.pan.y}],
        {useNativeDriver: false},
      ),
    });
  }


  render() {
    return (
      <View style={styles.container} >
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[
            {
              transform: [
                {translateX: this.state.pan.x},
                {translateY: this.state.pan.y},
              ],
            },
          ]}
        >
            {this.props.content}
        </Animated.View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});