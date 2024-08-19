import React from 'react'

export const Aboutus = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 full-screen-background full-screen-background aboutus-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Us</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are a team of passionate designers and developers who are dedicated to creating beautiful and
              functional digital experiences. Our mission is to help businesses and individuals achieve their goals
              through innovative and user-centric solutions.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
