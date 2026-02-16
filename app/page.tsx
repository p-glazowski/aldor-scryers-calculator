import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full flex-1 bg-black/70 text-white p-6">
      <div className="max-w-100 mx-auto flex flex-col gap-10">
        <header className="flex flex-row items-center justify-between">
          <div className="rounded-md overflow-hidden">
            <Image
              src="/mark.jpg"
              alt="Mark of Sergaras Icon"
              width={56}
              height={56}
            />
          </div>
          <h1 className="text-center text-3xl">
            <span className="text-my-lavender">Aldor</span> |{' '}
            <span className="text-my-turquoise">Scryer</span> <br />
            <span className="text-xl font-light">Reputation Calculator</span>
          </h1>
          <div className="rounded-md overflow-hidden">
            <Image
              src="/signet.jpg"
              alt="Mark of Sergaras Icon"
              width={56}
              height={56}
            />
          </div>
        </header>
        <main className="flex flex-col items-center gap-4">
          <h2 className="text-center text-sm font-bold">
            Calculate how many marks or signets you need to hit your goal
          </h2>
          <div className="w-full border-2 bg-my-obsidian/90 rounded-md border-my-violet text-my-sand">
            <div className="border-b-2 border-my-violet p-5 font-bold flex gap-2 items-center">
              <Image
                src="/calc.svg"
                width={800}
                height={800}
                alt="Calculator icon"
                className="w-7"
              />
              <h3 className="text-xl text-white">Calculator Settings</h3>
            </div>
            <div className="flex flex-col gap-8 p-5">
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-white">
                  Current reputation
                </h3>
                <div className="flex flex-row gap-4">
                  <div className="flex-1">
                    <button className="p-2 rounded-md border w-full flex flex-row justify-between items-center border-my-violet text-my-lavender ">
                      <span>Friendly</span> <span>v</span>
                    </button>
                  </div>
                  <div className="basis-1/4">
                    <input
                      type="number"
                      name="rep"
                      id="rep"
                      className="w-full h-full border border-my-violet text-my-lavender px-2 rounded-md"
                      placeholder="0"
                    />
                  </div>
                </div>
                <p className="text-xs -mt-2 text-my-lavender">
                  Reputation range: 0-6000
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-white">
                  Goal Reputation
                </h3>
                <div className="flex flex-row gap-4">
                  <div className="flex-1">
                    <button className="p-2 rounded-md border w-full flex flex-row justify-between items-center border-my-violet text-my-lavender ">
                      <span>Friendly</span> <span>v</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-sm text-white">
                  Marks/Signets Price (gold)
                </h3>
                <div className="flex flex-row gap-4">
                  <Image
                    src="/gold.svg"
                    width={800}
                    height={800}
                    alt="Gold coins incon"
                    className="w-6"
                  />
                  <div className="flex-1">
                    <input
                      type="number"
                      name="rep"
                      id="rep"
                      className="w-full h-full border border-my-violet text-my-lavender p-2 rounded-md"
                      placeholder="0"
                    />
                  </div>
                </div>
                <p className="text-xs -mt-2 text-my-lavender">
                  Price in gold (e.g. 2 gold 33 silver = 2,33)
                </p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <div>
                  <div className="p-1 w-10 rounded-2xl bg-my-violet">
                    <div className="w-4 h-4 bg-my-obsidian rounded-[50%]"></div>
                  </div>
                </div>
                <div className="text-xs text-my-lavender">
                  <p className="font-bold">Human Racial (Doplomacy)</p>
                  <p className="text-my-violet">
                    Humans gain 10% more reputation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
