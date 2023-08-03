export default function Header() {
  return (
    <>
      <div className="flex h-screen justify-center items-center flex-col">
        <div className="w-full h-screen bg-[url('../images/header_bg_v.jpeg')] md:bg-[url('../images/header_bg_h.jpeg')] bg-cover bg-center ">
          <div className="w-full h-full flex flex-col justify-center items-center backdrop-brightness-20 ">
            <div className="bg-[#372821]/70 w-[100%] flex items-center justify-center flex-col py-8">
              <span className="text-white text-3xl md:text-6xl w-3/4 text-center uppercase font-bold">
                True Reality Festival
              </span>
              <p className="text-white text-center mt-8">
                13.08
                <br></br> SKVOspace, Київ
              </p>
              <p className="text-white mt-8 text-md md:text-2xl max-w-xl text-center px-8">
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
