import React from 'react';
import RN from 'react-native';

class ModuleComponent extends React.Component {
  render() {
    return (
      <RN.Text style={{backgroundColor: 'cyan'}}>
        This component was created by module B
      </RN.Text>
    );
  }
}

export default class DemoModuleB {
  static version() {
    return '0.1.0'
  }

  static name() {
    return 'demo-module-b';
  }

  static init(purpleEngine) {
    purpleEngine.registerComponent(ModuleComponent);
  }

  static f1() {
    return 'Inside the module b\'s f1() function';
  }
}