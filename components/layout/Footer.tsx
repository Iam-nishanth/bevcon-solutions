"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/content/company";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-gray-200">
			{/* Main Footer */}
			<div className="container mx-auto px-4 py-16">
				<div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
					{/* Company Info */}
					<div className="flex-1 max-w-2xl">
						<div className="mb-4">
							<Image src="/images/bevcon-solutions-logo.svg" alt="Bevcon Solutions" width={200} height={50} />
						</div>
						<p className="text-sm mb-4" dangerouslySetInnerHTML={{ __html: companyInfo.taglineHtml }}></p>
						<p className="text-base text-gray-400 mb-6">
							{/* Backed by the proven expertise of Bevcon Zentry (Supplier of Industrial Doors & Docking Systems), Spareng Incorporated
							(Supplier of Bulk Material Handling Equipment Spares & Services), and JR Fibreglass Industries (Supplier of Fume Extraction & FRP/GRP Equipment). */}
						Empowering industries through innovation, reliability, and performance
						</p>
					</div>

					{/* Support */}
					<div className="md:mt-24">
						<h3 className="font-heading font-semibold text-slate-600 mb-4">Support</h3>
						<ul className="space-y-2 text-sm text-neutral-600">
							<li>
								<Link href="/industries" className="hover:text-black transition-colors">
									Industries
								</Link>
							</li>
							<li>
								<Link href="/quote" className="hover:text-black transition-colors">
									Request Quote
								</Link>
							</li>
							<li>
								<Link href="/contact" className="hover:text-black transition-colors">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="border-t border-gray-200">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
						<div>
							<div>
								© {currentYear} {companyInfo.name}. All rights reserved. 
								<span className="mx-2 text-gray-300">|</span> 
								<span className="text-gray-500">ABN: 35 691 530 533</span>
							</div>
							<div className="mt-1">
								Made by{" "}
								<a href="mailto:nishanth_alapati@outlook.com" className="hover:text-primary-400 transition-colors">
									Nishanth
								</a>
							</div>
						</div>
						<div className="flex space-x-6 mt-4 md:mt-0">
							<Link href="/privacy-policy" className="hover:text-black transition-colors">
								Privacy Policy
							</Link>
							{/* <Link href="/products" className="hover:text-black transition-colors">
								View Products
							</Link> */}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
