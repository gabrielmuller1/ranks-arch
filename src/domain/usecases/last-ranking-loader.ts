import { RankingScore } from "../entitites/ranking-score";

export interface LastRankingLoader {
  load: () => Promise<RankingScore[]>;
}
