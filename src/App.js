import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent.js'
import CharComponent from './CharComponent/CharComponent.js'

class App extends Component {
	state = {
		sentence:  'Im not empty',
		sentenceLength: 3,
		sentenceArray: [],
	}
	
	changeSentence = (event) => {
		let sentenceAsArray = this.state.sentence.split('');
		this.setState({
			sentence: event.target.value,
			sentenceLength: event.target.value.split(' ').length,
			sentenceArray: sentenceAsArray,
		});
	}

 	// outputSentenceArray = () => {
 	// 	let sentenceAsArray = this.state.sentence.split('');
 	// 	//console.log(sentenceAsArray);

 	// 	this.setState({
 	// 		sentenceArray: sentenceAsArray,
 	// 	})
 	// }

 	removeCharComp = (charIndex) => {
		let newSentence = this.state.sentence;

		newSentence = newSentence.split('');
		newSentence.splice(charIndex, 1);
		let returnToString = newSentence.join('');
		this.setState({
			sentenceArray: newSentence,
			sentence: returnToString,
		})

		//console.log(charIndex);


 	}


	render() {

		const style = {
			display: 'inline-block', 
			padding: '16px', 
			textAlign: 'center', 
			margin: '16px', 
			border: '1px solid black'
		}

		let chars = (
			<div>
				{
					this.state.sentenceArray.map( (char, index ) => 
						{
							return <CharComponent style={style} key={index} click={() => this.removeCharComp(index)}> {char} </CharComponent>
						}  )
				}
			</div>
		)



		return (
			<div className="App">
				<div>
					<input type="text" onChange={this.changeSentence} value={this.state.sentence}/>
					<p>The length of the sentence is {this.state.sentenceLength}</p>
					<ValidationComponent textAmount={this.state.sentenceLength} />

					{chars}
				</div>
			</div>
		);
	}
}

export default App;
