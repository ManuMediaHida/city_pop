import Image from 'next/image'

function LayoutSingers({ children }) {
    return (
        <section className="max-w-4xl mx-auto px-4 py-8">
            <div className="flex items-center justify-center mb-4">
                <Image src='/1.png' alt='nuevo' width="100" height="100" className="inline-block" />
            </div>
            <h1 className="text-2xl font-bold text-center mb-4 text-white">Artistas</h1>
            <hr className="mb-8" />
            {children}
        </section>
    );
}

export default LayoutSingers;
