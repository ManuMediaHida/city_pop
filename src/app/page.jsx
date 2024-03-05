import Head from 'next/head';
import Image from 'next/image';

export default function CityPop() {
  return (
    <div>
      <Head>
        <title>El Mundo del City Pop</title>
        <meta name="description" content="Explora la cultura del City Pop, el género musical de Japón." />
      </Head>

      <div className="text-white">
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">

          <section className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">¡Bienvenido al mundo del City Pop!</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Sumérgete en la fascinante cultura del City Pop, un género musical que capturó el espíritu de la vibrante escena urbana de Japón.
            </p>
          </section>

          <section className="flex flex-wrap justify-between items-center bg-teal-500 text-black rounded-lg shadow-xl p-8 mb-20">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-5">Historia</h2>
              <p className="text-lg mb-6">
                El City Pop emergió en un momento de efervescencia cultural en Japón, inspirado por una combinación ecléctica de géneros. Con artistas icónicos liderando el movimiento, capturó a audiencias con sus melodías pegajosas y estilos visuales únicos.
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <Image src="/2.jpg" alt="City Pop Historia" width={320} height={180} className="rounded-lg shadow-lg"/>
            </div>
          </section>

      <div className="mb-20 flex justify-center relative group">
        <div className="inline-block relative">
          <Image src="/maxresdefault.jpg" alt="Imagen Destacada City Pop" width={640} height={360} className="rounded-lg shadow-xl"/>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 ease-linear rounded-lg"
               style={{padding: '0 20px'}}>
            <p className="opacity-0 group-hover:opacity-100 text-white text-lg md:text-xl lg:text-2xl font-bold text-center transition-opacity duration-700 ease-linear">
              Catalogada por los expertos como uno de los mejores géneros musicales
            </p>
          </div>
        </div>
      </div>

     <section className="flex flex-wrap justify-between items-center bg-teal-700 text-white rounded-lg shadow-xl p-8">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-6 lg:mb-0">
              <Image src="/CityPop.jpg" alt="City Pop Influencia" width={320} height={180} className="rounded-lg shadow-lg"/>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-5">Influencia</h2>
              <p className="text-lg">
                A pesar de su breve período de popularidad, el City Pop ha inspirado una amplia gama de géneros musicales contemporáneos, reflejando su legado perdurable.
              </p>
            </div>
          </section>

          <section className="text-center mt-20">
            <h2 className="text-4xl font-bold mb-6">Únete a nosotros en la exploración del City Pop</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Únete a nosotros mientras exploramos la magia del City Pop, desde sus humildes comienzos hasta su impacto duradero en la escena musical global.
            </p>
            <div className="flex justify-center">
              <a href="/auth/register" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                Descubre más
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
