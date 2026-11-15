// import { useEffect, useState } from 'react';

// const WEDDING_DATE = new Date('2026-12-20T13:35:00+05:30').getTime();

// function calculateTimeLeft() {
//     const difference = WEDDING_DATE - Date.now();

//     if (difference <= 0) {
//         return {
//             days: 0,
//             hours: 0,
//             minutes: 0,
//             seconds: 0,
//             completed: true,
//         };
//     }

//     return {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / (1000 * 60)) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//         completed: false,
//     };
// }

// function useCountdown() {
//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setTimeLeft(calculateTimeLeft());
//         }, 1000);

//         return () => clearInterval(interval);
//     }, []);

//     return timeLeft;
// }

// export default useCountdown;

import { useEffect, useState } from 'react';

function calculateTimeLeft(targetDate) {
    const difference = new Date(targetDate).getTime() - Date.now();

    if (!Number.isFinite(difference) || difference <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            completed: Number.isFinite(difference) && difference <= 0,
        };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        completed: false,
    };
}

function useCountdown(targetDate = '2027-01-10T00:00:00+05:30') {
    const [timeLeft, setTimeLeft] = useState(() =>
        calculateTimeLeft(targetDate)
    );

    useEffect(() => {
        const updateCountdown = () => {
            setTimeLeft(calculateTimeLeft(targetDate));
        };

        updateCountdown();

        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return timeLeft;
}

export default useCountdown;
