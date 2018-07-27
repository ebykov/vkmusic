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
            track: "audio/1.mp3",
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
            track: "https://freemusicarchive.org/file/music/WFMU/John_Wesley_Coleman/Live_at_WFMUs_Cherry_Blossom_Clinic_1092010/John_Wesley_Coleman_-_07_-_Tequila_10_Seconds.mp3",
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
            track: "https://freemusicarchive.org/file/music/WFMU/Eric_Carlson/Free_Matter_for_the_Blind_Volume_6_Mysterious_Worldz_Dark_Side/Eric_Carlson_-_Tunnel_Birds.mp3",
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
            track: "https://freemusicarchive.org/file/music/True_Chip_Till_Death/Norrin_Radd/Anomaly/Norrin_Radd_-_09_-_Quantum_Uncertainty.mp3",
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
            track: "https://freemusicarchive.org/file/music/dublab/Fulgeance/INTO_INFINITY_an_exploration_of_on_and_on_and_on_and_on/Fulgeance_-_Into_Infinity_ear_loop.mp3",
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
            track: "https://freemusicarchive.org/file/music/Faux_Fetus_Collective/The_Riffingtons/Three_Inches_of_PAIN/The_Riffingtons_-_01_-_The_Mystery_Behind_the_Meat_Cloak.mp3",
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
                msg: "Вас не проведёшь!",
                isCorrect: true
            }]
        }, {
            text: "Ностальгический трек, вспомните исполнителя?",
            track: "https://freemusicarchive.org/file/music/Third_Coast_International_Audio_Festival/The_Books/ShortDocs_2010_sonic_doodads/The_Books_-_clarinet_clock_loop.mp3",
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
            track: "https://freemusicarchive.org/file/music/WFMU/Ergo_Phizmiz/Outtakes_from_The_Snow_Flea/Ergo_Phizmiz_-_03_-_Wayne_The_Seagull.mp3",
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
            track: "https://freemusicarchive.org/file/music/no_curator/Cindy_Sizer/Cindy_Sizer/Cindy_Sizer_-_09_-_Mario_Paint_Interlude.mp3",
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
            track: "https://freemusicarchive.org/file/music/WFMU/junior85/Remixes_ish/junior85_-_07_-_Function.mp3",
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
                msg: "Нет, это «Розовое вино» — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }, {
                text: "«Монетка»",
                msg: "Нет, это «Розовое вино» — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }, {
                text: "«Розовое вино»",
                msg: "Да, это самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз.",
                isCorrect: true
            }, {
                text: "«Оптимист»",
                msg: "Нет, это «Розовое вино» — самый популярный трек во «ВКонтакте» за 2017 год. Его прослушали более 200 млн раз."
            }]
        }]
    }],
    results: [{
        range: [0, 2],
        title: "Пропускаю, пропускаю!",
        subtitle: "На шоу Валдиса Пельша вам лучше не ходить",
        img: "img/results/1.png"
    }, {
        range: [3, 5],
        title: "Ага, ну",
        subtitle: "Вы больше по классике",
        img: "img/results/2.png"
    }, {
        range: [6, 8],
        title: "Реп — мой хлеб",
        subtitle: "Вы знаете всех Lil’ов",
        img: "img/results/3.png"
    }, {
        range: [9, 10],
        title: "Меломан",
        subtitle: "Знаете всю музыку — от йодля до трип-хопа",
        img: "img/results/4.png"
    }]
};