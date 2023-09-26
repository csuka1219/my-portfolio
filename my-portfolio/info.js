let info = {
    name: "Balázs Csuka",
    logo_name: "Balázs Csuka",
    flat_picture: require("./src/assets/portrait.png"),
    config: {
      use_cookies: true,
      navbar: {
        blur: false
      }
    },
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus semper nisi sit amet tincidunt. Aliquam erat volutpat. Donec luctus, nunc posuere malesuada facilisis, magna dolor pellentesque metus, eu sollicitudin ante augue nec erat. Nullam aliquam luctus nulla, nec porta purus dictum vitae. Integer vel rutrum turpis.",
    education: [
      {
        name: "DSZC Beregszászi Pál",
        place: "Debrecen/Hungary",
        date: "Sep 2019 - May 2021",
        degree: "OKJ, Computer Software Engineering",
        skills: [
        ]
      },
      {
        name: "University of Debrecen",
        place: "Hungary",
        date: "Sep 2021 - Present",
        degree: "Bachelors in Computer Science Engineering",
        description:
          "",
        skills: [
          "C",
         "Java",
         "C#",
         "Python",
          "Matlab",
          "Verilog",
          "HTML5",
          "CSS3",
          "JavaScript",
          "Sql",
        ]
      }
    ],
    experience: [
  
      {
        name: "CTS-Informatika Kft",
        place: "Hungary",
        date: "Jun, 2021 - Present",
        position: "Software Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus semper nisi sit amet tincidunt. Aliquam erat volutpat. Donec luctus, nunc posuere malesuada facilisis, magna dolor pellentesque metus, eu sollicitudin ante augue nec erat. Nullam aliquam luctus nulla, nec porta purus dictum vitae. Integer vel rutrum turpis.",
          skills: [
            "C#",
            "Blazor",
            "WinForms",
            "Postgres",
            ".NET",
            "Maui",
            "ASP.NET Web API"
          ]
      },
  
    ],
    projects: [
      {
        title:"Flutter_League",
        description: "Flutter League is a companion app for League of Legends players that allows them to search for summoners, view their stats and match history, and check currently ongoing games.",
        tags: ["Flutter", "Dart", "API"],
        media: require("./src/assets/FlutterLeagueImg.png"),
      },
      {
        title:"SignalR_BlazorChess",
        description: "SignalR_BlazorChess is a multiplayer chess application built using Blazor Server, MudBlazor for the UI components, and SignalR for enabling real-time multiplayer functionality. This application allows chess enthusiasts to play against each other in a virtual environment and enjoy the strategic and intellectual challenges that the game of chess offers",
        tags: ["Blazor", "C#", "OOP"],
        media: require("./src/assets/SignalRBlazorChessImg.png"),
      },
      {
        title:"android-adb-picture-puller",
        description: "The \"android-adb-picture-puller\" is a Python script that allows users to easily pull pictures and videos from an Android device to their local machine using Android Debug Bridge (ADB). The script leverages the \"ppadb\" library to interact with ADB, making it compatible with various Android devices.",
        tags: ["Python3", "Adb", "Android"],
        media: require("./src/assets/PythonAndroidImg.png"),
      },
      {
        title:"my-portfolio",
        description: "It's my portfolio page made with vuejs",
        tags: ["JavaScript", "Vue", "Bootstrap"],
        media: require("./src/assets/MyPortfolioImg.png"),
      }
    ]
  };
  
  export default info;