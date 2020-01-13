export interface IMainInfo {
    name: string;
    occupation: string;
    description: string;
    address: {
      city: string;
      street: string;
      state: string;
      zip: string;
    };
    social: [
      {
        name: string;
        url: string;
        className: string;
      }
    ],
    image: string;
    bio: string;
    phone: string;
    email: string;
    resumedownload: string;
    contactmessage: string;
  }