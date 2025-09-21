const tabsData = [
  {
    id: "policies",
    label: "Policies",
    count: 0,
    subTabs: [
      {
        id: "policies2",
        label: "Policies",
        content: `policies content...`
      }
    ]
  },
  {
    id: "pipline-cards",
    label: "Pipline Cards",
    count: 0,
    subTabs: [
      {
        id: "pipline-cards2",
        label: "Pipline Cards",
        content: `Cipline Cards content...`
      }
    ]
  },
  {
    id: "files",
    label: "Files",
    count: 0,
    subTabs: [
      {
        id: "files2",
        label: "Files",
        content: `files content`
      }
    ]
  },
  {
    id: "communications",
    label: "Communications",
    count: 2,
    subTabs: [
      {
        id: "all",
        label: "All",
        contentType: "cards",
        cards: [
          {
            type: "Email",
            time: `James Addam 09/18/2025, 3:15 PM`,
            subject: `Subject: sample test`,
            from: `priyankohosur@outlook.com`,
            to: `modify@example.com`,
            author: `James Addom`,
            timestamp: `09/18/2025, 3:15 PM`,
            bodydescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`
          },
          {
            type: "Email",
            time: `Sarah Lee 09/18/2025, 4:10 PM`,
            subject: `Subject: second test`,
            from: `sarah@example.com`,
            to: `team@example.com`,
            author: `Sarah Lee`,
            timestamp: `09/18/2025, 4:10 PM`,
            bodydescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`
          }
        ]
      },
      {
        id: "email",
        label: "Email",
        content: `Email Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
      },
      {
        id: "text",
        label: "Text",
        content: `text Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
      },
      {
        id: "calls",
        label: "Calls",
        content: `Calls Lorem Ipsum is simply dummy text of the printing and typesetting industry.`
      },
      {
        id: "voicemaildrop",
        label: "Voicemail Drop",
        content: `Voicemail Drop content`
      },
      {
        id: "nps",
        label: "NPS",
        content: `NPS content`
      },
      {
        id: "thanksio",
        label: "Thanks.Io",
        content: `Thanks.Io content`
      },
      {
        id: "singlecontactdrips",
        label: "Single Contact Drips",
        content: `Single Contact Drips content`
      },
      {
        id: "emailcampaign",
        label: "Email Campaign",
        content: `Email Campaign content`
      },
      {
        id: "workflows",
        label: "Workflows",
        content: `Workflows content`
      }
    ]
  },
   {
    id: "tasks",
    label: "Tasks",
    count: 0,
    subTabs: [
      {
        id: "tasks2",
        label: "Tasks",
        content: `tasks content...`
      }
    ]
  },
   {
    id: "notes",
    label: "Notes",
    count: 0,
    subTabs: [
      {
        id: "notes",
        label: "Notes",
        content: `notes content...`
      }
    ]
  },


  
];

export default tabsData;
