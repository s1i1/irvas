const timer = (id, deadline) => {
    const addZeroToNum = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    }

    const getTime = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((total / 1000) % 60),
            minutes = Math.floor((total / (1000 * 60)) % 60),
            hours = Math.floor((total / (1000 * 60 * 60)) % 24),
            days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            'total': total,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    const setTime = (selector, endtime) => {
        const t = document.querySelector(selector),
            days = t.querySelector('#days'),
            hours = t.querySelector('#hours'),
            minutes = t.querySelector('#minutes'),
            seconds = t.querySelector('#seconds'),
            newInterval = setInterval(updateTime, 1000);

        updateTime();

        function updateTime() {
            const t = getTime(endtime);

            days.textContent = addZeroToNum(t.days);
            hours.textContent = addZeroToNum(t.hours);
            minutes.textContent = addZeroToNum(t.minutes);
            seconds.textContent = addZeroToNum(t.seconds);

            if (t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
                clearInterval(newInterval);
            }
        }
    };
    setTime(id, deadline);
};

export default timer;