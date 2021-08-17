kaboom({
    global:true,
    fullscreen:true,
    scale:2,
    debug:true,
    clearColor:[0,0,0,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('mario', 'UVsBVZo.png[/img]')
loadSprite('moeda', 'exZftYI.png[/img]')
loadSprite('tijolo', 'NKxLQxg.png')
loadSprite('bloco', 'zohWy76.png')
loadSprite('cogumelo', '0nlMLey.png')
loadSprite('koopa', 'zFIUVT7.png')
loadSprite('surpresa', 'mxvgMnf.png')
loadSprite('cx-aberta', 'Fr6EVAz.png')
loadSprite('tubo-sup-esq', 'uUrDHoB.png')
loadSprite('tubo-sup-dir', 'uQWT3XA.png')
loadSprite('tubo-inf-esq', 'ibdF5O6.png')

scene("jogo", () =>{ //Criação do cenário do jogo
    layers(['bg', 'obj', 'ui', 'obs'])

    const mapa=[ 
        '                                       ',
        '                                       ',
        '                                       ',
        '                                       ',
        '                                       ',
        '                                       ',
        '                                       ',
        '                                       ',
        '                                       ',
        '                                       ',
        '=================================  ====',
    ]

    const confNivel = {
        width:20,
        height:20,

        '=':[sprite('bloco'), solid()],
        '$':[sprite('moeda')],
        '%':[sprite('surpresa', solid(), 'moeda-surpresa')],
        '*':[sprite('surpresa', solid(), 'cogumelo-surpresa')],
        '}':[sprite('cx-aberta'),solid()],
        '(':[sprite('tubo-inf-esq'),solid(), scale(0.5)],
        ')':[sprite('tubo-inf-dir'),solid(), scale(0.5)],
        '-':[sprite('tubo-sup-esq'),solid(), scale(0.5)],
        '+':[sprite('tubo-sup-dir'),solid(), scale(0.5)],
        '^':[sprite('koopa'),solid()],
        '#':[sprite('cogumelo'),solid()],
    }

    const gameLevel = addLevel(mapa, confNivel)

    const jogador = add([
        sprite('mario'), solid(),
        pos(30, 0),
        body(),
        origin('bot')
    ])
})

start("jogo")