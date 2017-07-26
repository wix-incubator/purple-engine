import React, { Component } from 'react';
import RN, {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import _ from 'lodash';

import demoModuleA from 'demo-module-a';
import demoModuleB from 'demo-module-b';

class PurpleEngine {
  constructor(modules) {
    this._modules = {};
    for(module of modules) {
      this._modules[module.name()] = module;
    }

    this._registeredComponents = [];
    for(module of modules) {
      module.init(this);
    }
  }

  module(name) {
    return this._modules[name];
  }

  registerComponent(component) {
    this._registeredComponents.push(component);
  }

  registeredComponents() {
    return this._registeredComponents;
  }
}

const purpleEngine = new PurpleEngine([
  demoModuleA,
  demoModuleB
]);

export default class PurpleApp extends Component {
  render() {
    return (
      <View style={{marginTop: 20}}>
        <RN.ScrollView>
          <Text style={{
            fontSize: 20,
            textAlign: 'center',
            margin: 10,
          }}>
            Purple App Modules:
          </Text>

          {
            _.map(purpleEngine.registeredComponents(), (c, i) => React.createElement(c, {key: i}))
          }
        </RN.ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('PurpleApp', () => PurpleApp);
