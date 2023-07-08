const a = "Hello" && 23; // 23
const b = "" && 23; // ""

const c = "Hello" || 23; // "Hello"
const d = "" || 23; // 23

const e = null || 23; // 23
const f = undefined || 23; // 23
const g = false || 23; // 23

/**
 * Nullish coalescing operator
 */
const h = null ?? 23; // 23
const i = undefined ?? 23; // 23
const j = false ?? 23; // false
