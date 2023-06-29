import React from "react"
import { motion, useScroll } from "framer-motion"
// import { useScroll } from "react-intersection-observer"

export const ScrollBottomBar: React.FC = () => {
	const { scrollYProgress } = useScroll()

	return (
		<div className="fixed bottom-0 left-0 z-10 w-full">
			<motion.div style={{ scaleX: scrollYProgress }} className="h-1 bg-blue-500 transition-all" />
		</div>
	)
}
