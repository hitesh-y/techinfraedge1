const AboutLight = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="w-full md:w-1/2 lg:w-2/5">
                        <h5 className="text-indigo-600 font-medium mb-3 uppercase">CONSULTING EXCELLENCE</h5>
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Best pathway to our clients.</h1>
                        <p className="text-gray-600 mb-6">Our consulting process begins with a 
                            thorough assessment of your current IT 
                            infrastructure, workflows, and pain points.</p>
                        <ul className="space-y-2 text-gray-600">
                            <li className="flex items-center">
                                <i className="las la-check text-indigo-600 mr-2" /> 24/7 Full Service Support
                            </li>
                            <li className="flex items-center">
                                <i className="las la-check text-indigo-600 mr-2" /> Immediate Response
                            </li>
                            <li className="flex items-center">
                                <i className="las la-check text-indigo-600 mr-2" /> Easy to Approach us
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5">
                        <div className="grid gap-6">
                            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm relative">
                                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                                    1
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">Discovery and Analysis</h3>
                                    <p className="text-gray-600">Perform a thorough analysis of the client's existing IT systems and infrastructure.</p>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm relative">
                                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                                    2
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">Tailored Solutions</h3>
                                    <p className="text-gray-600">Develop customized IT solutions based on the analysis phase to meet specific needs.</p>
                                </div>
                            </div>
                            
                            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm relative">
                                <div className="absolute -left-3 top-6 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                                    3
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold mb-2 text-gray-800">Deployment and Support</h3>
                                    <p className="text-gray-600">Implement solutions and provide ongoing support with regular communication.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutLight;