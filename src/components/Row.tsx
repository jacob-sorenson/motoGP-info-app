// Row.tsx
import type { Rider, RaceMeta } from '../models';

export function Row({
  rider,
  races
}: {
  rider: Rider;
  races: RaceMeta[];
}) {
  return (
    <tr className="hover:bg-gray-50">
      {/* Rider info */}
      <td className="p-2 border align-top">
        <div className="font-semibold">{rider.name} #{rider.number}</div>
        <div>{rider.teamName}</div>
        <div className="text-sm text-gray-600">{rider.manufacturerName}</div>
      </td>

      {/* Championship */}
      <td className="p-2 border text-center">
        <div>#{rider.championship.position}</div>
        <div>{rider.championship.points} pts</div>
      </td>

      {/* One cell per race */}
      {races.map(race => {
        const res = rider.raceResults[race.id] || { sprint: 0, gp: 0, points: 0 };
        return (
          <td key={race.id} className="p-2 border">
            {/* sprint */}
            <div className={podiumClass(res.sprint)}>{res.sprint}</div>
            {/* GP */}
            <div className={podiumClass(res.gp)}>{res.gp}</div>
            {/* points */}
            <div>{res.points}</div>
          </td>
        );
      })}
    </tr>
  );
}

// helper to color 1st/2nd/3rd
function podiumClass(pos: number): string {
  if (pos === 1) return 'bg-yellow-200 text-center';
  if (pos === 2) return 'bg-gray-200 text-center';
  if (pos === 3) return 'bg-orange-200 text-center';
  return 'text-center';
}