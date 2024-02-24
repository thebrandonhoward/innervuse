export function getDefaultDays() {
    return Math.trunc((new Date().getMilliseconds() - new Date(2024, 0, 1).getMilliseconds()) / 86400000);
}

export function getDefaultViews() {
    return Math.trunc(Math.random() * 100);
}

export function getDefaultDescription() {
    return "Default video description";
}