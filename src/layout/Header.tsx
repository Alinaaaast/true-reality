export default function Header() {
  return (
    <>
      <div class="flex h-screen justify-center items-center flex-col">
        <div class="w-full h-screen bg-[url('images/hero_image.jpg')] bg-cover bg-center ">
          <div class="w-full h-full flex  flex-col justify-center items-center backdrop-brightness-50">
            <span class="text-white text-4xl w-1/2 text-center">
              True Reality Festival
            </span>
            <p className="text-white mt-4">
              - місце, де всі свої, де всі такі різні, але чимось дуже схожі на
              тебе. Місце, де ти почуваєш себе вільно.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
