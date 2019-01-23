import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// class Clock extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         countSecond: 0
//     };
//   }
//   countS () {
//       this.setState(state => ({
//         countSecond: state.countSecond + 1
//     }))
//   }
//   componentDidMount () {
//       this.interval = setInterval(() => this.countS(), 1000)
//   }
//   componentWillUnmount () {
//       clearInterval(this.interval)
//   }
//   render() {
//     return (
//       <div>
//         time:{this.state.countSecond}
//       </div>
//     );
//   }
// }


// ReactDOM.render(<Clock />, document.getElementById('app'));

// const TodoItem = (props) => {
//     return(
//         <ul>
//             {
//                 props.item.map(item => <li key="item.id">{item.text}</li> )
//             }
//         </ul>
//     )
// }

// class Todo extends Component{
//     constructor(props){
//         super(props)
//         this.setList = this.setList.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.state = {
//             item: [],
//             text: ""
//         }
//     }
//     setList(e) {
//         this.setState({text:e.target.value})
//     }
//     handleSubmit(e) {
//         e.preventDefault()
//         const item = this.state.item.concat([{id: this.state.text,text: this.state.text}])
//         const text = ""
//         this.setState({item: item, text: text})
//     }
//     render() {
//         return(
//             <div>
//                 <h2>Todo List</h2>
//                 <TodoItem item = {this.state.item}/>
//                 <form onSubmit={this.handleSubmit}>
//                   <input type="text" onChange={this.setList} value={this.state.text}/>
//                   <button >{this.state.item.length}</button>
//                 </form>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Todo />, document.getElementById('app'))

class MarkdownEditor extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.rawMarkup = this.rawMarkup.bind(this);
		this.state = {
			value: 'Type some *markdown* here!',
		}
	}
	handleChange() {
	    this.setState({value: this.refs.textarea.value});
	}
	// 將使用者輸入的 Markdown 語法 parse 成 HTML 放入 DOM 中，React 通常使用 virtual DOM 作為和 DOM 溝通的中介，不建議直接由操作 DOM。故使用時的屬性為 dangerouslySetInnerHTML
	rawMarkup() {
	    const md = new Remarkable();
	    return { __html: md.render(this.state.value) };
	}
	render() {
	    return (
	      <div className="MarkdownEditor">
	        <h3>Input</h3>
	        <textarea
	          onChange={this.handleChange}
	          ref="textarea"
	          defaultValue={this.state.value} />
	        <h3>Output</h3>
	        <div
	          className="content"
	          dangerouslySetInnerHTML={this.rawMarkup()}
	        />
	      </div>
	    );
	}
}

ReactDOM.render(<MarkdownEditor />, document.getElementById('app'));

