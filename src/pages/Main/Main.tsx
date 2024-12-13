import React from 'react'
import setTitle from '../../utils/setTitle'
import logo from '../../assets/images/лого.svg'

function Main() {
	setTitle('Онлайн-школа Brain Academy')
	return (
		<div className='Main'>
			<header className='Header'>
				<div className="header-container">
					<div className="logo">
						<img src={logo} alt="" />
					</div>
					<div className="navigation">
						<ul className="menu">
							<li className='menu-item'><a className='menu-link' href="">Курсы</a></li>
							<li className='menu-item'><a className='menu-link' href="">Регистрация</a></li>

						</ul>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Main
