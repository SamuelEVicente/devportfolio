import React, { Component } from 'react'

class Container extends Component {
    render() {
        let {children} = this.props
        return (
           <div className="container">
               {children}
           </div> 
        )
    }
}

export default Container