// Background Wedding Music Player
// Plays uploaded wedding music (music.mp3) with seamless looping,
// browser autoplay handling, user-interaction fallback, and accurate state synchronization.

type PlaybackListener = (isPlaying: boolean) => void;

class WeddingAudioPlayer {
  private audioElement: HTMLAudioElement | null = null;
  private isPlayingState: boolean = false;
  private listeners: Set<PlaybackListener> = new Set();
  private interactionEventsAttached: boolean = false;
  private candidateSources: string[] = [
    '/music.mp3',
    'music.mp3',
    'assets/music.mp3',
    '/assets/music.mp3',
  ];
  private currentSourceIndex: number = 0;

  constructor() {
    if (typeof window === 'undefined') return;
    this.initAudioElement();
  }

  private initAudioElement() {
    if (this.audioElement || typeof window === 'undefined') return;

    try {
      this.audioElement = new Audio();
      this.audioElement.src = this.candidateSources[this.currentSourceIndex];
      this.audioElement.loop = true;
      this.audioElement.volume = 0.75;
      this.audioElement.muted = false;
      this.audioElement.preload = 'auto';

      // Reflect REAL audio playback state
      this.audioElement.addEventListener('playing', () => {
        this.isPlayingState = true;
        this.notifyListeners();
        this.removeInteractionListeners();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlayingState = false;
        this.notifyListeners();
      });

      this.audioElement.addEventListener('ended', () => {
        if (this.audioElement) {
          this.audioElement.currentTime = 0;
          this.audioElement.play().catch(() => {});
        }
      });

      this.audioElement.addEventListener('timeupdate', () => {
        if (
          this.audioElement &&
          !this.audioElement.paused &&
          this.audioElement.currentTime > 0 &&
          !this.isPlayingState
        ) {
          this.isPlayingState = true;
          this.notifyListeners();
        }
      });

      this.audioElement.addEventListener('error', () => {
        if (this.currentSourceIndex < this.candidateSources.length - 1) {
          this.currentSourceIndex++;
          if (this.audioElement) {
            this.audioElement.src = this.candidateSources[this.currentSourceIndex];
            if (this.isPlayingState) {
              this.audioElement.play().catch(() => {});
            }
          }
        }
      });
    } catch (e) {
      console.warn('Could not initialize audio element:', e);
    }
  }

  public start() {
    if (typeof window === 'undefined') return;
    this.initAudioElement();
    if (!this.audioElement) return;

    this.audioElement.muted = false;
    if (this.audioElement.volume <= 0) {
      this.audioElement.volume = 0.75;
    }

    const playPromise = this.audioElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlayingState = true;
          this.notifyListeners();
          this.removeInteractionListeners();
        })
        .catch(() => {
          // Autoplay blocked by browser policy: keep UI as paused and attach interaction listener
          this.isPlayingState = false;
          this.notifyListeners();
          this.setupInteractionListeners();
        });
    }
  }

  public play(): Promise<void> | void {
    if (typeof window === 'undefined') return;
    this.initAudioElement();
    if (!this.audioElement) return;

    this.audioElement.muted = false;
    if (this.audioElement.volume <= 0) {
      this.audioElement.volume = 0.75;
    }

    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      return playPromise
        .then(() => {
          this.isPlayingState = true;
          this.notifyListeners();
          this.removeInteractionListeners();
        })
        .catch((err) => {
          console.warn('Audio play request failed:', err);
          this.isPlayingState = false;
          this.notifyListeners();
          this.setupInteractionListeners();
        });
    }
  }

  public pause() {
    if (this.audioElement) {
      this.audioElement.pause();
      this.isPlayingState = false;
      this.notifyListeners();
    }
  }

  public toggle(): boolean {
    if (typeof window === 'undefined') return false;
    this.initAudioElement();
    if (!this.audioElement) return false;

    if (!this.audioElement.paused && this.isPlayingState) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public isPlaying(): boolean {
    return (
      Boolean(this.audioElement && !this.audioElement.paused) &&
      this.isPlayingState
    );
  }

  public subscribe(listener: PlaybackListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying());
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    const currentState = this.isPlaying();
    this.listeners.forEach((listener) => listener(currentState));
  }

  private handleUserInteraction = () => {
    if (this.isPlayingState || !this.audioElement) return;

    this.audioElement.muted = false;
    if (this.audioElement.volume <= 0) {
      this.audioElement.volume = 0.75;
    }

    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlayingState = true;
          this.notifyListeners();
          this.removeInteractionListeners();
        })
        .catch(() => {
          // Keep interaction listener active until a gesture succeeds
        });
    }
  };

  private setupInteractionListeners() {
    if (this.interactionEventsAttached || typeof window === 'undefined') return;
    this.interactionEventsAttached = true;

    const events = ['click', 'pointerdown', 'touchstart', 'keydown'];
    events.forEach((evt) => {
      window.addEventListener(evt, this.handleUserInteraction, { passive: true });
      document.addEventListener(evt, this.handleUserInteraction, { passive: true });
    });
  }

  private removeInteractionListeners() {
    if (!this.interactionEventsAttached || typeof window === 'undefined') return;
    this.interactionEventsAttached = false;

    const events = ['click', 'pointerdown', 'touchstart', 'keydown'];
    events.forEach((evt) => {
      window.removeEventListener(evt, this.handleUserInteraction);
      document.removeEventListener(evt, this.handleUserInteraction);
    });
  }
}

export const weddingAudio = new WeddingAudioPlayer();

export function initBackgroundMusic() {
  weddingAudio.start();
}


