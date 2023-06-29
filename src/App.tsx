import React, { useEffect, useState } from "react"
// import { Link, animateScroll as scroll } from "react-scroll"
import { Link } from "react-router-dom"

const App: React.FC = () => {
	const [navbarVisible, setNavbarVisible] = useState(true)
	const [menuOpen, setMenuOpen] = useState(false)
	const [prevScrollPos, setPrevScrollPos] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY
			const visible = currentScrollPos < prevScrollPos || currentScrollPos < 5
			setNavbarVisible(visible)
			setPrevScrollPos(currentScrollPos)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [prevScrollPos])

	const handleNavClick = () => {
		setNavbarVisible(false)
	}

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen)
	}

	return (
		<div className="app" id="top">
			<a
				href="#top"
				className={` fixed bottom-4 left-auto right-4 top-auto bg-zinc-300/40 px-2 py-1`}
				aria-label="Back to top"
				title="Back to top">
				↑
			</a>
			<nav
				className={`transition-300 navbar flex items-center justify-between px-4 py-2 text-white transition-transform ease-out ${
					!navbarVisible ? "slide-up" : ""
				}`}>
				<div>
					<h1 className="text-lg font-bold">Logo</h1>
				</div>
				<div className="menu-icon  ml-auto ease-in-out " onClick={handleMenuClick}>
					<div className={`menu-icon__line ${menuOpen ? "active" : ""}`} />
					<div className={`menu-icon__line ${menuOpen ? "active" : ""}`} />
					<div className={`menu-icon__line ${menuOpen ? "active" : ""}`} />
				</div>

				<div
					className={`${
						menuOpen ? "ml-6 w-fit opacity-100" : "h-0 w-0 text-transparent opacity-0"
					} transition-opacity duration-300 ease-in`}>
					<ul className=" flex space-x-4">
						<li className="nav-link">
							<a
								href="#section1"
								onClick={() => {
									handleNavClick
									handleMenuClick
								}}>
								Section 1
							</a>
						</li>
						{/* <li className="nav-link">
							<Link
								to="section2"
								onClick={() => {
									let s2 = document.getElementById("section2")!
									s2 && s2.scrollIntoView({ behavior: "smooth", block: "start" })
								}}>
								Section2
							</Link>
						</li> */}
						<li className="nav-link">
							<a
								href="#section2"
								className="smoothscroll"
								onClick={() => {
									handleNavClick()
									handleMenuClick()
								}}>
								Section 2
							</a>
						</li>

						<li className="nav-link">
							<a
								href="#section3"
								onClick={() => {
									handleNavClick
									handleMenuClick
								}}>
								Section 3
							</a>
						</li>
						<li className="nav-link">
							<a
								href="#section4"
								onClick={() => {
									handleNavClick
									handleMenuClick
								}}>
								Section 4
							</a>
						</li>
					</ul>
				</div>
			</nav>

			<main className="scroll-container snap max-h-screen snap-y snap-mandatory overflow-y-scroll">
				<section className={`${navbarVisible ? "" : ""} scroll-area h-screen w-full  snap-start bg-white `} id="section1">
					<h2 className="text-3xl font-bold">Section 1</h2>
				</section>
				<div
					className={`${navbarVisible ? "" : ""} scroll-area h-screen w-full snap-start bg-zinc-200`}
					id="section2"
					title="section2">
					<h2 className="text-3xl font-bold">Section 2</h2>
				</div>
				<section className={`${navbarVisible ? "" : ""} scroll-area h-screen w-full  snap-start bg-white `} id="section3">
					<h2 className="text-3xl font-bold">Section 3</h2>
				</section>
				<section className={`${navbarVisible ? "" : ""} scroll-area h-screen w-full snap-start bg-zinc-200`} id="section4">
					<h2 className="text-3xl font-bold">Section 4</h2>
				</section>
			</main>
		</div>
	)
}

export default App
