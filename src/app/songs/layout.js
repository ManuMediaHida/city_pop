import Image from 'next/image'

function LayoutSingers({ children }) {
    return (
 
<section className="max-w-7xl mx-auto px-4 py-8 bg-purple-700 bg-opacity-50 shadow-lg rounded-lg">
            <div className="flex items-center justify-center mb-4">
                <Image src='/1.png' alt='nuevo' width="100" height="100" className="inline-block" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-4 text-white">Canciones</h1>
            <hr className="mb-8 border-gray-300" />
            {children}
        </section>
    );
}

export default LayoutSingers;
