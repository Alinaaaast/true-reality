export default function Place() {
  return (
    <>
      <div
        id="place"
        className="flex items-center justify-center flex-col pt-28"
      >
        <h2 className="text-4xl font-bold pb-8 mx-4 ">Місце</h2>
        <div className="flex items-center justify-center  flex-col">
          <span className="text-3xl text-black">Skvo space </span>
          <p className="my-2"> Оазис твого міста, Київ</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 my-10 mx-4 container">
          <div className="mx-4">
            <div className="md:w-[400px]">
              <img
                src="../images/skvo_space.jpeg"
                className="w-[100%] "
                alt="Skvo space"
              />
            </div>
          </div>
          <div className="mx-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.9891546646027!2d30.569806576368595!3d50.44130267159048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce481b488541%3A0xed9a54281f4fc8c2!2z0KHQutCy0L7RgNC10YfQvdC40LogLSDQmtCw0YTQtSDQvdCwINC00LXRgNC10LLRjNGP0YU!5e0!3m2!1sru!2sua!4v1690971636915!5m2!1sru!2sua"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
