import React from "react";
import Markdown from 'marked-react';
import './MarkdownPreviewer.css';

export default class MardowPreviewer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:
            "a\n# h1 Heading\n## h2 Heading\n[link text](https://emmanuel.hemer.it)\nInline `code`\n```\nSample text here...\n```\n+ list item 1\n+ list item 2\n> Blockquote\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg \"The Stormtroopocat\")\n**This is bold text**"
            , preview: ''}
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({text: e.target.value})
    }

    render(){
        return(
            <div id="container">
                <h1 id="title">Markdown Previewer</h1>
                <textarea id="editor" onChange={this.handleChange} value={this.state.text}></textarea>
                <div id="preview"><Markdown gfm={true} breaks={true} value={this.state.text} /></div>
            </div>
        )
    }
}