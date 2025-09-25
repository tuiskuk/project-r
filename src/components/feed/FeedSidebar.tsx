"use client";
import { Home, Search, Plus, Heart, User } from "lucide-react";

const navItems = [
	{ icon: <Home />, label: "Home" },
	{ icon: <Search />, label: "Search" },
	{ icon: <Plus />, label: "Create" },
	{ icon: <Heart />, label: "Activity" },
	{ icon: <User />, label: "Profile" },
];

export function FeedSidebar() {
	return (
		<>
			{/* Desktop sidebar */}
			<aside className="hidden md:flex flex-col items-center py-6 px-2 w-20 bg-white border-r border-gray-200 min-h-screen fixed left-0 top-0 z-30
  mt-[104px] xs:mt-[112px] sm:mt-[124px]">
				<nav className="flex flex-col gap-6 mt-4">
					{navItems.map((item) => (
						<SidebarIcon key={item.label} icon={item.icon} label={item.label} />
					))}
				</nav>
			</aside>
			{/* Mobile bottom bar */}
			<nav className="fixed md:hidden bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 flex justify-around items-center h-14">
				{navItems.map((item) => (
					<SidebarIcon key={item.label} icon={item.icon} label={item.label} />
				))}
			</nav>
		</>
	);
}

function SidebarIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
	return (
		<button
			className="flex flex-col items-center text-gray-700 hover:text-black focus:outline-none"
			aria-label={label}
		>
			<span className="w-7 h-7 flex items-center justify-center">{icon}</span>
			<span className="text-[10px] mt-0.5 font-medium">{label}</span>
		</button>
	);
}