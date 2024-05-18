export default function Price() {
  return (
    <>
      <div className="bg-gray-100 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ціна
            </h2>
          </div>
          <div className="mt-10">
            <div className="max-w-[400px] md:max-w-4xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex flex-col items-center justify-center ">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">
                    Early birds
                  </h3>
                  <p className="mt-4 text-md text-gray-500">до 12.05</p>
                  <div className="mt-6">
                    <div className="text-3xl font-semibold text-gray-900">
                      800 грн
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex flex-col items-center justify-center">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">
                    Золота середина
                  </h3>
                  <p className="mt-4 text-md text-gray-500">3 13.05 по 24.05</p>
                  <div className="mt-6">
                    <div className="text-3xl font-semibold text-gray-900">
                      1000 грн
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6 flex flex-col items-center justify-center">
                  <h3 className="text-2xl leading-6 font-medium text-gray-900">
                    В день заходу
                  </h3>
                  <p className="mt-4 text-md text-gray-500">25.05</p>
                  <div className="mt-6">
                    <div className="text-3xl font-semibold text-gray-900">
                      1 200 грн
                    </div>
                  </div>
                </div>
              </div>

              {/* Plan 2 and Plan 3 */}
              {/* Add similar code for additional plans */}
            </div>
            <div className=" flex items-center justify-center">
              <a
                href="https://www.instagram.com/tr__fest"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 "
              >
                Зареєструватись
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
