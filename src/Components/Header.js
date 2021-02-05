import {Component} from 'react'

class Header extends Component{
    constructor(){
        super()
        this.state = {
            menuOpen: false,
            toggleShow: false
        }
    }
    
    menuBtn =()=>{
        const menuBtn = document.querySelector('.menu-btn')
        if(!this.state.menuOpen){
            menuBtn.classList.add('open')
            this.setState({
                menuOpen: true
            })
            
        } else {
            menuBtn.classList.remove('open')
            this.setState({
                menuOpen: false,
            })
        }
    }

    toggleShowFunc=()=>{
        this.setState((prevState)=>{
            return{
                toggleShow: !prevState.toggleShow
            }
        })
    }
    
    render(){
        return(
            <header className='header'>
                <nav className='navbar'>
                    <a className='logo'>
                        <img className='logoImage' src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg'/>
                    </a>
                    <ul className={`nav-links ${this.state.toggleShow ? 'show' : ''}`}>
                        <li className='nav-item'>
                            <a href='#'>SERVICES</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>PORTFOLIO</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>ABOUT</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>TEAM</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#'>CONTACT</a>
                        </li>
                    </ul>
                    <div className='menu-btn' id='nav-btn' onClick={()=>{ 
                            this.toggleShowFunc()
                            this.menuBtn()
                        }}>
                        <div className='menu-btn_burger'></div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header