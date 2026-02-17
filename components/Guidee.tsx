interface GuideeProps {
  side: number;
}

export default function Guidee({ side }: GuideeProps) {
  return (
    <div
      className="bg-my-obsidian/90 w-full border-2 border-my-violet rounded-md"
      id="guide"
    >
      <div className="p-5 border-b-2 border-my-violet font-bold text-xl">
        <h2 className="text-2xl">Reputation Guide</h2>
      </div>
      <div className="p-5 text-sm flex flex-col gap-5">
        <h3>
          You can obtain reputation with{' '}
          <span className="font-bold">
            <span className="text-my-lavender">The Aldor</span> /{' '}
            <span className="text-my-turquoise">The Scryers</span>
          </span>{' '}
          with the following turn-ins:
        </h3>
        <ul className="list-disc px-5 flex flex-col gap-2">
          <li>
            {side === 1 ? 'Dreadfang Venom Sac' : 'Dampscale Basilisk Eye'}{' '}
            turn-ins: <span className="text-red-500">Hated</span> to{' '}
            <span className="text-yellow-300">Neutral</span>
          </li>
          <li>
            {side === 1 ? `Mark of Kil'jaeden` : 'Firewing Signet'} turn-ins:{' '}
            <span className="text-yellow-300">Neutral</span> to <span></span>
            <span className="text-green-400">Honored</span>
          </li>
          <li>
            {side === 1
              ? `Mark of Sargeras and Fel Armament`
              : 'Sunfury Signets and Arcane Tome'}
            s turn-ins: <span className="text-yellow-300">Neutral</span> to{' '}
            <span className="text-cyan-400">Exalted</span>
          </li>
        </ul>
        <p className="font-bold text-xl text-white">
          The calculator will choose{' '}
          <span className="uppercase text-my-gold">the cheapest</span> possible
          option!
        </p>
      </div>
    </div>
  );
}
