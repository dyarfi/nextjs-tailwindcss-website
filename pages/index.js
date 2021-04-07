import Head from "next/head";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mx-auto min-h-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-12">
        <h1 className="text-7xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="">
          Get started by editing <code className="">pages/index.js</code>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-20">
          <a href="https://nextjs.org/docs" className="card-home">
            <h3 className="text-4xl">Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card-home">
            <h3 className="text-4xl">Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card-home"
          >
            <h3 className="text-4xl">Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card-home"
          >
            <h3 className="text-4xl">Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex justify-center align-middle">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="w-28" />
        </a>
      </footer>
    </div>
  );
}
