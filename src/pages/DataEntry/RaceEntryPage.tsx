// src/pages/DataEntry/RaceEntryPage.tsx
import React, { useEffect, useState } from 'react';
import {
  collection,
  doc,
  getDocs,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import type { RaceMeta, RiderRaw, RaceResult } from '../../models';

export function RaceEntryPage() {
  const [seasons, setSeasons]       = useState<string[]>([]);
  const [selectedYear, setYear]     = useState<string>('');
  const [races, setRaces]           = useState<RaceMeta[]>([]);
  const [riders, setRiders]         = useState<RiderRaw[]>([]);
  
  const [riderId,     setRiderId]   = useState<string>('');
  const [raceId,      setRaceId]    = useState<string>('');
  const [sprint,      setSprint]    = useState<number>(0);
  const [gp,          setGp]        = useState<number>(0);
  const [points,      setPoints]    = useState<number>(0);
  const [statusMsg,   setStatusMsg] = useState<string>('');

  // 1) load seasons list
  useEffect(() => {
    getDocs(collection(db, 'seasons'))
      .then(snap => setSeasons(snap.docs.map(d => d.id)))
      .catch(console.error);
  }, []);

  // 2) when year changes, load races + riders
  useEffect(() => {
    if (!selectedYear) return;

    // races array from season doc
    getDoc(doc(db, 'seasons', selectedYear))
      .then(snap => {
        const data = snap.data();
        setRaces((data?.races as RaceMeta[]) || []);
        // reset selections
        setRaceId(''); 
      })
      .catch(console.error);

    // load riderResults docs
    getDocs(collection(db, 'seasons', selectedYear, 'riderResults'))
      .then(snap => {
        const list: RiderRaw[] = [];
        snap.forEach(d => list.push({ id: d.id, ...(d.data() as any) }));
        setRiders(list);
        setRiderId('');
      })
      .catch(console.error);
  }, [selectedYear]);

  // 3) handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!(selectedYear && riderId && raceId)) {
      setStatusMsg('Please select year, rider, and track.');
      return;
    }
    const ref = doc(db, 'seasons', selectedYear, 'riderResults', riderId);
    const newResult: RaceResult = { sprint, gp, points };
    try {
      await updateDoc(ref, { [`raceResults.${raceId}`]: newResult });
      setStatusMsg(`✔ Updated ${raceId} for rider ${riderId}`);
    } catch (err) {
      console.error(err);
      setStatusMsg('❌ Update failed—check console.');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Enter Race Results</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Season picker */}
        <label className="block">
          Season Year
          <select
            className="mt-1 block w-full border rounded p-2"
            value={selectedYear}
            onChange={e => setYear(e.target.value)}
          >
            <option value="">-- select year --</option>
            {seasons.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </label>

        {/* Rider picker */}
        <label className="block">
          Rider
          <select
            className="mt-1 block w-full border rounded p-2"
            value={riderId}
            onChange={e => setRiderId(e.target.value)}
            disabled={!riders.length}
          >
            <option value="">-- select rider --</option>
            {riders.map(r => (
              <option key={r.id} value={r.id}>
                {r.name} #{r.number}
              </option>
            ))}
          </select>
        </label>

        {/* Race/Track picker */}
        <label className="block">
          Track (Race)
          <select
            className="mt-1 block w-full border rounded p-2"
            value={raceId}
            onChange={e => setRaceId(e.target.value)}
            disabled={!races.length}
          >
            <option value="">-- select race --</option>
            {races.map(r => (
              <option key={r.id} value={r.id}>
                {r.round}. {r.title}
              </option>
            ))}
          </select>
        </label>

        {/* Sprint position */}
        <label className="block">
          Sprint Position
          <input
            type="number" min={0}
            className="mt-1 block w-full border rounded p-2"
            value={sprint}
            onChange={e => setSprint(+e.target.value)}
          />
        </label>

        {/* GP position */}
        <label className="block">
          GP Position
          <input
            type="number" min={0}
            className="mt-1 block w-full border rounded p-2"
            value={gp}
            onChange={e => setGp(+e.target.value)}
          />
        </label>

        {/* Points */}
        <label className="block">
          Points Earned
          <input
            type="number" min={0}
            className="mt-1 block w-full border rounded p-2"
            value={points}
            onChange={e => setPoints(+e.target.value)}
          />
        </label>

        <div className="col-span-full text-right">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
            disabled={!raceId || !riderId}
          >
            Save Result
          </button>
        </div>
      </form>

      {statusMsg && (
        <div className="mt-4 text-sm text-gray-700">{statusMsg}</div>
      )}
    </div>
  );
}