// Synthesised UI sounds. Short oscillator blips built with the Web Audio API —
// no audio files to load, nothing to license, ~40 lines.
//
// Off by default and remembered in localStorage. Sound that starts without being
// asked for is hostile, and browsers block it before a gesture anyway.

let ctx;
let enabled = false;

export function soundEnabled() {
	return enabled;
}

/** Restore the stored preference. Returns the resolved state. */
export function initSound() {
	try {
		enabled = localStorage.getItem('sound') === 'on';
	} catch {
		enabled = false; // private mode / storage blocked
	}
	return enabled;
}

export function setSound(on) {
	enabled = on;
	try {
		localStorage.setItem('sound', on ? 'on' : 'off');
	} catch {
		// nothing to do — the toggle still works for this page view
	}
	if (on) blip('confirm');
}

// Each voice is a frequency, a length and a peak gain. Kept quiet on purpose:
// this should read as a tick, not a notification.
const voices = {
	hover: { freq: 880, dur: 0.03, gain: 0.015, type: 'sine' },
	click: { freq: 520, dur: 0.05, gain: 0.035, type: 'triangle' },
	open: { freq: 660, dur: 0.06, gain: 0.03, type: 'sine' },
	confirm: { freq: 740, dur: 0.09, gain: 0.03, type: 'sine' }
};

export function blip(name = 'click') {
	if (!enabled) return;
	const voice = voices[name] ?? voices.click;

	try {
		const Ctx = window.AudioContext || window.webkitAudioContext;
		if (!Ctx) return;
		ctx ??= new Ctx();
		if (ctx.state === 'suspended') ctx.resume();

		const now = ctx.currentTime;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();

		osc.type = voice.type;
		osc.frequency.setValueAtTime(voice.freq, now);
		// Slight downward slide stops repeated ticks sounding mechanical.
		osc.frequency.exponentialRampToValueAtTime(voice.freq * 0.8, now + voice.dur);

		gain.gain.setValueAtTime(0.0001, now);
		gain.gain.linearRampToValueAtTime(voice.gain, now + 0.004);
		gain.gain.exponentialRampToValueAtTime(0.0001, now + voice.dur);

		osc.connect(gain).connect(ctx.destination);
		osc.start(now);
		osc.stop(now + voice.dur + 0.02);
	} catch {
		// Audio is decoration; never let it break an interaction.
	}
}
