import { useState, useEffect } from 'react'
import { useNavigate, useLocation} from 'react-router-dom';
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faInstagram,
    faTiktok,
    faWhatsapp,
    faXTwitter,
  } from "@fortawesome/free-brands-svg-icons";

import './nav.css'

const navigation = [
    { name: 'Inicio', href: '/Dashboard#1' },
    { name: 'Nosotros', href: '/Nosotros#1' },
    { name: 'Servicios', href: '/Servicios#1' },
  ]

import React from 'react'

export default function nav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate();

    const handleNavigation = (event, path) => {
        event.preventDefault();
        navigate(path);
    };

    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <div className='bg-white'>
            <header className="fixed inset-x-0 top-0 z-50">
                <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8 bg-gray-800">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            alt="QuillaMultiservices"
                            src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2Ftrans_bg.png?alt=media&token=43619ac7-78a1-4dba-acc7-d7e89a0415fa"
                            className="rounded-lg h-12 w-auto bg-white"
                        />
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                        <a key={item.name} href={item.href} onClick={(e) => handleNavigation(e, item.href)} className="text-sm font-semibold leading-6 text-white" >
                            {item.name}
                        </a>
                        ))}
                    </div>
                </nav>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                            alt=""
                            src="https://firebasestorage.googleapis.com/v0/b/portafolio-39d79.appspot.com/o/landingPageContruction%2Ftrans_bg.png?alt=media&token=43619ac7-78a1-4dba-acc7-d7e89a0415fa"
                            className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                        </div>
                        <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                            {navigation.map((item) => (
                                <a
                                key={item.name}
                                href={item.href}
                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                {item.name}
                                </a>
                            ))}
                            </div>
                        </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />cdc
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="flex-col items-center sm:mb-8 sm:flex sm:justify-center">
                        <div className="rounded-full text-center px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Siguenos en nuestras redes sociales.
                        </div>

                        <div className="relative mt-4 rounded-full sm:w-auto px-3 py-1 text-sm leading-6 text-gray-600">
                            <div className='grid grid-cols-5 gap-4'>
                                <button id="facebook" 
                                        className="bg-white sticky duration-500 border-2 border-blue-600 w-12 transform hover:-translate-y-3   h-12 text-2xl rounded-full hover:bg-blue-600 hover:text-white text-blue-600 "
                                        onClick={() => window.open("https://www.instagram.com", "_blank")}
                                >
                                    <FontAwesomeIcon icon={faFacebookF}/>
                                </button>

                                <button id="instagram" className=" border-2 hover:border-0 border-pink-500 bg-gradient-to-b text-2xl hover:from-indigo-600 hover:via-pink-600 hover:to-yellow-500 min-w-wull hover:text-white bg-white text-pink-600 w-12 h-12  transform hover:-translate-y-3 rounded-full duration-500 ">
                                    <FontAwesomeIcon icon={faInstagram}/>
                                </button>

                                <button id="xtwitter" className="bg-white  transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl">
                                    <FontAwesomeIcon icon={faXTwitter}/>
                                </button>
                                <button id="tiktok" className="bg-white transform hover:-translate-y-3  border-2 w-12 h-12 rounded-full duration-500 text-black border-black hover:bg-black hover:text-white text-2xl">
                                    <FontAwesomeIcon icon={faTiktok}/>
                                </button>
                                <button id="whatsapp" 
                                        className="bg-white duration-500 w-12 h-12 border-2 rounded-full border-green-600 transform hover:-translate-y-3  text-2xl text-green-500 hover:bg-green-600 hover:text-white"
                                        onClick={() => window.open("https://wa.me/51994745930?text=Hola%20Maestro%20Mario%2C%20tengo%20una%20consulta%20.", "_blank")}
                                >
                                    <FontAwesomeIcon icon={faWhatsapp}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl animate-typewriter">
                            Quilla Multiservicios
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            👋 Hola somos Quilla Multiservicios, nos dedicamos a proporcionar una amplia gama de servicios de alta 
                            calidad para satisfacer todas las necesidades de nuestros clientes. 
                            Nos especializamos en proyectos de <b>construcción</b>, <b>gasfitería</b>,
                            <b>enchapado de mayólica</b>, etc. Garantizamos resultados excepcionales 
                            en cada proyecto que emprendemos.
                        </p>
                    </div>
                </div>
                <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                >
                <div
                    style={{
                    clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
                </div>
            </div>
        </div>
    )
}
