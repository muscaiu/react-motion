
    import React, { Component } from 'react'

    class Test extends Component {
        constructor(props) {
            super(props)

            this.state = {
                data: null,
                response: 'got reponse'
            }
        }

        componentWillMount() {
            localStorage.setItem('test', 'w00f')

            if (localStorage.getItem('test')) {
                this.setState({ data: this.state.response })
            }
        }
        render() {
            console.log(this.state.data) //got reponse
            return (
                <div></div>
            )
        }
    }

    export default Test