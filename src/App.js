import React, { Component } from 'react';
import './App.css';
import Screen from './components/screen'
import Button from './components/button'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentNumber:"0",
      oparetorFlag:false,
      decimalFlag:false
    }
  }
  
 handleClick =(buttonName) => {
   let currentNumber = this.state.currentNumber;
   let oparetorFlag = this.state.oparetorFlag;
  switch(true){
        case buttonName === "0" ||
             buttonName === "1" ||
             buttonName === "2" ||
             buttonName === "3" ||
             buttonName === "4" ||
             buttonName === "5" ||
             buttonName === "6" ||
             buttonName === "7" ||
             buttonName === "8" ||
             buttonName === "9" :
        if(this.state.currentNumber!=="0"){
        currentNumber += buttonName
          oparetorFlag = false
           }else {
             currentNumber = buttonName
           }
          this.setState({currentNumber})
          break;
      case buttonName === "+" ||
           buttonName === "-" ||
           buttonName === "*" ||
          buttonName === "/" :
      if(!this.state.oparetorFlag){
        currentNumber += buttonName
        oparetorFlag = true
      this.setState({decimalFlag:false})

      }else {
        const newNum = currentNumber.slice(0,currentNumber.length - 1)
        currentNumber = newNum
        currentNumber += buttonName
      }
      break
    case buttonName === "c":
         currentNumber = "0"
      oparetorFlag = false
    this.setState({decimalFlag:false})

      break
    case buttonName === "=" :
      currentNumber = eval(currentNumber)
      oparetorFlag = false
      break
    case buttonName ===".":
      if(!this.state.decimalFlag){
        currentNumber += "."
        this.setState({decimalFlag:true})
      }
   }
   this.setState({oparetorFlag})
   this.setState({currentNumber})
 } 
  render(){
    return(
    <div>
      <div id="grid-container">
 <Screen currentNumber={this.state.currentNumber}/>
<Button id="zero" name="0" handleClick={this.handleClick}/>
<Button id="one" name="1" handleClick={this.handleClick}/>
<Button id="two" name="2" handleClick={this.handleClick}/>
<Button id="three" name="3" handleClick={this.handleClick}/>
<Button id="four" name="4" handleClick={this.handleClick}/>
<Button id="five" name="5" handleClick={this.handleClick}/>
<Button id="six" name="6" handleClick={this.handleClick}/>
<Button id="seven" name="7" handleClick={this.handleClick}/>
<Button id="eight" name="8" handleClick={this.handleClick}/>
<Button id="nine" name="9" handleClick={this.handleClick}/>
<Button id="clear" name="c" handleClick={this.handleClick}/>
<Button id="equals" name="=" handleClick={this.handleClick}/>
<Button id="decimal" name="." handleClick={this.handleClick}/>
<Button id="add" name="+" handleClick={this.handleClick}/>
<Button id="subtract" name="-" handleClick={this.handleClick}/>
<Button id="multiply" name="*" handleClick={this.handleClick}/>
<Button id="divide" name="/" handleClick={this.handleClick}/>

      </div>
</div>
    )
  }
}

 





export default App;
