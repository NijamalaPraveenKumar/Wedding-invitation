// Invisible Background Wedding Music Player
// Automatically plays uploaded wedding music (music.mp3)
// Handles browser autoplay policies with one-time interaction fallback

class WeddingAudioPlayer {
  private audioElement: HTMLAudioElement | null = null;
  private isStarted: boolean = false;
  private hasInteracted: boolean = false;

  constructor() {
    if (typeof window === 'undefined') return;

    try {
      this.audioElement = new Audio();
      this.audioElement.src = '/music.mp3';
      this.audioElement.loop = true;
      this.audioElement.volume = 0.45;
      this.audioElement.preload = 'auto';

      // Fallback source handlers if needed
      this.audioElement.onerror = () => {
        if (this.audioElement) {
          if (!this.audioElement.src.endsWith('music.mp3')) {
            this.audioElement.src = 'music.mp3';
          }
        }
      };
    } catch {
      // Audio element initialization fallback
    }
  }

  public start() {
    if (this.isStarted || !this.audioElement) return;

    const playPromise = this.audioElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isStarted = true;
          this.removeInteractionListeners();
        })
        .catch(() => {
          // Autoplay blocked by browser policy: register one-time interaction listener
          this.setupInteractionListeners();
        });
    }
  }

  private handleUserInteraction = () => {
    if (this.hasInteracted || this.isStarted || !this.audioElement) return;
    this.hasInteracted = true;

    this.audioElement
      .play()
      .then(() => {
        this.isStarted = true;
        this.removeInteractionListeners();
      })
      .catch(() => {
        // Retry with secondary path if needed
        if (this.audioElement && !this.audioElement.src.includes('assets')) {
          this.audioElement.src = 'assets/music.mp3';
          this.audioElement.play().then(() => {
            this.isStarted = true;
            this.removeInteractionListeners();
          }).catch(() => {});
        }
      });
  };

  private setupInteractionListeners() {
    if (typeof window === 'undefined') return;

    const events = ['click', 'touchstart', 'touchend', 'keydown', 'scroll', 'pointerdown', 'mousedown'];
    events.forEach((evt) => {
      window.addEventListener(evt, this.handleUserInteraction, { once: true, passive: true });
    });
  }

  private removeInteractionListeners() {
    if (typeof window === 'undefined') return;

    const events = ['click', 'touchstart', 'touchend', 'keydown', 'scroll', 'pointerdown', 'mousedown'];
    events.forEach((evt) => {
      window.removeEventListener(evt, this.handleUserInteraction);
    });
  }
}

export const weddingAudio = new WeddingAudioPlayer();

export function initBackgroundMusic() {
  weddingAudio.start();
}

