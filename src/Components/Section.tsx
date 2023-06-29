import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ScrollBottomBar } from "./Scroll-Bottom-Bar"

interface SectionProps {
	navbarVisible: Boolean
	id: string
	title: string
	height: "screen" | "full" | "auto" | string
	snap: "start" | "center" | "end"
	fadeIn: Boolean
	bg?: {
		color?: string
		gradient?: string
		transform?: string
	}
}

export const Section: React.FC<SectionProps> = ({ navbarVisible, id, fadeIn, height, title, snap, bg }) => {
	const [ref, inView] = useInView({
		triggerOnce: false,
		threshold: 0.1,
	})

	return (
		<div
			id={id}
			className={`
            ${`${height === "screen" ? "h-screen" : ""} ${height === "full" ? "h-full" : ""} ${height === "auto" ? "h-auto" : ""} ${
				height !== "screen" && height !== "full" && height !== "auto" ? `h-[${height}]` : ""
			}`}
            ${bg?.color ? `${bg.color}` : "bg-white dark:bg-zinc-800 "}
            ${bg?.gradient ? `${bg.gradient}` : ""}
            ${bg?.transform ? `${bg.transform}` : ""}
                snap-${snap} 
                scroll-area min-h-screen w-full
        `}>
			<motion.div
				ref={ref}
				initial={{ opacity: 0 }}
				animate={inView && fadeIn ? { opacity: 1 } : {}}
				transition={{ duration: 2 }}
				className={` 
                ${navbarVisible ? "" : ""} 
            `}>
				{height}
				<h2 className="text-3xl font-bold">{title}</h2>
			</motion.div>
			{(inView && height !== "screen") || "100vh" ? <ScrollBottomBar /> : ""}
		</div>
	)
}
