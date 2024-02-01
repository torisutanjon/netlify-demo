import Head from "next/head";

export default async function Home() {
  const date = await fetch(process.env.FETCH_DATE as string);
  const response = await date.json();

  return (
    <>
      <Head>
        <title>Red - Software Developer</title>
      </Head>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-md shadow-md w-96">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Tristan</h1>
            <p className="text-gray-500 text-sm">Iloilo, PH</p>
            <p className="text-gray-500 text-sm">09502099003</p>
            <p className="text-gray-500 text-sm">Software Developer</p>
          </header>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 text-gray-800">About Me</h2>
            <p className="text-gray-700">
              Pong choyla, chichidi kongkoylaa Butsekik ek ek eek Bobo chichang
              chichidi kong tong nang Butsekik ek ek eek
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Skills</h2>
            <ul className="list-disc pl-4 text-gray-700">
              <li>Sleeping</li>
              <li>Sleeping</li>
              <li>Anime and Waifus</li>
              <li>Sleeping</li>
              <li>Sleeping</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Experience</h2>
            <h3 className="text-md font-bold mb-1 text-gray-700">
              Software Developer
            </h3>
            <p className="text-gray-700">
              Mashup Garage - QC | January/2024 - Present
            </p>
            <ul className="list-disc pl-4 text-gray-700">
              <li>
                Collaborated with the backend team to integrate RESTful APIs and
                optimize application performance.
              </li>
              <li>
                Implemented responsive design principles, enhancing the user
                experience across various devices.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 text-gray-800">Education</h2>
            <div className="mb-4">
              <h3 className="text-md font-bold mb-1 text-gray-700">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-700">
                Iloilo Science and Technology University, Bulacan | 2022
              </p>
            </div>
          </section>

          <footer className="text-gray-700">{response.datetime}</footer>
        </div>
      </div>
    </>
  );
}
