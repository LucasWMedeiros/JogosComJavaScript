kaboom({
    global:true,
    fullscreen:true,
    scale:1,
    debug:true,
    clearColor:[0,0,0,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('mario', 'UVsBVZo.png[/img]')
loadSprite('moeda', 'exZftYI.png[/img]')
loadSprite('tijolo', 'zohWy76.png')
loadSprite('bloco', 'NKxLQxg.png')
loadSprite('cogumelo', '0nlMLey.png')
loadSprite('koopa', 'zFIUVT7.png')
loadSprite('suspresa', 'mxvgMnf.png')
loadSprite('cx-aberta', 'Fr6EVAz.png')
loadSprite('tudo-sup-esq', 'uUrDHoB.png')
loadSprite('tudo-sup-dir', 'uQWT3XA.png')
loadSprite('tudo-inf-esq', 'ibdF5O6.png')
loadSprite('tudo-inf-dir', 'C9lIpCL.png')

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
        '=======================================',
    ]

    const confNivel = {
        width:20,
        height:20,

        '=':[sprite('tijolo'), solid()],
        
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