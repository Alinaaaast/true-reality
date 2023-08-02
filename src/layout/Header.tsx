export default function Header() {
  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        <div className="w-full h-screen bg-[url('../images/hero_image.jpg')] bg-cover bg-center ">
          <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-20 ">
            <div className="bg-black/70 w-[100%] flex items-center justify-center flex-col py-8">
              <span className="text-white text-5xl md:text-6xl w-1/2 text-center">
                True Reality Festival
              </span>
              <p className="text-white mt-8 text-2xl max-w-xl text-center px-8">
                Місце, де всі свої, де всі такі різні, але чимось дуже схожі на
                тебе. Місце, де ти почуваєш себе вільно.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
