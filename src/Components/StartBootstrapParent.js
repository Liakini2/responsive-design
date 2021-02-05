import {Component} from 'react'
import Header from './Header'
import Welcome from './Welcome'

class StartBootstrapParent extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Welcome/>
            </div>
        )
    }
}

export default StartBootstrapParent