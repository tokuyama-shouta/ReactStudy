import React from 'react'
import {List} from './List'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {description: 'クリック前の表示です'}
  }
  changeDescription() {
    this.setState({
      description: 'クリック後の表示です。'
    })
  }
  render() {
    const {description} = this.state;
    return(
      <>
        {description}
        <duv>クラスコンポーネントにしてみました。</duv>
        <List title="取り扱い言語一覧"/>
        <button onClick={() => this.changeDescription()}>ボタン</button>
      </>

    )
  }
}

export default App;
