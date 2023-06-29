import React, { useEffect, useState } from "react"
import { Navbar } from "./components/Navbar"
import { Section } from "./components/Section"
import { color } from "framer-motion"

//Components

const App: React.FC = () => {
	const [navbarVisible, setNavbarVisible] = useState<boolean>(true)
	const [menuOpen, setMenuOpen] = useState<boolean>(false)
	const [prevScrollPos, setPrevScrollPos] = useState<Number>(0)

	const handleScroll = () => {
		const currentScrollPos = window.scrollY
		const visible = currentScrollPos < +prevScrollPos || currentScrollPos < 5
		setNavbarVisible(visible ? true : false)
		setPrevScrollPos(currentScrollPos)
	}

	useEffect(() => {
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

	const handleScrollToTop = () => {
		handleScroll() // Manually trigger the scroll event listener
		handleNavClick()
		handleMenuClick()
		window.scrollY = 0
		setNavbarVisible(true)
	}

	return (
		<div className="app text-zinc-600 dark:text-white" id="top">
			<a
				href="#section1"
				onClick={handleScrollToTop}
				className={` smoothscroll fixed bottom-4 left-auto right-4 top-auto z-50 rounded bg-zinc-300/40 px-2 py-1 text-xl`}
				aria-label="Back to top"
				title="Back to top">
				↑
			</a>
			<Navbar
				navbarVisible={navbarVisible}
				setNavbarVisible={setNavbarVisible}
				menuOpen={menuOpen}
				handleNavClick={handleNavClick}
				handleMenuClick={handleMenuClick}
			/>

			<main className="scroll-container snap max-h-screen snap-y snap-mandatory overflow-y-scroll">
				<Section id="section1" title="Section 1" snap="center" fadeIn={true} height="screen" navbarVisible={navbarVisible} />
				<Section
					id="section2"
					title="Section 2"
					snap="center"
					bg={{ color: "dark:bg-zinc-900 bg-zinc-100" }}
					fadeIn={true}
					height="screen"
					navbarVisible={navbarVisible}
				/>
				<Section id="section3" title="Section 3" snap="start" fadeIn={true} height="250vh" navbarVisible={navbarVisible} />
				<Section
					id="section4"
					title="Section 4"
					snap="center"
					bg={{ color: "dark:bg-zinc-900 bg-zinc-100" }}
					fadeIn={true}
					height="screen"
					navbarVisible={navbarVisible}
				/>
				<footer className={`${navbarVisible ? "" : ""} scroll-area h-[20vh] w-full snap-end bg-black`} id="section4">
					<h2 className="text-xl font-bold text-white">Footer</h2>
				</footer>
			</main>
		</div>
	)
}

export default App
