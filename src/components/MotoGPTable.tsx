// MotoGPTable.tsx
import { useMotoGPData } from '../hooks/useMotoGPData';
import { Row } from './Row';
import type { RaceMeta } from '../models';

export function MotoGPTable({ season }: { season: string }) {
  const { seasonRaces, riders, setSortKey } = useMotoGPData(season);

  if (!seasonRaces.length) return <div>Loading…</div>;

  // header click handlers
  const onRaceClick = (race: RaceMeta, metric: 'sprint'|'gp'|'points') =>
    setSortKey({ type: 'race', raceId: race.id, metric });

  return (
    <table className="w-full table-auto border-collapse">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">
            Rider&nbsp;
            <button onClick={() => setSortKey({ type: 'rider', field: 'name' })}>A→Z</button>
            <button onClick={() => setSortKey({ type: 'rider', field: 'teamName' })}>Team</button>
            <button onClick={() => setSortKey({ type: 'rider', field: 'manufacturerName' })}>
              Mfr
            </button>
          </th>
          <th
            className="p-2 border cursor-pointer"
            onClick={() => setSortKey({ type: 'championship' })}
          >
            Champ
          </th>

          {seasonRaces.map(race => (
            <th key={race.id} className="p-2 border text-center">
              <div className="font-semibold">{race.title}</div>
              <div className="flex justify-center space-x-1 mt-1">
                <button onClick={() => onRaceClick(race, 'sprint')} className="px-1">S</button>
                <button onClick={() => onRaceClick(race, 'gp')}     className="px-1">GP</button>
                <button onClick={() => onRaceClick(race, 'points')} className="px-1">Pts</button>
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {riders.map(r => (
          <Row key={r.id} rider={r} races={seasonRaces} />
        ))}
      </tbody>
    </table>
  );
}