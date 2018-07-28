import '../css/special.styl';

import BaseSpecial from './base';
import Data from './data';
import Svg from './svg';
import * as Share from './lib/share';
import * as Analytics from './lib/analytics';
import { makeElement, removeChildren } from './lib/dom';
import Player from './player';
import animate from './lib/animate';

const CSS = {
    main: 'VKMusic',
};

const EL = {};

class Special extends BaseSpecial {
    constructor(params = {}) {
        super();

        Object.assign(this.params, params);
        this.saveParams();

        if (Data && params.data) {
            Object.assign(Data, params.data);
        }

        this.loadStyles(this.params.css).then(() => this.init());
    }

    createElements() {

        EL.logo = makeElement('div', CSS.main + '-logo', {
            innerHTML: Svg.vkmusic
        });

        EL.icons = makeElement('div', CSS.main + '-icons');
        for (let key in Svg.icons) {
            EL.icons.innerHTML += '<div class="' + (CSS.main + '-icons__item') + '">' + Svg.icons[key] + '</div>';
        }

        EL.slider = makeElement('div', CSS.main + '-slider');
        EL.sliderLine = makeElement('div', CSS.main + '-slider__line');
        EL.slider.appendChild(EL.sliderLine);

        EL.art = makeElement('div', CSS.main + '-art');

        EL.dots = makeElement('div', CSS.main + '-dots');
        EL.dotsTitle = makeElement('div', CSS.main + '-dots__title', {
            textContent: 'сэмплы'
        });
        EL.dotsList = makeElement('div', CSS.main + '-dots__list');
        EL.dots.appendChild(EL.dotsTitle);
        EL.dots.appendChild(EL.dotsList);

        // question
        EL.question = makeElement('div', CSS.main + '-question');
        EL.qText = makeElement('div', CSS.main + '-question__text');
        EL.qTextDiv = makeElement('div');
        EL.qAudio = makeElement('div', CSS.main + '-question__audio');
        EL.qOptions = makeElement('div', CSS.main + '-question__options');
        EL.qUserAnswer = makeElement('div', CSS.main + '-question__user-answer');
        EL.qAnswer = makeElement('div', CSS.main + '-question__answer');
        EL.qNextBtn = makeElement('div', CSS.main + '-question__next-btn', {
            innerHTML: '<span>Продолжить</span>' + Svg.arrowNext,
            data: {
                click: 'continue'
            }
        });
        EL.qResultBtn = makeElement('div', CSS.main + '-question__next-btn', {
            innerHTML: '<span>Результат</span>' + Svg.arrowNext,
            data: {
                click: 'showResult'
            }
        });

        EL.qText.appendChild(EL.qTextDiv);
        EL.question.appendChild(EL.qText);
        EL.question.appendChild(EL.qAudio);
        // question end

        this.container.appendChild(EL.logo);
        this.container.appendChild(EL.icons);
        this.container.appendChild(EL.slider);
        this.container.appendChild(EL.art);

    }

    createEnter() {
        EL.enter = makeElement('div', CSS.main + '-enter');
        EL.title = makeElement('div', CSS.main + '-enter__title', {
            textContent: Data.title
        });
        EL.subtitle = makeElement('div', CSS.main + '-enter__subtitle', {
            textContent: Data.subtitle
        });
        EL.desc = makeElement('div', CSS.main + '-enter__desc', {
            innerHTML: Data.description
        });
        EL.startBtn = makeElement('button', CSS.main + '-enter__start-btn', {
            type: 'button',
            innerHTML: '<span>Начать</span>' + Svg.arrowStart,
            data: {
                click: 'start'
            }
        });

        EL.enter.appendChild(EL.title);
        EL.enter.appendChild(EL.subtitle);
        EL.enter.appendChild(EL.desc);
        EL.enter.appendChild(EL.startBtn);

        this.container.appendChild(EL.enter);
    }

