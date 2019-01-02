import React, { Component } from 'react';
import Input from './Input';


class Modal extends Component{
    render(){
        return(
            <div className="Modal">
				<form onSubmit={this.props.onSubmit} className="ModalForm">
					<Input id="name" type="text" placeholder="Abhishek R Athreya" />
					<Input id="username" type="email" placeholder="abhishek.r.athreya@gmail.com" />
					<Input id="password" type="password" placeholder="Password" />
					<button>Log in <i className="fa fa-fw fa-chevron-right"></i></button>
				</form>
			</div>
        )
    }
}

export default Modal;