const portfolioData = {
  profile: {
    name: "田村 昂大",
    englishName: "TAMURA KOUDAI",
    motto: "雨垂れ石を穿つ",
    proverb: "雨垂れ石を穿つ",
    likes: ["アクションゲーム", "散策", "写真撮影"],
    dislikes: ["辛いもの", "寒い季節"]
  },
  youtube: {
    channelName: "Koudai.T",
    subscribers: "22,000+",
    totalViews: "13,656,395回",
    url: "https://www.youtube.com/c/KoudaiT15"
  },
  works: [
    {
      number: "01",
      name: "ドライブ音楽アプリ",
      label: "DRIVE MUSIC",
      description: "車を運転している最中でも、自分の好きな音楽を手軽に再生・操作するためのWebアプリ。",
      technologies: ["HTML", "CSS", "JavaScript", "IndexedDB", "PWA"],
      image: "images/music.webp",
      imageAlt: "ドライブ音楽アプリの実際の画面",
      imageType: "mobile",
      url: "https://ktwork4831-commits.github.io/hey-koudai-music/"
    },
    {
      number: "02",
      name: "タスク管理",
      label: "DAILY TASK",
      description: "自分が1日の時間をどのように使っているかを視覚化し、生活や時間の使い方を最適化するためのWebアプリ。",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage", "SVG"],
      image: "images/task.webp",
      imageAlt: "タスク管理アプリの実際の画面",
      imageType: "desktop",
      url: "https://ktwork4831-commits.github.io/task/"
    },
    {
      number: "03",
      name: "未来に残すノート",
      label: "FUTURE NOTE",
      description: "エンディングノートを気軽に作成し、大切な情報や希望を整理して家族や親族へ共有できるようにするWebアプリ。",
      technologies: ["HTML", "CSS", "JavaScript", "LocalStorage", "Web Share API"],
      image: "images/korekara.webp",
      imageAlt: "未来に残すノートの実際の画面",
      imageType: "mobile",
      url: "https://ktwork4831-commits.github.io/korekara-note/"
    },
    {
      number: "04",
      name: "学びの蓄積",
      label: "LEARNING JOURNAL",
      description: "日々学んだことを蓄積し、自分の知識資産として残して、必要なときに振り返り活用するためのWebアプリ。",
      technologies: ["HTML", "CSS", "JavaScript", "PWA"],
      image: "images/learning.webp",
      imageAlt: "学びの蓄積アプリの実際の画面",
      imageType: "desktop",
      url: "https://zingy-macaron-b7b6db.netlify.app/"
    },
    {
      number: "05",
      name: "PFCチェッカー",
      label: "PFC TRACKER",
      description: "毎日、自分に必要なタンパク質・脂質・炭水化物を記録し、食事管理に活用するためのWebアプリ。",
      technologies: ["HTML", "CSS", "JavaScript", "PWA"],
      image: "images/pfc.webp",
      imageAlt: "PFCチェッカーの実際の画面",
      imageType: "desktop",
      url: "https://superb-selkie-3e75f8.netlify.app/"
    },
    {
      number: "06",
      name: "でかファイル発見君",
      label: "WINDOWS TOOL",
      description: "PC内の大容量ファイルを簡単に発見し、ストレージ整理をサポートするWindowsアプリ。",
      technologies: ["Python", "Tkinter", "Windows API / OS情報取得", "CSV", "JSON", "PyInstaller", "Inno Setup"],
      image: "images/deka-file.png",
      imageAlt: "でかファイル君のフォルダー検索アイコン",
      imageType: "desktop",
      url: "https://github.com/ktwork4831-commits/large-file-finder",
      actionLabel: "詳細を見る"
    }
  ],
  tools: [
    { title: "WEB / PROGRAMMING", items: ["HTML", "CSS", "JavaScript", "Python · Basic", "C言語"] },
    { title: "AI", items: ["ChatGPT", "Gemini", "Codex"] },
    { title: "ANALYTICS / PLATFORM", items: ["Google Analytics", "YouTube"] },
    { title: "CREATIVE", items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro"] },
    { title: "OFFICE / COMMUNICATION", items: ["Microsoft Excel", "Microsoft Word", "Microsoft PowerPoint", "Microsoft Teams", "Zoom"] },
    { title: "QUALIFICATIONS", items: ["生命保険一般課程試験", "全商珠算・電卓実務検定1級", "簿記検定全商1級", "損害保険募集人", "情報処理技術者能力認定試験2級", "3級FP技能士", "C言語プログラミング能力認定試験3級", "変額保険販売資格", "生命保険募集人", "普通自動車第一種運転免許"] }
  ]
};
