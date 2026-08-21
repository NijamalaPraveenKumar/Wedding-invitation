// Web Audio API ambient classical Shehnai/Tanpura synthesizer
// Plays soothing traditional Mangala Vaidyam / Kalyani raagam notes
class WeddingAudioPlayer {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private isMuted: boolean = false;
  private intervalId: number | null = null;
  private gainNode: GainNode | null = null;
  private audioElement: HTMLAudioElement | null = null;

  constructor() {
    // Try to load custom audio if available
    try {
      this.audioElement = new Audio('assets/music.mp3');
      this.audioElement.loop = true;
    } catch {
      // Audio element initialization fallback
    }
  }

  private initAudioContext() {
    if (!this.audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(0.18, this.audioCtx.currentTime);
      this.gainNode.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  private playTone(freq: number, duration: number, delay: number = 0) {
    if (!this.audioCtx || !this.gainNode || this.isMuted) return;

    const osc = this.audioCtx.createOscillator();
    const noteGain = this.audioCtx.createGain();

    // Harmonics for a reedy Shehnai / Nadaswaram timbre
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + delay);

    // Warm envelope
    const startTime = this.audioCtx.currentTime + delay;
    noteGain.gain.setValueAtTime(0, startTime);
    noteGain.gain.linearRampToValueAtTime(0.2, startTime + 0.1);
    noteGain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    osc.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  public play() {
    this.isPlaying = true;
    this.initAudioContext();

    // If external audio exists and loads, try that
    if (this.audioElement && this.audioElement.src) {
      this.audioElement.play().catch(() => {
        // Fallback to synthesized traditional Kalyani raagam notes
        this.startRaagamLoop();
      });
    } else {
      this.startRaagamLoop();
    }
  }

  private startRaagamLoop() {
    if (this.intervalId) return;

    // Kalyani Raagam frequencies (Sa, Ri2, Ga3, Ma2, Pa, Dha2, Ni3, Sa') in base D (293.66 Hz)
    const scale = [293.66, 329.63, 369.99, 415.30, 440.00, 493.88, 554.37, 587.33];
    const melodyPattern = [0, 2, 4, 5, 4, 2, 0, 4, 7, 6, 4, 2, 0, 2, 4, 0];
    let noteIndex = 0;

    const playNext = () => {
      if (!this.isPlaying) return;
      const note = melodyPattern[noteIndex % melodyPattern.length];
      const freq = scale[note];
      this.playTone(freq, 0.8, 0);
      noteIndex++;
    };

    playNext();
    this.intervalId = window.setInterval(playNext, 850);
  }

  public pause() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const weddingAudio = new WeddingAudioPlayer();
