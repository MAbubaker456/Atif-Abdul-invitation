
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import useCountdown from '../../hooks/useCountdown';
import './Countdown.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Countdown() {
  const countdownRef = useRef(null);

  const {
    days,
    hours,
    minutes,
    seconds,
    completed,
  } = useCountdown('2027-01-10T00:00:00');


  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReducedMotion) return;

      gsap.from('.countdown-content > *', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.countdown-content',
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: countdownRef },
  );

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="countdown-section" ref={countdownRef}>
      <div className="countdown-frame">
        <div className="countdown-content">
          <p className="countdown-eyebrow">
            UNTIL OUR FOREVER BEGINS
          </p>

          <h2>
            The Big Day
          </h2>

          <div className="countdown-divider">
            <span />
            ✦
            <span />
          </div>

          {completed ? (
            <div className="countdown-completed">
              <h3>Alhamdulillah!</h3>
              <p>The wedding day has arrived.</p>
            </div>
          ) : (
            <div className="countdown-grid">
              {timeUnits.map((unit) => (
                <div className="countdown-item" key={unit.label}>
                  <div className="countdown-number">
                    {String(unit.value).padStart(2, '0')}
                  </div>

                  <span>{unit.label}</span>
                </div>
              ))}
            </div>
          )}

          <p className="countdown-date">
            Sunday · 10 January 2027
          </p>

          <p className="countdown-hijri arabic-text">
            Shaban-ul-Moazzam 1448 Hijri
          </p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;

// import { useState, useEffect } from 'react';

// const useCountdown = (targetDate) => {
//   const calculateTimeLeft = () => {
//     // Interpret the target date in the visitor's local timezone
//     const target = new Date(targetDate).getTime();
//     const now = Date.now();
//     const difference = target - now;

//     if (Number.isNaN(target) || difference <= 0) {
//       return {
//         days: 0,
//         hours: 0,
//         minutes: 0,
//         seconds: 0,
//         completed: difference <= 0 && !Number.isNaN(target),
//       };
//     }

//     return {
//       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//       minutes: Math.floor((difference / (1000 * 60)) % 60),
//       seconds: Math.floor((difference / 1000) % 60),
//       completed: false,
//     };
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

//   useEffect(() => {
//     // Update immediately when the target date changes
//     setTimeLeft(calculateTimeLeft());

//     const interval = setInterval(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

//   return timeLeft;
// };

// export default useCountdown;