    createResult() {
        EL.result = makeElement('div', CSS.main + '-result');
        EL.rImg = makeElement('img', CSS.main + '-result__img');
        EL.rHead = makeElement('div', CSS.main + '-result__head');
        EL.rResult = makeElement('div', CSS.main + '-result__result');
        EL.rTitle = makeElement('div', CSS.main + '-result__title');
        EL.rSubtitle = makeElement('div', CSS.main + '-result__subtitle');
        EL.rShare = makeElement('div', CSS.main + '-result__share');
        EL.rRestartBtn = makeElement('div', CSS.main + '-result__restart-btn', {
            innerHTML: '<span>Пройти еще раз</span>' + Svg.refresh,
            data: {
                click: 'restart',
            }
        });

        EL.rBottom = makeElement('div', CSS.main + '-result__bottom');
        EL.subscribeVK = makeElement('div', CSS.main + '-subscribe', {
            innerHTML: '<div class="VKMusic-subscribe"><div class="VKMusic-subscribe__title"><span>Подписка на Boom и<br>музыку «ВКонтакте»</span>' + '<span class="VKMusic-subscribe__icon VKMusic-subscribe__icon--vk">' + Svg.note + '</span>' + '</div></div><button class="VKMusic-subscribe__btn VKMusic-subscribe__btn--vk">Получить</button>'
        });
        EL.subscribeTJ = makeElement('div', CSS.main + '-subscribe', {
            innerHTML: '<div class="VKMusic-subscribe"><div class="VKMusic-subscribe__title"><span>Подписка на<br>TJournal</span>' + '<span class="VKMusic-subscribe__icon VKMusic-subscribe__icon--tj">' + Svg.users + '</span>' + '</div></div><button class="VKMusic-subscribe__btn VKMusic-subscribe__btn--tj">Получить</button>'
        });

        EL.rHead.appendChild(EL.rImg);
        EL.rHead.appendChild(EL.rResult);
        EL.rHead.appendChild(EL.rTitle);
        EL.rHead.appendChild(EL.rSubtitle);
        EL.rHead.appendChild(EL.rShare);
        EL.rHead.appendChild(EL.rRestartBtn);

        // EL.rBottom.appendChild(EL.subscribeVK);
        // EL.rBottom.appendChild(EL.subscribeTJ);

        EL.result.appendChild(EL.rHead);
        EL.result.appendChild(EL.rBottom);

        Share.make(EL.rShare);
    }

    drawArt(data) {
        EL.art.innerHTML = '';
        data.forEach(row => {
            let line = makeElement('div', CSS.main + '-art__line', {
                data: {
                    x: row.x,
                    y: row.y,
                    size: row.size,
                    color: row.color
                }
            });

            if (row.odd) {
                line.dataset.odd = true;
                [...Array(parseInt(row.size))].forEach((col, i) => {
                    if (!(i%2)) {
                        let ceil = makeElement('div', CSS.main + '-art__line-ceil', {
                            data: {
                                x: i
                            }
                        });
                        line.appendChild(ceil);
                    }
                });
            }

            EL.art.appendChild(line);
        });
    }

    createDots() {
        removeChildren(EL.dotsList);
        EL.dotsTitle.textContent = this.questions.title;

        for (var i =  0; i < this.questions.list.length; i++) {
            let dot = makeElement('div', CSS.main + '-dots__item');
            EL.dotsList.appendChild(dot);
        }
    }

    fillDot() {
        EL.dotsList.children[this.activeIndex].classList.add('is-filled');
        EL.dotsList.children[this.activeIndex].classList.add('is-active');

        if (EL.dotsList.children[this.activeIndex - 1]) {
            EL.dotsList.children[this.activeIndex - 1].classList.remove('is-active');
        }
    }

    setSliderPosition(progress) {
        EL.sliderLine.style.left = progress + '%';
    }

    start() {
        this.container.removeChild(EL.enter);
        this.container.appendChild(EL.dots);
        this.container.appendChild(EL.question);

        EL.art.classList.add(CSS.main + '-art--question');

        this.createDots();
        this.makeNextQuestion();
    }

    restart() {
        this.setInitialParams();

        this.container.classList.remove(CSS.main + '--result');
        this.container.removeChild(EL.result);

        this.container.appendChild(EL.logo);
        this.container.appendChild(EL.icons);
        this.container.appendChild(EL.slider);
        this.container.appendChild(EL.art);

        this.container.appendChild(EL.dots);
        this.container.appendChild(EL.question);

        this.createDots();
        this.continue();
    }

    continue() {
        document.body.classList.remove('is-blurred');
        EL.qText.classList.remove(CSS.main + '-question__text--a');

        EL.question.removeChild(EL.qUserAnswer);
        EL.question.removeChild(EL.qAnswer);

        EL.question.contains(EL.qNextBtn) ? EL.question.removeChild(EL.qNextBtn) :
            EL.question.contains(EL.qResultBtn) ? EL.question.removeChild(EL.qResultBtn) : '';

        this.makeNextQuestion();
    }

