import React from "react"

interface NavbarProps {
	navbarVisible: boolean
	setNavbarVisible: (value: boolean) => void
	handleNavClick: () => void
	handleMenuClick: () => void
	menuOpen: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ navbarVisible, setNavbarVisible, handleNavClick, handleMenuClick, menuOpen }) => {
	return (
		<nav
			className={`transition-300 navbar flex items-center justify-between px-4 py-2 text-white transition-transform ease-out ${
				!navbarVisible ? "slide-up" : ""
			}`}>
			<div>
				<h1 className={` ${menuOpen && "w-0 opacity-0 "} text-lg font-bold`}>Logo</h1>
			</div>
			<div
				className="menu-icon-container group ml-auto h-fit w-fit cursor-pointer px-1 py-2 ease-in-out hover:bg-white/20"
				onClick={handleMenuClick}>
				<div className={`menu-icon  ${menuOpen ? "active" : ""} group:hover:bg-white/20 group:cursor-pointer`}>
					<div className={`menu-icon__line ${menuOpen ? "active" : ""} group:hover:bg-white/20 group:cursor-pointer`} />
					<div className={`menu-icon__line ${menuOpen ? "active" : ""} group:hover:bg-white/20 group:cursor-pointer`} />
					<div className={`menu-icon__line ${menuOpen ? "active" : ""} group:hover:bg-white/20 group:cursor-pointer`} />
				</div>
			</div>

			<div
				className={`${
					menuOpen ? "ml-6 w-fit opacity-100" : "h-0 w-0 text-transparent opacity-0"
				} transition-opacity duration-300 ease-in`}>
				<ul className=" flex space-x-4">
					<li className="nav-link">
						<a
							href="#section1"
							className="smoothscroll"
							onClick={() => {
								handleNavClick()
								handleMenuClick()
								setNavbarVisible(false)
							}}>
							Section 1
						</a>
					</li>
					<li className="nav-link">
						<a
							href="#section2"
							className="smoothscroll"
							onClick={() => {
								handleNavClick()
								handleMenuClick()
								setNavbarVisible(false)
							}}>
							Section 2
						</a>
					</li>

					<li className="nav-link">
						<a
							href="#section3"
							className="smoothscroll"
							onClick={() => {
								handleNavClick()
								handleMenuClick()
								setNavbarVisible(false)
							}}>
							Section 3
						</a>
					</li>
					<li className="nav-link">
						<a
							href="#section4"
							className="smoothscroll"
							onClick={() => {
								handleNavClick()
								handleMenuClick()
								setNavbarVisible(false)
							}}>
							Section 4
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}
