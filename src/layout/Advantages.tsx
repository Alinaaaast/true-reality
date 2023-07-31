export default function Advantages() {
  return (
    <>
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl
            sed mi fringilla hendrerit. Vestibulum pretium cursus mauris, ut
            rhoncus enim blandit in.
          </p>
        </div>
      </section>

      <section id="classes" className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Our Classes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md">
              <h3 className="text-xl font-bold mb-2">Hatha Yoga</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md">
              <h3 className="text-xl font-bold mb-2">Vinyasa Flow</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md">
              <h3 className="text-xl font-bold mb-2">Restorative Yoga</h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