    makeNextQuestion() {
        let question = this.questions.list[this.activeIndex];

        this.setSliderPosition(0);
        this.drawArt(question.art);
        this.fillDot();

        EL.qTextDiv.textContent = question.text;
        EL.question.appendChild(EL.qOptions);
        
        this.makeOptions(question.options);
        this.player.setTrack(question.track);

        animate(EL.art, 'fadeInArt', '600ms');
        animate(EL.qTextDiv, 'fadeInUp', '600ms', '100ms');
        animate(EL.qAudio, 'fadeInUp', '600ms', '300ms');
        animate(EL.qOptions, 'fadeInUp', '600ms', '400ms');
    }

    makeOptions(options) {
        removeChildren(EL.qOptions);

        options.forEach((item, i) => {
            let optionWrap = makeElement('div', CSS.main + '-question__options-item');
            let option = makeElement('button', CSS.main + '-question__option', {
                textContent: item.text,
                data: {
                    id: i,
                    click: 'makeAnswer'
                }
            });
            optionWrap.appendChild(option);

            EL.qOptions.appendChild(optionWrap);
        });
    }

    makeAnswer(el) {
        let id = el.dataset.id,
            question = this.questions.list[this.activeIndex];

        EL.question.removeChild(EL.qOptions);
        document.body.classList.add('is-blurred');
        EL.qText.classList.add(CSS.main + '-question__text--a');
        EL.qUserAnswer.textContent = question.options[id].text;
        EL.question.appendChild(EL.qUserAnswer);
        EL.qAnswer.textContent = question.options[id].msg;
        EL.question.appendChild(EL.qAnswer);

        if (question.options[id].isCorrect) {
            EL.qUserAnswer.classList.add(CSS.main + '-question__user-answer--correct');
            this.correctAnswers++;
        } else {
            EL.qUserAnswer.classList.remove(CSS.main + '-question__user-answer--correct');
        }

        animate(EL.qUserAnswer, 'fadeInUp', '600ms');
        animate(EL.qAnswer, 'fadeInUp', '800ms', '600ms');


        if (this.activeIndex < this.questions.list.length - 1) {
            this.activeIndex++;
            EL.question.appendChild(EL.qNextBtn);
            animate(EL.qNextBtn, 'fadeInUp', '600ms', '1200ms');
        } else if (this.activeGroupIndex < Data.questions.length - 1) {
            this.activeGroupIndex++;
            this.activeIndex = 0;
            this.questions = Data.questions[this.activeGroupIndex];
            this.createDots();
            EL.question.appendChild(EL.qNextBtn);
            animate(EL.qNextBtn, 'fadeInUp', '600ms', '1200ms');
        } else {
            EL.question.appendChild(EL.qResultBtn);
            animate(EL.qResultBtn, 'fadeInUp', '600ms', '1200ms');
        }
    }

    showResult() {
        let count = Data.questions.reduce((oldValue, item) => {
            return oldValue + item.list.length;
        }, 0);

        document.body.classList.remove('is-blurred');
        removeChildren(this.container);
        this.player.pause();
        this.container.classList.add(CSS.main + '--result');
        this.container.appendChild(EL.result);
        EL.rResult.textContent = this.correctAnswers + ' из ' + count + ' правильных ответов';;
        
        Data.results.some((item, index) => {
            if (item.range[0] <= this.correctAnswers && item.range[1] >= this.correctAnswers) {
                EL.rTitle.textContent = item.title;
                EL.rSubtitle.textContent = item.subtitle;
                EL.rImg.src = item.img;
                EL.rImg.className = '';
                EL.rImg.classList.add(CSS.main + '-result__img');
                EL.rImg.classList.add(CSS.main + '-result__img--' + (index + 1));

                return true;
            }
        });

        removeChildren(EL.rBottom);
        this.correctAnswers >= 8 ? EL.rBottom.appendChild(EL.subscribeVK) : EL.rBottom.appendChild(EL.subscribeTJ);

        Share.init();
    }

    setInitialParams() {
        this.activeGroupIndex = 0;
        this.activeIndex = 0;
        this.correctAnswers = 0;
        this.questions = Data.questions[this.activeGroupIndex];
    }

    init() {
        this.createElements();
        this.createEnter();
        this.createResult();
        this.drawArt(Data.art);

        this.player = new Player(EL.qAudio, {
            on: {
                progress: this.setSliderPosition,
            }
        });

        this.setInitialParams();
    }

}

export default Special;