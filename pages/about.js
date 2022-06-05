import Link from "next/link"

export default function IndexPage() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="rounded"
            alt="hero"
            src="https://pbs.twimg.com/media/EFb8OpDW4AUY9nM?format=jpg&name=large"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Ezequiel Nuske
          </h1>
          <p className="mb-8 leading-relaxed">
            Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
            swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end">
            <Link href="/">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
