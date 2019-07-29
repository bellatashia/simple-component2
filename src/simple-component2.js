import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const styles = {
  container: {
    flex: 1
  },
};

const SimpleComponent2 = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

export default SimpleComponent2;

SimpleComponent2.propTypes = {
  title: PropTypes.string.isRequired,
};
