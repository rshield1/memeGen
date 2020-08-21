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
    }

    // Fetch data from api to frontend at the beginning

    componentDidMount() {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(response => {
            const { memes } = response.data
            console.log(memes[0])
            this.setState({ allMemeImgs: memes })
        })
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
                    />
                <input 
                    type="text" 
                    name="bottomText" 
                    placeholder="Bottom Text" 
                    value={this.state.bottomText}
                    />

                    <button>Generate</button>
                </form>
            </div>
        )
    }
}




export default MemeGenerator