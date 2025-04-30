// models.tsx

export interface RaceMeta {
    id:     string;   // e.g. "qatar"
    title:  string;   // e.g. "Qatar GP"
    round:  number;   // 1, 2, 3, …
    // date:   string;   // ISO string
  }
  
  export interface RaceResult {
    sprint: number;   // finishing position in sprint
    gp:     number;   // finishing position in GP
    points: number;   // points earned
  }
  
  export interface TeamConfig {
    name:           string;
    manufacturerId: string;
    teamId:         string;
  }
  
  export interface Manufacturer {
    id:      string;
    name:    string;
    // logoUrl: string;
  }
  
  export interface RiderRaw {
    id:                string;
    name:              string;
    number:            number;
    teamId:            string;
    manufacturerId:    string;
    raceResults:       Record<string, RaceResult>;
  }
  
  export interface Rider extends RiderRaw {
    championship: {
      position: number;
      points:   number;
    };
    teamName:         string;
    manufacturerName: string;
  }