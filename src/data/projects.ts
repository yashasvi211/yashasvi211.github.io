export const projects = [
    {
        title: "Eidon",
        tags: ["React Native", "Expo", "React", "Vite"],
        desc: "A cross-platform productivity and scheduling app designed for power users. Eidon includes a web client built with React and Vite, alongside a native mobile application built using React Native and Expo.",
        code_snippet_title: "app.json",
        language: "json",
        github: "https://github.com/yashasvi211/eidon",
        code_snippet: `{
  "expo": {
    "name": "Eidon",
    "slug": "Eidon",
    "version": "1.0.0",
    "plugins": [
      "expo-router",
      "expo-notifications",
      "expo-web-browser",
      "expo-audio"
    ]
  }
}`
    },
    {
        title: "Linux-Wellbeing",
        tags: ["Tauri", "React", "Python", "DBus"],
        desc: "A digital wellbeing suite for Linux bringing Android's Digital Wellbeing features to the desktop. It utilizes a Python daemon with xdotool and DBus for system-wide window and idle tracking, paired with a modern desktop GUI built with Tauri and React.",
        code_snippet_title: "window_watcher.py",
        language: "python",
        github: "https://github.com/yashasvi211/Linux-Wellbeing",
        code_snippet: `def get_idle_ms() -> int:
    """Return user idle time in milliseconds."""
    # Try GNOME Mutter IdleMonitor (Wayland compatibility)
    raw_dbus = _run(["gdbus", "call", "--session", 
                     "--dest", "org.gnome.Mutter.IdleMonitor", 
                     "--object-path", "/org/gnome/Mutter/IdleMonitor/Core", 
                     "--method", "org.gnome.Mutter.IdleMonitor.GetIdletime"])
                     
    if raw_dbus and "(uint64" in raw_dbus:
        return int(raw_dbus.split("uint64 ")[1].split(",")[0])
        
    # Fallback to xprintidle (X11 / XWayland)
    return int(_run(["xprintidle"]) or 0)`
    }
];
