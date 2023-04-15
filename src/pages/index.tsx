import Image from 'next/image';
import {
	IoHome,
	IoSearch,
	IoLibraryOutline,
	IoAddCircle,
	IoHeart,
	IoHeartOutline,
	IoRepeat,
	IoShuffle,
	IoPlayCircle,
	IoPlaySkipBack,
	IoPlaySkipForward,
	IoMicOutline,
	IoAlbumsOutline,
	IoDesktopOutline,
	IoVolumeLowOutline,
	IoExpandOutline,
	IoChevronBack,
	IoChevronForward,
	IoChevronDown,
	IoPlay,
} from 'react-icons/io5';

import { GiNextButton, GiPreviousButton } from 'react-icons/gi';
import Head from 'next/head';

export default function Home() {
	const playlists = [
		{
			title: 'Trench',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'trench.jpg',
		},
		{
			title: 'Blurryface',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'blurryface.jpg',
		},
		{
			title: 'Evolve',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'evolve.jpg',
		},
		{
			title: `Hollywood's Bleeding`,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'hollywoodsbleeding.jpg',
		},
		{
			title: 'Pray For The Wicked',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'prayforthewicked.jpg',
		},
		{
			title: 'This Is Scalene',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'scalene.jpeg',
		},
		{
			title: 'This Is Supercombo',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'supercombo.jpeg',
		},
		{
			title: 'On Repeat',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'repeat.jpg',
		},
		{
			title: 'Liked Songs',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'liked.jpg',
		},
		{
			title: 'Castelos & Ruínas',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'casteloseruinas.png',
		},
		{
			title: 'After Hours',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'afterhours.jpg',
		},
		{
			title: 'Californication',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'californication.jpg',
		},
		{
			title: 'Ocean',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'ocean.jpg',
		},
		{
			title: '÷ (Deluxe)',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'divide.jpg',
		},
		{
			title: 'Troféu',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'trofeu.jpg',
		},
		{
			title: 'Chill',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'chill.png',
		},
		{
			title: 'Solitude',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'solitude.jpg',
		},
		{
			title: 'Mind',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'mind.jpg',
		},
		{
			title: 'Late Nights',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'latenights.jpg',
		},
		{
			title: 'Luck',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quas ratione temporibus, autem repudiandae odio omnis dolore? Iste cupiditate reprehenderit cum maxime rerum obcaecati nesciunt libero, veritatis delectus, nam incidunt?',
			cover: 'lucky.jpg',
		},
	];

	return (
		<div className="h-screen flex flex-col overflow-hidden">
			<Head>
				<title>Spotify - Web Player: Music for Everyone</title>
			</Head>
			<div className="flex flex-1 max-h-[calc(100vh-96px)]">
				<aside className="bg-sp-900 w-72 text-sp-highlight p-6">
					<a href="#">
						<svg id="logo" className="h-10" viewBox="0 0 1134 340">
							<title>Spotify</title>
							<path
								fill="currentColor"
								d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
							></path>
						</svg>
					</a>
					<nav className="flex flex-col gap-4 mt-7">
						<a href="#" className="flex gap-3 items-center group">
							<IoHome className="text-3xl text-sp-text group-hover:text-sp-highlight transition ease-linear" />
							<span className="text-sm font-semibold text-sp-text group-hover:text-sp-highlight transition ease-linear">
								Home
							</span>
						</a>
						<a href="#" className="flex gap-3 items-center group">
							<IoSearch className="text-3xl text-sp-text group-hover:text-sp-highlight transition ease-linear" />
							<span className="text-sm font-semibold text-sp-text group-hover:text-sp-highlight transition ease-linear">
								Search
							</span>
						</a>
						<a href="#" className="flex gap-3 items-center group">
							<IoLibraryOutline className="text-3xl text-sp-text group-hover:text-sp-highlight transition ease-linear" />
							<span className="text-sm font-semibold text-sp-text group-hover:text-sp-highlight transition ease-linear">
								Your Library
							</span>
						</a>
					</nav>

					<nav className="flex flex-col gap-4 mt-8">
						<a href="#" className="flex gap-3 items-center group">
							<IoAddCircle className="text-3xl text-sp-text group-hover:text-sp-highlight transition ease-linear" />
							<span className="text-sm font-semibold text-sp-text group-hover:text-sp-highlight transition ease-linear">
								Create Playlist
							</span>
						</a>
						<a href="#" className="flex gap-3 items-center group relative">
							<div className="p-4 bg-[linear-gradient(135deg,#450af5,#c4efd9)] rounded opacity-80 group-hover:opacity-100 transition ease-linear"></div>
							<IoHeart className="text-xl text-sp-text group-hover:text-sp-highlight transition ease-linear absolute left-1.5" />
							<span className="text-sm font-semibold text-sp-text group-hover:text-sp-highlight transition ease-linear">
								Liked Songs
							</span>
						</a>
					</nav>

					<div className="mt-5 pt-5 border-t border-t-sp-text/20 flex flex-col gap-3 text-sp-text font-medium">
						{playlists.map((playlist) => (
							<a
								className="hover:text-sp-highlight text-sm"
								href="#"
								key={playlist.title}
							>
								{playlist.title}
							</a>
						))}
					</div>
				</aside>

				<main className="flex-1 text-sp-highlight px-7 bg-gradient-to-b from-[#440C0C] from-0% via-sp-700 via-30% to-sp-700 to-100% max-h-[calc(100vh-48px)] relative overflow-y-scroll">
					<header className="flex justify-between items-center py-4">
						<div className="flex gap-4">
							<div className="p-2 bg-sp-900/70 rounded-full cursor-pointer">
								<IoChevronBack className="text-xl" />
							</div>
							<div className="p-2 bg-sp-900/70 rounded-full cursor-pointer">
								<IoChevronForward className="text-xl" />
							</div>
						</div>
						<div className="flex items-center bg-sp-900/70 overflow-hidden rounded-full gap-2 p-1 cursor-pointer hover:bg-sp-500">
							<div className="relative h-7 w-7 rounded-full overflow-hidden">
								<Image src={'/profile.jpg'} alt="Profile Picture" fill />
							</div>
							<h1 className="font-semibold text-sm">Elizeu</h1>
							<IoChevronDown className="mx-1" />
						</div>
					</header>

					<section className="mb-4 relative">
						<h1 className="my-6 font-bold text-3xl">Good evening</h1>
						<div className="grid grid-cols-3 gap-5">
							{playlists.slice(0, 6).map((playlist) => (
								<div
									className="rounded-md overflow-hidden bg-sp-text/20 cursor-pointer hover:bg-sp-text/40 transition ease-linear flex items-center group"
									key={playlist.title}
								>
									<div className="relative h-20 w-20">
										<Image src={`/albums/${playlist.cover}`} alt="Album" fill />
									</div>
									<h1 className="font-semibold ml-4">{playlist.title}</h1>
									<div className="w-12 h-12 flex items-center justify-center bg-sp-green rounded-full text-2xl text-sp-900 pl-0.5 ml-auto mr-4 opacity-0 group-hover:opacity-100 transition ease-linear shadow-lg">
										<IoPlay />
									</div>
								</div>
							))}
						</div>
					</section>

					<section className="mt-6 mb-4 relative">
						<div className="mb-6 flex justify-between items-center">
							<h1 className="text-2xl font-semibold">Jump back in</h1>
							<a
								className="text-sm font-semibold text-sp-text hover:underline"
								href="#"
							>
								Show all
							</a>
						</div>

						<div className="flex justify-between">
							{playlists.slice(6, 13).map((playlist) => (
								<div
									className="p-4 bg-sp-600 flex flex-col gap-3 rounded-md hover:bg-sp-500 transition ease-linear cursor-pointer group"
									key={playlist.title}
								>
									<div className="relative w-44 h-44 rounded overflow-hidden">
										<div className="w-12 h-12 flex items-center justify-center bg-sp-green rounded-full text-2xl text-sp-900 pl-0.5 transition ease-linear shadow-lg absolute z-50 right-2  bottom-2 opacity-0 group-hover:opacity-100 transform hover:scale-105">
											<IoPlay />
										</div>
										<Image
											src={`/albums/${playlist.cover}`}
											alt="Album"
											fill
										></Image>
									</div>
									<h1 className="mt-1 text-md font-semibold text-sp-highlight">
										{playlist.title}
									</h1>
									<p className="max-h-12 overflow-hidden text-ellipsis whitespace-nowrap w-44 text-sm text-sp-text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Rem unde deleniti omnis nulla temporibus amet dolor ipsam
										corporis ut architecto, veniam numquam adipisci. Eum
										mollitia consectetur earum sapiente qui praesentium.
									</p>
								</div>
							))}
						</div>
					</section>

					<section className="mt-6 mb-4 relative">
						<div className="mb-6 flex justify-between items-center">
							<h1 className="text-2xl font-semibold">Made for Elizeu</h1>
							<a
								className="text-sm font-semibold text-sp-text hover:underline"
								href="#"
							>
								Show all
							</a>
						</div>

						<div className="flex justify-between">
							{playlists.slice(13, 20).map((playlist) => (
								<div
									className="p-4 bg-sp-600 flex flex-col gap-3 rounded-md hover:bg-sp-500 transition ease-linear cursor-pointer group"
									key={playlist.title}
								>
									<div className="relative w-44 h-44 rounded overflow-hidden">
										<div className="w-12 h-12 flex items-center justify-center bg-sp-green rounded-full text-2xl text-sp-900 pl-0.5 transition ease-linear shadow-lg absolute z-50 right-2  bottom-2 opacity-0 group-hover:opacity-100 transform hover:scale-105">
											<IoPlay />
										</div>
										<Image
											src={`/albums/${playlist.cover}`}
											alt="Album"
											fill
										></Image>
									</div>
									<h1 className="mt-1 text-md font-semibold text-sp-highlight">
										{playlist.title}
									</h1>
									<p className="max-h-12 overflow-hidden text-ellipsis whitespace-nowrap w-44 text-sm text-sp-text">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit.
										Rem unde deleniti omnis nulla temporibus amet dolor ipsam
										corporis ut architecto, veniam numquam adipisci. Eum
										mollitia consectetur earum sapiente qui praesentium.
									</p>
								</div>
							))}
						</div>
					</section>
				</main>
			</div>
			<footer className="bg-sp-600 w-screen h-24 text-sp-highlight p-4 flex fixed bottom-0 ">
				<div className="flex w-full items-center justify-between">
					{/* Song information */}
					<div className="h-full flex items-center gap-2">
						<div className="relative h-full w-16">
							<Image
								src={'/albums/hollywoodsbleeding.jpg'}
								alt={`Hollywood's bleeding`}
								fill
							/>
						</div>
						<div className="flex flex-col gap-0.5">
							<a href="#" className="text-sm text-sp-highlight hover:underline">
								Circles
							</a>
							<a href="#" className="text-xs text-sp-text hover:underline">
								Post Malone
							</a>
						</div>
						<IoHeart className="text-lg text-sp-green ml-2" />
					</div>

					{/* // Misc */}
					<div className="flex items-center text-2xl gap-3 text-sp-text">
						<IoMicOutline className="hover:text-sp-highlight cursor-pointer" />
						<IoAlbumsOutline className="hover:text-sp-highlight cursor-pointer" />
						<IoDesktopOutline className="hover:text-sp-highlight" />
						<IoVolumeLowOutline className="hover:text-sp-highlight" />
						<div className="w-20 h-1 bg-sp-text/40 rounded overflow-hidden">
							<div className="bg-sp-highlight h-full w-1/5"></div>
						</div>
						<IoExpandOutline className="hover:text-sp-highlight" />
					</div>

					{/* // Player */}
				</div>
				<div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-2">
					<div className="flex text-2xl items-center gap-4">
						<IoShuffle className="text-sp-text hover:text-sp-highlight" />
						<IoPlaySkipBack className="text-sp-text hover:text-sp-highlight" />
						<IoPlayCircle className="text-4xl transform hover:scale-110" />
						<IoPlaySkipForward className="text-sp-text hover:text-sp-highlight" />
						<IoRepeat className="text-sp-text hover:text-sp-highlight" />
					</div>
					<div className="flex items-center gap-2">
						<p className="text-xs text-sp-text">1:05</p>
						<div className="w-[600px] h-1 bg-sp-text/40 rounded overflow-hidden">
							<div className="bg-sp-highlight h-full w-[30.232558%]"></div>
						</div>
						<p className="text-xs text-sp-text">3:35</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
