module.exports = {
  Docs: [
    { type: "doc", id: "introduction" },
    {
      type: "category",
      label: "Accounts",
      items: ["account-google"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Video",
      items: ["video-prep", "video-upload", "video-link"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Audio",
      items: ["audio-upload", "audio-share"],
      collapsed: false,
    },
    {
      type: "category",
      label: "Meeting",
      items: ["zoom-meet", "zoom-record"],
      collapsed: false,
    },
  ],
};
