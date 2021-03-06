import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900');
	@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css");


    body {
        background-image: url(https://unsplash.it/1400/799);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        color: #3E363F;
        font-family: 'Lato', sans-serif;
        height: 100vh;
        overflow: hidden;
    }

.App {
	align-items: center;
	display: flex;
	height: 100vh;
	justify-content: center;
	width: 100vw;
	position: absolute;
	top: 0; left: 0;
}

.Modal {
	background: #3E363F;
	border-radius: 2px;
	padding: 20px;
	width: 200px;
}

.Input {
	display: flex;
	flex-direction: row-reverse;
	border-bottom: 1px solid rgba(#FFFCE8, .1);
	padding-bottom: 3px;
	margin-bottom: 5px;
	
	input {
				outline: none;
		border: 0;
		color: #FFFCE8;
		background: transparent;
		font-family: 'Lato', sans-serif;
		flex: 1 0 auto;
		font-size: 14px;
		font-weight: 300;
		
				&:focus ~ label {
			opacity: 1;
		}
		
				&[type='text'] {
			~ label {
				&::before {
					content: "\f007";	
				}
			}
		}
		&[type='email'] {
			~ label {
				&::before {
					content: "\f1fa";
				}
			}
		}
		&[type='password'] {
			~ label {
				&::before {
					content: "\f023";	
				}
			}
		}
	}
	
	label {
		font-family: FontAwesome;
		font-size: 13px;
		opacity: .1;
		transition: opacity .5s ease;
		
		&::before {
			align-items: center;
			color: #FFFCE8;
			display: flex;
			height: 30px;
			justify-content: center;
			width: 30px;
		}
	}
}

button {
	align-items: center;
	background: #DD403A;
	border: 0;
	border-radius: 3px;
	color: white;
	display: flex;
	
	font-family: 'Lato', sans-serif;
	font-size: 13px;
	font-weight: 500;
	justify-content: center;
	margin-top: 20px;
	outline: none;
	padding: 10px 9px 10px 11px;
	text-transform: uppercase;
	width: 100%;
	
	.fa {
		font-size: 12px;
		margin-left: auto;
		position: relative;
		top: 1px;
	}
	
	&:hover {
		transform: scale(1.02);
	}
	
	&:active {
		transform: scale(.99);
	}
}

.example-enter {
	margin-top: 30px;
	opacity: .01;
	
	&.example-enter-active {
		margin-top: 0px;
		opacity: 1;
		transition: opacity .5s ease, margin .5s ease;
	}
}

.example-leave {
	margin-top: 0px;	
	opacity: 1;
	
	&.example-leave-active {
		margin-top: -30px;
		opacity: .01;
		transition: opacity .3s ease, margin .5s ease;
	}
}
`

export default GlobalStyle;