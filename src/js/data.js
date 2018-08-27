export default {
    title: "Угадай мелодию",
    subtitle: "Проверьте, насколько хорошо вы знаете треки и семплы.",
    description: "<p>Во «ВКонтакте» регулярно появляются молодые инди&#8209;музыканты, которые затем вырастают до звёзд, о которых говорят чуть ли не все.</p><p>Вместе с некоторыми из них мы сделали подборку семплов и треков, а ваша задача — их угадать.<br>Если справитесь с большей частью вопросов, получите <b>подписку на Boom или TJournal</b>.</p>",
    art: [{
        x: 12,
        y: 5,
        size: 4,
        color: "green"
    }, {
        x: 9,
        y: 7,
        size: 8,
        color: "red"
    }, {
        x: 5,
        y: 9,
        size: 12,
        color: "blue"
    }],
    questions: [{
        title: "сэмплы",
        list: [{
            text: "Какой трек начинается с этого семпла?",
            track: "https://leonardo.osnova.io/audio/3e4d6f90-4bae-1dc7-7a88-92bb5825daa2/1-sample.mp3",
            comment: {
                avatar: "img/stars/temnikova.jpg",
                name: "Елена Темникова",
                text: "Привет молодость, родной город Курган и дискотеки. Прям ностальгией накрыло. Дикий кайф."
            },
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 1,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 2,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 7,
                size: 14,
                color: "blue"
            }],
            options: [{
                text: "Smack My Bitch Up",
                msg: "Да, это трек Prodigy, которые, кстати, первыми из музыкантов получили галочку верификации «ВКонтакте».",
                isCorrect: true
            }, {
                text: "Reptilia",
                msg: "Нет, это трек Prodigy, которые, кстати, первыми  из музыкантов получили галочку верификации «ВКонтакте»."
            }, {
                text: "Behind Blue Eyes",
                msg: "Нет, это трек Prodigy, которые, кстати, первыми  из музыкантов получили галочку верификации «ВКонтакте»."
            }, {
                text: "«Ага, ну»",
                msg: "Нет, это трек Prodigy, которые, кстати, первыми  из музыкантов получили галочку верификации «ВКонтакте»."
            }]
        }, {
            text: "Этот семпл в своей песне использовал известный инди-исполнитель.",
            track: "https://leonardo.osnova.io/audio/7d9ba122-b52f-848e-f741-2e3c89f251cc/2-sample.mp3",
            comment: {
                avatar: "img/stars/lagutenko.jpg",
                name: "Илья Лагутенко",
                text: "<p>Эта песня явно вошла бы в 10-ку композиций, которые я бы лично хотел написать... Изящная, но приставучая — классика жанра с первого прослушивания.</p><p>Я был в Америке, когда трек начал звучать буквально отовсюду. Самое особенное — это то, что никто не знал исполнителей в лицо, никому не были интересны их истории популярности. Музыкальный суперхит в чистом виде!</p><p>В 2012-м, занимаясь подбором артистов для первого V-ROX, я планировал пригласить их выступить во Владивостоке. Понимая, что Gotye нам не потянуть, мой приятель Кифус Грин (продюсер альбома «SOS матросу») предложил нам помочь организовать приезд Kimbra. Мы начали переговоры, но денег на перелёты из США и Новой Зеландии для всего коллектива так найти и не смогли.</p>"
            },
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }],
            options: [{
                text: "Feduk",
                msg: "Нет, это известнейший трек Gotye."
            }, {
                text: "Gotye",
                msg: "Да, это известнейший трек Gotye.",
                isCorrect: true
            }, {
                text: "Lil Pump",
                msg: "Нет, это известнейший трек Gotye."
            }, {
                text: "grandson",
                msg: "Нет, это известнейший трек Gotye."
            }]
        }, {
            text: "Этого исполнителя вы точно знаете, а вот трек, в котором он использовал этот семпл, можете и не вспомнить.",
            track: "https://leonardo.osnova.io/audio/3dfed74d-6a24-f778-0f70-185457b9c9b2/3-sample.mp3",
            art: [{
                x: 1,
                y: 3,
                size: 13,
                color: "red",
                odd: true
            }, {
                x: 0,
                y: 5,
                size: 14,
                color: "blue"
            }],
            options: [{
                text: "Face",
                msg: "Нет, это «Признаки жизни» Оксимирона."
            }, {
                text: "Элджей",
                msg: "Нет, это «Признаки жизни» Оксимирона."
            }, {
                text: "Oxxxymiron",
                msg: "Да, это «Признаки жизни».",
                isCorrect: true
            }, {
                text: "Баста",
                msg: "Нет, это «Признаки жизни» Оксимирона."
            }]
        }, {
            text: "Угадаете, какой поп-певец использовал эти турецкие мотивы в своей песне?",
            track: "https://leonardo.osnova.io/audio/e52a1105-4d74-bdcc-d32e-4fccbe5f5b8a/4-sample.mp3",
            art: [{
                x: 0,
                y: 2,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 1,
                y: 6,
                size: 13,
                color: "blue"
            }, {
                x: 0,
                y: 8,
                size: 13,
                color: "green",
                odd: true,
            }],
            options: [{
                text: "Валерий Леонтьев",
                msg: "Нет, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек."
            }, {
                text: "Филипп Киркоров",
                msg: "Да, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек.",
                isCorrect: true
            }, {
                text: "Леонид Агутин",
                msg: "Нет, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек."
            }, {
                text: "Валерий Меладзе",
                msg: "Нет, это песня «Вот мы какие», которую Киркоров выпустил в 1998 году. Но теперь-то вы знаете другой его трек."
            }]
        }]
    },
    {
        title: "треки",
        list: [{
            text: "Кто исполнил оригинал этой песни? Подсказка: не Фред Дёрст из Limp Bizkit",
            track: "https://leonardo.osnova.io/audio/40f45c40-5e68-b24d-6226-d59cd3b67e9a/1-track.mp3",
            comment: {
                avatar: "img/stars/kirill-hleb.jpg",
                name: "Кирилл, группа&nbsp;«Хлеб»",
                text: "<p>Жалкая пародия на Limp Bizkit.</p>"
            },
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }],
            options: [{
                text: "Фред Дёрст",
                msg: "Вы серьёзно?"
            }, {
                text: "The Cure",
                msg: "Нет, это одна из самых известных песен The Who."
            }, {
                text: "The Who",
                msg: "Да, это одна из самых известных песен The Who, а Фред Дёрст сделал на неё не менее известный кавер.",
                isCorrect: true
            }, {
                text: "Билли Холидей",
                msg: "Нет, это одна из самых известных песен The Who."
            }]
        }, {
            text: "Die Antwoord или Little Big?",
            track: "https://leonardo.osnova.io/audio/1f3233f0-c812-7d8b-cb5c-02cd473730de/2-track.mp3",
            art: [{
                x: 0,
                y: 1,
                size: 14,
                color: "blue"
            }, {
                x: 1,
                y: 2,
                size: 13,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 13,
                color: "red"
            }, {
                x: 0,
                y: 8,
                size: 13,
                color: "green"
            }],
            options: [{
                text: "Die Antwoord",
                msg: "Угадать действительно сложно."
            }, {
                text: "Little Big",
                msg: "Вас не проведёшь! Это LollyBomb группы Little Big.",
                isCorrect: true
            }]
        }, {
            text: "Ностальгический трек, вспомните исполнителя?",
            track: "https://leonardo.osnova.io/audio/691fa468-1838-891b-fd2b-7fa70b55749b/3-track2.mp3",
            comment: {
                avatar: "img/stars/temnikova.jpg",
                name: "Елена Темникова",
                text: "<p>Потрясающая. Звучала из каждого окна и колонки по стране. Скучаю по тем «Зверям».</p>"
            },
            art: [{
                x: 7,
                y: 0,
                size: 7,
                color: "blue"
            }, {
                x: 0,
                y: 1,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }],
            options: [{
                text: "Валентин Стрыкало",
                msg: "Ха-ха, нет. Этим треком «Звери» закрывали VK Fest 2015."
            }, {
                text: "«Звери»",
                msg: "Да, они! Этим треком «Звери» закрывали VK Fest 2015.",
                isCorrect: true
            }, {
                text: "«Мумий Тролль»",
                msg: "Ха-ха, нет. Этим треком «Звери» закрывали VK Fest 2015."
            }, {
                text: "Руки Вверх!",
                msg: "Ха-ха, нет. Этим треком «Звери» закрывали VK Fest 2015."
            }]
        }, {
            text: "Если не разбираетесь в трэпе, то будет очень сложно.",
            track: "https://leonardo.osnova.io/audio/f5f6c82a-332a-8950-ddb4-be63e45b722f/4-track.mp3",
            art: [{
                x: 8,
                y: 3,
                size: 7,
                color: "red"
            }, {
                x: 0,
                y: 5,
                size: 15,
                color: "purple"
            }, {
                x: 0,
                y: 6,
                size: 15,
                color: "blue"
            }, {
                x: 8,
                y: 8,
                size: 7,
                color: "green"
            }],
            options: [{
                text: "Face",
                msg: "Ну, эщкере, что уж тут.",
                isCorrect: true
            }, {
                text: "Lil Yachty",
                msg: "Нет, это был Face!"
            }, {
                text: "Mnogoznaal",
                msg: "Нет, это был Face!"
            }, {
                text: "Элджей",
                msg: "Нет, это был Face!"
            }]
        }, {
            text: "Это Armin Van Buren, но какой микс?",
            track: "https://leonardo.osnova.io/audio/9a8e4043-fc33-c3ad-e8a1-22aa19045500/5-track.mp3",
            art: [{
                x: 0,
                y: 0,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 1,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 2,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 4,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 5,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 6,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 7,
                size: 14,
                color: "blue"
            }, {
                x: 0,
                y: 8,
                size: 14,
                color: "green"
            }, {
                x: 0,
                y: 9,
                size: 14,
                color: "purple"
            }],
            options: [{
                text: "A State Of Trance 257",
                msg: "Это 858, но мы всё понимаем."
            }, {
                text: "A State Of Trance 821",
                msg: "Это 858, но мы всё понимаем."
            }, {
                text: "A State Of Trance 858",
                msg: "Невероятно.",
                isCorrect: true
            }, {
                text: "A State Of Trance 921",
                msg: "Это 858, но мы всё понимаем."
            }]
        }, {
            text: "Этот трек играет в обратном направлении. Иначе вы бы сразу его отгадали.",
            track: "https://leonardo.osnova.io/audio/1f7c4b5c-fe4c-6c87-3269-dfbc20f09f79/6-track.mp3",
            comment: {
                avatar: "img/stars/temnikova.jpg",
                name: "Елена Темникова",
                text: "<p>Помню, услышала его первый раз во «ВКонтакте», когда он только появился. Показала радийщикам: посмотрите — это супер-хит. Но они не поняли и ушли в сарказм. Потом одумались :)"
            },
            art: [{
                x: 4,
                y: 2,
                size: 10,
                color: "blue"
            }, {
                x: 0,
                y: 3,
                size: 14,
                color: "red"
            }, {
                x: 0,
                y: 4,
                size: 14,
                color: "purple"
            }, {
                x: 0,
                y: 8,
                size: 14,
                color: "green"
            }, {
                x: 2,
                y: 9,
                size: 12,
                color: "blue"
            }],
            options: [{
                text: "«Я роняю Запад»",
                msg: "Нет, это «Розовое вино» Элджея и Feduk — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }, {
                text: "«Монетка»",
                msg: "Нет, это «Розовое вино» Элджея и Feduk — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }, {
                text: "«Розовое вино»",
                msg: "Да, это «Розовое вино» Элджея и Feduk — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз.",
                isCorrect: true
            }, {
                text: "«Оптимист»",
                msg: "Нет, это «Розовое вино» Элджея и Feduk — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }]
        }]
    }],
    results: [{
        range: [0, 2],
        title: "Пропускаю, пропускаю!",
        subtitle: "На шоу Валдиса Пельша вам лучше не ходить",
        img: "img/results/1.png",
        img2x: "img/results/1@2x.png"
    }, {
        range: [3, 5],
        title: "Ага, ну",
        subtitle: "Вы больше по классике",
        img: "img/results/2.png",
        img2x: "img/results/2@2x.png"
    }, {
        range: [6, 8],
        title: "Реп — мой хлеб",
        subtitle: "Вы знаете всех Lil’ов",
        img: "img/results/3.png",
        img2x: "img/results/3@2x.png"
    }, {
        range: [9, 10],
        title: "Меломан",
        subtitle: "Знаете всю музыку — от йодля до трип-хопа",
        img: "img/results/4.png",
        img2x: "img/results/4@2x.png"
    }]
};