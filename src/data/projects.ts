export const projects = [
    {
        title: "Eidon",
        tags: ["React", "Electron", "TypeScript", "TailwindCSS"],
        desc: "An Obsidian-inspired scheduling and productivity application designed for power users who love plain text and keyboard-driven workflows.",
        code_snippet_title: "scheduler.ts",
        language: "ts",
        github: "https://github.com/yashasvi211/eidon",
        code_snippet: `// Mock Data - To be filled later
export class EidonScheduler {
    constructor(private vaultPath: string) {}

    async parseScheduleFromMarkdown(file: string) {
        // Parse markdown notes for scheduled tasks
        const content = await this.readVault(file);
        return this.extractTasks(content);
    }
}`
    },
    {
        title: "Linux-Wellbeing",
        tags: ["Rust", "GTK4", "DBus"],
        desc: "A digital wellbeing daemon and GUI for Linux desktop environments to track screen time, set app limits, and encourage breaks.",
        code_snippet_title: "tracker.rs",
        language: "rust",
        github: "https://github.com/yashasvi211/linux-wellbeing",
        code_snippet: `// Mock Data - To be filled later
use std::time::Duration;

pub struct ActivityTracker {
    active_window: String,
    duration: Duration,
}

impl ActivityTracker {
    pub fn track_focus(&mut self) {
        // Track the current focused window
        let window = dbus_get_active_window();
        self.update_stats(window);
    }
}`
    }
];
