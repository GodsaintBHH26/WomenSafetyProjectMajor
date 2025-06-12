import React from 'react'

function Footer() {
  return (
    <>
    <footer className="p-6 bg-gradient-to-tr from-[#002B3D] to-[#3B3B3B] dark:text-gray-100">
	<div className="container grid grid-cols-2 mx-auto gap-y-8 sm:grid-cols-3 justify-between md:grid-cols-4">
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Getting started</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Release Notes</a>
				<a rel="noopener noreferrer" href="#">Upgrade Guide</a>
				<a rel="noopener noreferrer" href="#">Browser Support</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Customization</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">Custom Routes</a>
				<a rel="noopener noreferrer" href="#">Theme Configuration</a>
				<a rel="noopener noreferrer" href="#">Customizing Colors</a>
				<a rel="noopener noreferrer" href="#">Location Sharing</a>
			</div>
		</div>
		<div className="flex flex-col space-y-4">
			<h2 className="font-medium">Community</h2>
			<div className="flex flex-col space-y-2 text-sm dark:text-gray-400">
				<a rel="noopener noreferrer" href="#">GitHub</a>
				<a rel="noopener noreferrer" href="#">Discord</a>
				<a rel="noopener noreferrer" href="#">Twitter</a>
				<a rel="noopener noreferrer" href="#">YouTube</a>
			</div>
		</div>
	</div>
	<div className="flex items-center justify-center px-6 pt-12 text-sm">
		<span className="dark:text-gray-500">© Copyright 1986. All Rights Reserved.</span>
	</div>
</footer>
    </>
  )
}

export default Footer