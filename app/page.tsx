'use client';

import Guidee from '@/components/Guidee';
import Results from '@/components/Results';
import { reputationData } from '@/data/reputation';
import Image from 'next/image';
import { use, useState } from 'react';
import { translateCurrentRep } from '@/functions/functions';
import { motion } from 'motion/react';

export default function Home() {
  const [currentRepLevel, setCurrentRepLevel] = useState(0);
  const [userRep, setUserRep] = useState(0);
  const totalRep = currentRepLevel + userRep;
  const [openCurrentRep, setOpenCurrentRep] = useState(false);
  const [goalRep, setGoalRep] = useState(42000);
  const [openGoalRep, setOpenGoalRep] = useState(false);
  const [itemPrice, setItemPrice] = useState({ small: 80, big: 90 });
  const [humanRacial, setHumanRacial] = useState(false);
  const [side, setSide] = useState(1);

  function handleNumberChange(e: any) {
    const { value } = e.target;

    if (currentRepLevel === 3000) {
      setUserRep(Number(value) > 5999 ? 5999 : Number(value));
      return;
    }

    if (currentRepLevel === 9000) {
      setUserRep(Number(value) > 11999 ? 11999 : Number(value));
      return;
    }

    if (currentRepLevel === 21000) {
      setUserRep(Number(value) > 20999 ? 20999 : Number(value));
      return;
    }

    if (currentRepLevel === 3000) {
      setUserRep(Number(value) > 5999 ? 5999 : Number(value));
      return;
    }

    setUserRep(Number(value) > 2999 ? 2999 : Number(value));
  }

  function handleItemPrice(e: any) {
    const { name, value } = e.target;
    const numValue = value === '' ? 0 : Number(value.replace(/[^0-9.]/g, '')); // Clean + handle empty
    setItemPrice((prev) => ({ ...prev, [name]: numValue }));
  }

  function getLevelRange(rep: number) {
    if (rep > 41999) return '0 - 999';

    if (rep > 20999) return '0 - 20999';

    if (rep > 8999) return '0 - 11999';

    if (rep > 2999) return '0 - 5999';

    return '0 - 2999';
  }

  const calculateItemsNeeded = (
    currentTotalRep: number,
    goalTotalRep: number,
  ) => {
    const SMALL_REP_PER_ITEM = humanRacial ? 25 + 25 / 10 : 25; // Marks of Kil'jaeden
    const BIG_REP_PER_ITEM = humanRacial ? 25 + 25 / 10 : 25; // Marks of Sargeras

    if (itemPrice.big <= itemPrice.small) {
      const smallItems = 0;

      const bigItems = Math.ceil(
        (goalTotalRep - currentTotalRep) / BIG_REP_PER_ITEM,
      );

      return { smallItems, bigItems };
    }

    const HONORED_REP = 9000; // Your data: Honored.have

    // Small items to Honored (max 9k total)
    const repToHonored = Math.max(
      0,
      Math.min(HONORED_REP - currentTotalRep, HONORED_REP),
    );
    const smallItems = Math.ceil(repToHonored / SMALL_REP_PER_ITEM);

    // Big items: Honored (9k) to goal
    const repForBigItems = Math.max(
      0,
      goalTotalRep - Math.max(currentTotalRep, HONORED_REP),
    );
    const bigItems = Math.ceil(repForBigItems / BIG_REP_PER_ITEM);

    return { smallItems, bigItems };
  };

  const { smallItems, bigItems } = calculateItemsNeeded(totalRep, goalRep);

  return (
    <div className="w-full flex-1 bg-black/70 text-white p-6 pb-30">
      <div className="max-w-300 mx-auto flex flex-col gap-10">
        <header className="flex flex-row items-center gap-4 justify-center md:gap-20">
          <div className="rounded-md overflow-hidden">
            <Image
              src="/mark.jpg"
              alt="Mark of Sergaras Icon"
              width={56}
              height={56}
            />
          </div>
          <h1 className="text-center text-3xl text-my-gold">
            <span className="text-my-lavender">Aldor</span> |{' '}
            <span className="text-my-turquoise">Scryers</span> <br />
            <span className="text-xl font-light text-my-gold">
              Reputation Calculator
            </span>
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
        <main className="flex flex-col items-center gap-10">
          <div className="text-center flex flex-col gap-2">
            <h2 className="text-center text-sm font-bold">
              Calculate how many marks or signets you need to hit your goal
            </h2>
            <a
              className="text-my-gold underline underline-offset-2"
              href="#guide"
            >
              Read the reputation guide
            </a>
          </div>
          <div className="flex flex-col items-center w-full gap-10 md:flex-row md:items-stretch">
            <div className="w-full border-2 bg-my-obsidian/90 rounded-md border-my-violet text-my-sand">
              <div className="border-b-2 border-my-violet p-5 font-bold flex justify-between items-center flex-col gap-3 md:flex-row">
                <div className="flex gap-2">
                  <Image
                    src="/calc.svg"
                    width={800}
                    height={800}
                    alt="Calculator icon"
                    className="w-7"
                  />
                  <h3 className="text-2xl text-white">Calculator Settings</h3>
                </div>
                <div className="flex gap-4">
                  <button
                    className={`bg-my-gold text-my-obsidian py-1 px-2 rounded-md cursor-pointer ${side !== 1 ? 'bg-my-sand/30' : 'bg-my-gold'} leading-5`}
                    onClick={() => {
                      setSide(1);
                    }}
                  >
                    The Aldor
                  </button>
                  <button
                    className={`bg-my-gold text-my-obsidian py-1 px-2 rounded-md cursor-pointer ${side !== 2 ? 'bg-my-sand/30' : 'bg-my-gold'} leading-5`}
                    onClick={() => {
                      setSide(2);
                    }}
                  >
                    The Scryers
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-8 p-5">
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-sm text-white">
                    Current reputation
                  </h3>
                  <div className="flex flex-row gap-4">
                    <div className="flex-1 relative">
                      <button
                        className="p-2 rounded-md border w-full flex flex-row justify-between items-center border-my-violet text-my-lavender cursor-pointer"
                        onClick={() => {
                          setOpenGoalRep(false);
                          setOpenCurrentRep((pS) => !pS);
                        }}
                      >
                        <span>{translateCurrentRep(currentRepLevel)}</span>{' '}
                        <span>v</span>
                      </button>
                      {openCurrentRep && (
                        <div className="absolute bg-my-obsidian w-full border rounded-md top-13 overflow-hidden z-10">
                          <ul className="flex flex-col gap-2">
                            {reputationData.map(
                              (item) =>
                                item.id < 4 &&
                                item.have + item.need <= goalRep && (
                                  <button
                                    key={item.id}
                                    className={`p-2 ${currentRepLevel === item.have ? 'bg-my-gold text-my-obsidian' : 'hover:bg-my-lavender/10'} cursor-pointer`}
                                    onClick={() => {
                                      setCurrentRepLevel(item.have);
                                      setUserRep(0);
                                      setOpenCurrentRep(false);
                                    }}
                                  >
                                    {item.name}
                                  </button>
                                ),
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="basis-1/4">
                      <input
                        type="number"
                        name="rep"
                        id="rep"
                        className="w-full h-full border border-my-violet text-my-lavender px-2 rounded-md"
                        placeholder="0"
                        value={userRep === 0 ? '' : userRep}
                        onChange={handleNumberChange}
                      />
                    </div>
                  </div>
                  <p className="text-xs -mt-2 text-my-lavender">
                    Reputation range: {getLevelRange(currentRepLevel)}
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-sm text-white">
                    Goal Reputation
                  </h3>
                  <div className="flex flex-row gap-4">
                    <div className="flex-1 relative">
                      <button
                        className="p-2 rounded-md border w-full flex flex-row justify-between items-center border-my-violet text-my-lavender cursor-pointer"
                        onClick={() => {
                          setOpenCurrentRep(false);
                          setOpenGoalRep((pS) => !pS);
                        }}
                      >
                        <span>{translateCurrentRep(goalRep)}</span>{' '}
                        <span>v</span>
                      </button>
                      {openGoalRep && (
                        <div className="absolute bg-my-obsidian w-full border rounded-md top-13 overflow-hidden z-20">
                          <ul className="flex flex-col gap-2">
                            {reputationData.map(
                              (item) =>
                                item.have > currentRepLevel && (
                                  <button
                                    key={item.id}
                                    className={`p-2 ${goalRep === item.have ? 'bg-my-gold text-my-obsidian' : 'hover:bg-my-lavender/10'} cursor-pointer`}
                                    onClick={() => {
                                      setGoalRep(item.need);
                                      setOpenGoalRep(false);
                                    }}
                                  >
                                    {item.name}
                                  </button>
                                ),
                            )}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-sm text-white">
                    {side === 1 ? 'Marks' : 'Signets'} Price
                  </h3>
                  <div className="flex flex-row gap-10 items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <Image
                        src={side === 1 ? '/mark.jpg' : '/sunfury.jpg'}
                        width={800}
                        height={800}
                        alt="Gold coins incon"
                        className="w-8 h-8 rounded-md"
                      />
                      <p>
                        {side === 1 ? `Mark of Kil'jaeden` : 'Firewing Signet'}{' '}
                        price
                      </p>
                    </div>
                    <div className="basis-1/3 relative">
                      <p className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-300">
                        s
                      </p>
                      <input
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9]*"
                        name="small"
                        id="rep"
                        className="w-full h-full border border-my-violet text-my-lavender p-2 rounded-md"
                        placeholder="0"
                        value={itemPrice.small}
                        onChange={handleItemPrice}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row gap-10 items-center justify-between">
                    <div className="flex gap-4 items-center">
                      <Image
                        src={side === 1 ? '/mark.jpg' : '/signet.jpg'}
                        width={800}
                        height={800}
                        alt="Gold coins incon"
                        className="w-8 h-8 rounded-md"
                      />
                      <p>
                        {side === 1 ? `Mark of Sargeras` : 'Sunfury Signet'}{' '}
                        price
                      </p>
                    </div>
                    <div className="basis-1/3 relative">
                      <p className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-300">
                        s
                      </p>
                      <input
                        type="text"
                        inputMode="decimal"
                        pattern="[0-9]*"
                        name="big"
                        id="rep"
                        className="w-full h-full border border-my-violet text-my-lavender p-2 rounded-md"
                        placeholder="0"
                        value={itemPrice.big}
                        onChange={handleItemPrice}
                      />
                    </div>
                  </div>
                  <p className="text-xs -mt-2 text-my-gold text-center">
                    Price in{' '}
                    <span className="text-gray-300 font-bold">SILVER</span>{' '}
                    (e.g. 2 gold 33 silver ={' '}
                    <span className="text-gray-300 font-bold">233</span>)
                  </p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div>
                    <button
                      className={`p-1 w-10 cursor-pointer rounded-2xl bg-my-violet flex items-center ${humanRacial ? 'justify-end' : 'justify-start'}`}
                      onClick={() => {
                        setHumanRacial((pS) => !pS);
                      }}
                    >
                      <motion.div
                        className={`w-4 h-4 rounded-[50%] ${humanRacial ? 'bg-my-gold' : 'bg-my-obsidian'}`}
                        layout
                        transition={{
                          type: 'spring',
                          visualDuration: 0.2,
                          bounce: 0.2,
                        }}
                      ></motion.div>
                    </button>
                  </div>
                  <div className="text-xs text-my-lavender">
                    <p className="font-bold">Human Racial (Doplomacy)</p>
                    <p className="text-my-gold">
                      Humans gain 10% more reputation
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Results
              totalRep={totalRep}
              goalRep={goalRep}
              itemPrice={itemPrice}
              smallItems={smallItems}
              bigItems={bigItems}
              side={side}
            />
          </div>
          <Guidee side={side} />
        </main>
      </div>
    </div>
  );
}
