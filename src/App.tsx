import React, { useState, Component } from 'react';
import './App.css';

class ClassComponent extends Component <any, any> {
  state = {
    hi: 'Привет'
  };

  rusButtonClick = () => {
      const {hi} = this.state;
      if (hi === 'Привет') {
          this.setState({hi: 'Уже выбран русский'})
      } else {
          this.setState({hi: 'Привет'})
      }
  };

  engButtonClick = () => {
      const {hi} = this.state;
      if (hi === 'Hello') {
          this.setState({hi: 'English has already been selected'})
      } else {
          this.setState({hi: 'Hello'})
      }
  };

  freButtonClick = () => {
      const {hi} = this.state;
      if (hi === 'Salut') {
          this.setState({hi: 'Déjà sélectionné en français'})
      } else {
          this.setState({hi: 'Salut'})
      }
  };

  chiButtonClick = () => {
      const {hi} = this.state;
      if (hi === '嗨。') {
          this.setState({hi: '中文已经被选中'})
      } else {
          this.setState({hi: '嗨。'})
      }
  };

  jpnButtonClick = () => {
      const {hi} = this.state;
      if (hi === 'こんにちは') {
          this.setState({hi: '日本語はすでに選択されています'})
      } else {
          this.setState({hi: 'こんにちは'})
      }
  };

  render() {
    const { hi } = this.state;
    return (
        <div>
            <button onClick={this.rusButtonClick}>Русский</button>
            <button onClick={this.engButtonClick}>English</button>
            <button onClick={this.freButtonClick}>Français</button>
            <button onClick={this.chiButtonClick}>中文</button>
            <button onClick={this.jpnButtonClick}>日本語</button>
            <div>{hi}</div>
        </div>
    )
  }
}

const FuncComponent = () => {
    const [color, setColor] = useState('#98FB98');
    const block = document.getElementById('block') as HTMLElement;

    const handleButtonColor = () => {
        if (color === '#98FB98') {
            setColor('#90EE90')
        }
        if (color === '#90EE90') {
            setColor('#3CB371')
        }
        if (color === '#3CB371') {
            setColor('#2E8B57')
        }
        if (color === '#2E8B57') {
            setColor('#008000')
        }
        if (color === '#008000') {
            setColor('#006400')
        }
        if (color === '#006400') {
            setColor('#98FB98')
        }
    };
    if (color === '#006400') {
        block.style.backgroundColor = color;
        return (
            <div id='block'>
                <button onClick={handleButtonColor}>К началу</button>
            </div>
        )
    } else {
        block.style.backgroundColor = color;
        return (
            <div id='block'>
                <button onClick={handleButtonColor}>Темнее</button>
            </div>
        )
    }
};

const App = () => {
  return (
      <div>
          <div>
              <p>Классовый компонент</p>
              <ClassComponent/>
          </div>
          <div>
              <p>Функциональный компонент</p>
              <FuncComponent/>
          </div>
      </div>
  )
};

export default App;
