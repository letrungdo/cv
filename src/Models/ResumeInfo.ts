export interface IResumeInfo {
  skillmessage: string;
  education: [
    {
      school: string;
      degree: string;
      graduated: string;
      description: string;
    }
  ];
  work: [
    {
      company: string;
      title: string;
      years: string;
      description: string;
    }
  ];
  skills: [
    {
      name: string;
      level: string;
    }
  ];
}
