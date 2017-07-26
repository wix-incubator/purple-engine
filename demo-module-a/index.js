import React from 'react';
import RN from 'react-native';

var _engine;

class ModuleComponent extends React.Component {
  render() {
    return (
      <RN.View>
        <RN.Text style={{backgroundColor: 'yellow'}}>
          This component was created by module A
        </RN.Text>
        <RN.Text style={{backgroundColor: 'yellow'}}>
          The response from demo-module-b.f1() via the registry:
          `{_engine.module('demo-module-b') === undefined ? null :_engine.module('demo-module-b').f1()}`
        </RN.Text>
      </RN.View>
    );
  }
}

export default class DemoModuleA {
  static version() {
    return '0.1.0'
  }

  static name() {
    return 'demo-module-a';
  }

  static init(purpleEngine) {
    _engine = purpleEngine;
    purpleEngine.registerComponent(ModuleComponent);
  }
}