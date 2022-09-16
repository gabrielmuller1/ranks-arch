import { LastRankingLoader } from "./../../domain/usecases/last-ranking-loader";
import { RankingScoreViewModel } from "./../view-models/ranking-score";
import { Controller, HttpResponse, ok, serverError } from "../contracts";

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load();
      return ok(RankingScoreViewModel.mapCollection(ranking));
    } catch (error) {
      return serverError(error);
    }
  }
}
