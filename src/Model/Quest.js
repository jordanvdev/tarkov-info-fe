export class Quest{
    Id;
    Title;
    Wiki;
    ExperienceReward;
    ReputationReward;
    Trader;


    constructor(id,title, wiki, experienceReward, reputationReward, trader){
        this.Id = id;
        this.Title = title;
        this.Wiki = wiki;
        this.ExperienceReward = experienceReward;
        this.ReputationReward = reputationReward;
    }
  }
