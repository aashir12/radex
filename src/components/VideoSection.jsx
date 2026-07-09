import { useEffect, useRef, useState } from "react";
import {
  Play,
  Volume2,
  VolumeX,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
} from "lucide-react";
import "../home.css";

const VIDEO_ID = "4A0f7A5mPLI";

export default function VideoSection() {
  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [muted, setMuted] = useState(true);
  // Tracks whether the customer has deliberately muted, so the
  // auto-unmute-on-interaction never overrides their choice.
  const userMutedRef = useRef(false);
  // True once the YouTube player has loaded and accepts API commands.
  const playerReadyRef = useRef(false);
  // Latest in-view state, so we can apply it as soon as the player is ready.
  const inViewRef = useRef(false);

  // Control the player via the YouTube iframe postMessage API.
  const sendCommand = (func, args = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  };

  // Play only while in view; pause otherwise. No-op until the player is ready.
  const syncPlayback = () => {
    if (!playerReadyRef.current) return;
    sendCommand(inViewRef.current ? "playVideo" : "pauseVideo");
  };

  // Once the iframe loads, register the JS API listener and apply the
  // current in-view state (commands sent before this are dropped by YouTube).
  const handleIframeLoad = () => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "listening", id: VIDEO_ID }),
      "*",
    );
    playerReadyRef.current = true;
    syncPlayback();
  };

  const unmute = () => {
    sendCommand("unMute");
    sendCommand("setVolume", [100]);
    setMuted(false);
  };

  // Sound on by default: browsers block unmuted autoplay, so the video
  // starts muted and we turn the sound on the moment the user first
  // interacts with the page (click / tap / scroll / key).
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!userMutedRef.current) {
        unmute();
      }
      removeListeners();
    };
    const events = ["pointerdown", "touchstart", "keydown", "scroll", "wheel"];
    const removeListeners = () => {
      events.forEach((e) =>
        window.removeEventListener(e, handleFirstInteraction),
      );
    };
    events.forEach((e) =>
      window.addEventListener(e, handleFirstInteraction, {
        once: false,
        passive: true,
      }),
    );
    return removeListeners;
  }, []);

  // Auto play/pause based on whether the video is in view.
  // Pausing preserves the playback position, so re-entering resumes
  // from where it left off.
  useEffect(() => {
    const target = containerRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.4 },
    );

    observer.observe(target);

    // Also pause when the browser tab is hidden, and resume when it
    // becomes visible again (only if still in view).
    const handleVisibility = () => {
      if (document.hidden) {
        sendCommand("pauseVideo");
      } else {
        syncPlayback();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  const toggleSound = () => {
    if (muted) {
      userMutedRef.current = false;
      unmute();
      sendCommand("playVideo");
    } else {
      userMutedRef.current = true;
      sendCommand("mute");
      setMuted(true);
    }
  };

  return (
    <section className="home-section home-video-section">
      <div className="container">
        <div className="home-video-grid">
          <div className="home-video-copy">
            <div className="home-video-trust-bar">
              <div className="home-video-trust-item">
                <div className="home-video-trust-icon">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div className="home-video-trust-number">500+</div>
                  <div className="home-video-trust-label">Projekte abgeschlossen</div>
                </div>
              </div>
              <div className="home-video-trust-item">
                <div className="home-video-trust-icon">
                  <Award size={18} />
                </div>
                <div>
                  <div className="home-video-trust-number">100%</div>
                  <div className="home-video-trust-label">Festpreisgarantie</div>
                </div>
              </div>
              <div className="home-video-trust-item">
                <div className="home-video-trust-icon">
                  <Users size={18} />
                </div>
                <div>
                  <div className="home-video-trust-number">60+</div>
                  <div className="home-video-trust-label">Städte im Rhein-Main</div>
                </div>
              </div>
              <div className="home-video-trust-item">
                <div className="home-video-trust-icon">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div className="home-video-trust-number">24h</div>
                  <div className="home-video-trust-label">Schnelle Rückmeldung</div>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(249, 115, 22, 0.1)",
                color: "#f97316",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              <Play size={16} fill="#f97316" /> Radex Live
            </div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "#fff", marginBottom: "24px" }}
            >
              Sehen Sie uns bei der Arbeit zu
            </h2>
            <p
              style={{
                color: "#9ca3af",
                fontSize: "18px",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              Wir legen größten Wert auf Transparenz und Premium-Qualität.
              Verfolgen Sie unsere aktuellen Sanierungsprojekte direkt von der
              Baustelle und überzeugen Sie sich selbst von unserer Arbeit.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px 0",
                color: "#d1d5db",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ color: "#f97316", marginTop: "2px" }}>✓</div>
                <span>Echte Einblicke in unsere Bauphasen</span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ color: "#f97316", marginTop: "2px" }}>✓</div>
                <span>Professionelle und saubere Ausführung</span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ color: "#f97316", marginTop: "2px" }}>✓</div>
                <span>Modernste Materialien und Techniken</span>
              </li>
            </ul>
            <a href="#kontakt" className="btn br-btn-orange">
              Kostenlose Beratung anfordern &rarr;
            </a>
          </div>

          <div className="home-video-player">
            <div ref={containerRef} className="home-video-player-card">
              <iframe
                ref={iframeRef}
                onLoad={handleIframeLoad}
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&mute=1&loop=1&playlist=${VIDEO_ID}&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1&enablejsapi=1`}
                title="Radex Sanierungsprojekt"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                style={{
                  position: "absolute",
                  top: "-15%",
                  left: "-30%",
                  width: "160%",
                  height: "130%",
                  pointerEvents: "none",
                }}
              ></iframe>

              {/* Sound toggle button */}
              <button
                onClick={toggleSound}
                aria-label={muted ? "Ton einschalten" : "Ton ausschalten"}
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  zIndex: 20,
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: muted ? "rgba(17,24,39,0.7)" : "#f97316",
                  color: "#fff",
                  backdropFilter: "blur(4px)",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.35)",
                  transition: "all 0.25s ease",
                }}
              >
                {muted ? <VolumeX size={22} /> : <Volume2 size={22} />}
              </button>

              {/* Hint label shown while muted */}
              {muted && (
                <div
                  onClick={toggleSound}
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    left: "16px",
                    zIndex: 20,
                    background: "rgba(17,24,39,0.7)",
                    color: "#fff",
                    fontSize: "13px",
                    fontWeight: 600,
                    padding: "8px 14px",
                    borderRadius: "20px",
                    backdropFilter: "blur(4px)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Volume2 size={16} /> Ton einschalten
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
