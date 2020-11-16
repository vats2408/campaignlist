import data from "./data.json";

class CampaignService {
  getAll = () => data;

  getFirstTen = () => data.slice(0, 10);
}

export const campaignService = new CampaignService();