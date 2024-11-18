'use client'
import React from 'react'

function Footer() {
    return (
        <footer className=" text-black p-11">
            <div className="container mx-auto px-6 bg-blue-800 bg-opacity-45 backdrop-blur-3xl backdrop-filter border rounded-xl py-10 shadow-xl">
                {/* Footer Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm">
                            Syslab.ai focuses on providing and developing innovative AI solutions. We specialize in deep learning, NLP, and computer vision.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-sm hover:text-gray-400">Home</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400">Services</a></li>
                            <li><a href="#" className="text-sm hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-sm">info@syslab.com</li>
                            <li className="text-sm">+1 (234) 567-890</li>
                            <li className="text-sm">1234 Syslab St, City, Country</li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="text-lg hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Syslab.ai. All rights reserved.
                    </p>
                </div>
            </div>
            {/* <div>
                <p className='text-black'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere et delectus accusamus, doloremque at natus dolorum, praesentium ullam voluptate quis eligendi, ipsam suscipit maxime pariatur. Cupiditate, consectetur voluptatibus velit deserunt maxime odit, assumenda nulla ipsam modi numquam pariatur veniam ullam corporis qui nam, unde est minima quisquam laborum aut. Commodi perspiciatis autem iure maiores deleniti dolorem debitis accusantium mollitia neque voluptatem, nihil at quia, explicabo rerum et doloremque ab. Excepturi officia cupiditate asperiores neque molestiae, iste laudantium, sit aperiam magni, corrupti blanditiis sapiente dolorum vel quo animi accusantium! Cumque est veniam fugit quos facere provident omnis iste ratione reiciendis harum?
                </p>

            </div> */}
        </footer>
    )
}

export default Footer
