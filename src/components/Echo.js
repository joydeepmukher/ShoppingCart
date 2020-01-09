import React from 'react'

class Echo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { greeting: props.original }
  }

  render() {
    return (
      <div className="container">
        <p>
          <input
            value={ this.state.greeting }
            onChange={ e => this.setState({greeting: e.target.value}) }
            />
        </p>
        { this.state.greeting }
      </div>
    )
  }

}

export default Echo;