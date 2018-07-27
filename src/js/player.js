import { makeElement } from './lib/dom';

const EL = {}

function formatTime(time) {
    var min = Math.floor(time / 60);
    var sec = Math.floor(time % 60);
    return min + ':' + ((sec<10) ? ('0' + sec) : sec);
}

export default class Player {
    constructor(el, params = {}) {

        if (el instanceof HTMLElement === false) {
            return undefined;
        }

        this.el = el;
        this.params = params;
        this.eventsListeners = {};

        if (this.params && this.params.on) {
            Object.keys(this.params.on).forEach((eventName) => {
                this.on(eventName, this.params.on[eventName]);
            });
        }

        this.init();

        return this;
    }

    on(events, handler, priority) {
        const self = this;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach((event) => {
            if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
            self.eventsListeners[event][method](handler);
        });
        return self;
    }

    emit(...args) {
        const self = this;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
            events = args[0];
            data = args.slice(1, args.length);
            context = self;
        } else {
            events = args[0].events;
            data = args[0].data;
            context = args[0].context || self;
        }
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach((event) => {
            if (self.eventsListeners && self.eventsListeners[event]) {
                const handlers = [];
                self.eventsListeners[event].forEach((eventHandler) => {
                    handlers.push(eventHandler);
                });
                handlers.forEach((eventHandler) => {
                    eventHandler.apply(context, data);
                });
            }
        });
        return self;
    }

    createPlayer() {
        EL.player = makeElement('div', 'VKMusic-audio'),
        EL.btn  = makeElement('div', 'VKMusic-audio__btn'),
        EL.path = makeElement('div', 'VKMusic-audio__path'),
        EL.pathProgress = makeElement('div', 'VKMusic-audio__path-progress'),
        EL.time = makeElement('div', 'VKMusic-audio__time', {
            textContent: '0:00'
        }),

        EL.path.appendChild(EL.pathProgress);
        EL.player.appendChild(EL.btn);
        EL.player.appendChild(EL.path);
        EL.player.appendChild(EL.time);

        this.el.appendChild(EL.player);
        this.audio = new Audio();
    }

    setPathProgress(num) {
        EL.pathProgress.style.width = num + '%';
    }

    setCurrentTime(time) {
        EL.time.textContent = formatTime(time);
    }

    setTrack(link) {
        EL.btn.classList.remove('VKMusic-audio__btn--pause');

        this.setPathProgress(0);
        this.setCurrentTime(0);
        this.audio.src = link;
        this.audio.load();
    }

    onClick() {
        this.audio.paused ? this.audio.play() : this.audio.pause();
    }

    onPlay() {
        EL.btn.classList.add('VKMusic-audio__btn--pause');
        this.startProgress();
    }

    onPause() {
        EL.btn.classList.remove('VKMusic-audio__btn--pause');
    }

    onEnded() {
        EL.btn.classList.remove('VKMusic-audio__btn--pause');
    }

    startProgress() {
        let animationHandler = () => {
            if (this.audio.paused) return;

            let num = Math.round(((100 / this.audio.duration) * this.audio.currentTime) * 10000) / 10000;
            this.setPathProgress(num);
            this.setCurrentTime(this.audio.currentTime);

            this.emit('progress', num);

            requestAnimationFrame(animationHandler);
        }

        requestAnimationFrame(animationHandler);
    }

    initEvents() {
        EL.btn.addEventListener('click', this.onClick.bind(this));

        this.audio.addEventListener('playing', this.onPlay.bind(this));
        this.audio.addEventListener('pause', this.onPause.bind(this));
        this.audio.addEventListener('ended', this.onEnded.bind(this));
    }

    init() {
        this.createPlayer();
        this.initEvents();
    }
}