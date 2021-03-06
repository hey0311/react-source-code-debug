/**
 * Author: NERO
 * Date: 2020/7/25 0025
 * Time: 11:22
 *
 */
import React, { useEffect, useState } from 'react'
import './index.css'
class Child2 extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }
  componentDidMount() {
    // this.setState({ val: this.state.val + 1 });
    // console.log(this.state.val);    // 第 1 次 log

    // this.setState({ val: this.state.val + 1 });
    // console.log(this.state.val);    // 第 2 次 log

    // setTimeout(() => {
    //   this.setState({val: this.state.val + 1});
    //   // console.log(this.state.val);  // 第 3 次 log
    //
    //   this.setState({val: this.state.val + 1});
    //   // console.log(this.state.val);  // 第 4 次 log
    // }, 0);
  }
  add = () => {
    this.setState({ val: 2 });
    // this.setState({ val: 6 });
  }
  render() {
    const { countFormParent } = this.props
    return <div key="child2-div" className={'Child2'} onClick={this.add}>
      child2-content:{this.state.val}
    </div>
  }
}

const AppSibling = props => {
  useEffect(() => {
    console.log('Run AppSibling useEffect');
  })
  return <div key="child1-div" className={'AppSibling'}>
    <span key="child1-span" className={'child1-span'}>child1-span: {props.count}</span>
    <Child2 key="ClassChild2" countFormParent={props.count} />
  </div>
}

export default AppSibling
