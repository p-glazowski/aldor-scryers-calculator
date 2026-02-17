import { translateCurrentRep } from '@/functions/functions';
import Image from 'next/image';

interface ResultsProps {
  goalRep: number;
  totalRep: number;
  itemPrice: {
    small: number;
    big: number;
    best: number;
  };
  side: number;
  smallItems: number;
  bigItems: number;
  bestItems: number;
}

export default function Results({
  goalRep,
  totalRep,
  itemPrice,
  side,
  smallItems,
  bigItems,
  bestItems,
}: ResultsProps) {
  const repNeeded = goalRep - totalRep;
  const totalGold =
    (smallItems * itemPrice.small +
      bigItems * itemPrice.big +
      bestItems * itemPrice.best) /
    100;

  return (
    <div className="w-full bg-my-obsidian/90 border-2 border-my-violet rounded-md">
      <div className="p-5 border-b-2 border-my-violet">
        <h2 className="text-2xl font-bold">Results</h2>
      </div>
      <div className="p-5 flex flex-col gap-4">
        <div className="p-3 border rounded-md border-my-gold bg-black/30">
          <h3 className="text-my-lavender">
            Reputation needed to reach {translateCurrentRep(goalRep)}
          </h3>
          <p className="text-xl font-bold text-my-gold">{repNeeded}</p>
        </div>
        <div className="p-3 border rounded-md border-my-gold bg-black/30 gap-4 flex flex-col">
          <h3 className="text-my-lavender">
            Items Required{' '}
            <span className="text-white">(Turn in this order)</span>
          </h3>
          {smallItems !== 0 && (
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
              <div className="flex items-center gap-4">
                <Image
                  src={side === 1 ? '/mark.jpg' : '/sunfury.jpg'}
                  width={800}
                  height={800}
                  alt="Mark icon"
                  className="w-8 h-8 rounded-md"
                />
                <p>
                  <span className="text-my-gold font-bold">{smallItems}</span> x{' '}
                  {side === 1 ? `Mark of Kil'jaeden` : 'Firewing Signet'}
                </p>
              </div>
              <p className="font-bold text-my-gold w-full flex md:w-40 justify-end">
                {((smallItems * itemPrice.small) / 100).toFixed(2)} g
              </p>
            </div>
          )}
          {bigItems !== 0 && (
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
              <div className="flex items-center gap-4">
                <Image
                  src={side === 1 ? '/mark.jpg' : '/signet.jpg'}
                  width={800}
                  height={800}
                  alt="Mark icon"
                  className="w-8 h-8 rounded-md"
                />
                <p>
                  <span className="text-my-gold font-bold">{bigItems}</span> x{' '}
                  {side === 1 ? `Mark of Sargeras` : 'Sunfury Signet'}
                </p>
              </div>
              <p className="font-bold text-my-gold w-full md:w-40 flex justify-end">
                {((bigItems * itemPrice.big) / 100).toFixed(2)} g
              </p>
            </div>
          )}
          {bestItems !== 0 && (
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row">
              <div className="flex items-center gap-4">
                <Image
                  src={side === 1 ? '/fel.jpg' : '/arcane.jpg'}
                  width={800}
                  height={800}
                  alt="Mark icon"
                  className="w-8 h-8 rounded-md"
                />
                <p>
                  <span className="text-my-gold font-bold">{bestItems}</span> x{' '}
                  {side === 1 ? `Fel Armament` : 'Arcane Tome'}
                </p>
              </div>
              <p className="font-bold text-my-gold w-full md:w-40 flex justify-end">
                {((bestItems * itemPrice.best) / 100).toFixed(2)} g
              </p>
            </div>
          )}
        </div>
        <div className="p-3 border rounded-md border-my-gold bg-black/30 flex items-center justify-between">
          <div>
            <h3 className="text-my-lavender">Total Items</h3>
            <p className="text-my-gold font-bold text-xl">
              {bigItems + smallItems + bestItems}
            </p>
          </div>
          <div>
            <h3 className="text-my-lavender">Total Gold</h3>
            <p className="text-xl font-bold text-my-gold text-right">
              {totalGold.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="p-3 border rounded-md border-my-gold bg-black/30">
          <h3 className="text-my-lavender">Breakdown</h3>
          <ul className="list-disc px-4 text-white">
            <li>
              You need: <span className="text-my-gold">{repNeeded}</span>{' '}
              reputation to reach {translateCurrentRep(goalRep)}
            </li>
            <li>
              You need:{' '}
              <span className="text-my-gold">
                {smallItems + bigItems + bestItems}
              </span>{' '}
              items
            </li>
            <li>
              You need:{' '}
              <span className="text-my-gold">{totalGold.toFixed(2)}</span> gold
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
