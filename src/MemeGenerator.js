import React, { Component } from "react";


class MemeGenerator extends Component {
    constructor() {
        super()
        // Initialize state
        this.state = {
            topText: "",
            bottomText: '',
            randomImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        // used to bind the function to this
        this.handleChange = this.handleChange.bind(this)
    }

    // Fetch data from api to frontend at the beginning

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(response => {
            const { memes } = response.data
            this.setState({ allMemeImgs: memes })
        })
    }


    handleChange(event){
        const { name, value } = event.target
        this.setState( { [name]: value })
    }


    render() {
        return (
            <div>
                <form className="meme-form">
                <input 
                    type="text" 
                    name="topText" 
                    placeholder="Top Text" 
                    value={this.state.topText}
                    onChange={this.handleChange}
                    />
                <input 
                    type="text" 
                    name="bottomText" 
                    placeholder="Bottom Text" 
                    value={this.state.bottomText}
                    onChange={this.handleChange}
                    />

                    <button>Generate</button>
                </form>

                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}




export default MemeGenerator