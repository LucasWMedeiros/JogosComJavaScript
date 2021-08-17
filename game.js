kaboom({
    global:true,
    fullscreen:true,
    scale:2,
    debug:true,
    clearColor:[0,0,0,1],
})

loadRoot('https://i.imgur.com/')
loadSprite('mario', 'Wb1qfhK.png')
loadSprite('moeda','wbKxhcd.png')
loadSprite('koopa', 'KPO3fR9.png')
loadSprite('tijolo','pogC9x5.png')
loadSprite('bloco', 'M6rwarW.png')
loadSprite('cogumelo','0nlMLey.png')
loadSprite('surpresa','gesQ1KP.png')
loadSprite('cx-aberta','Fr6EVAz.png')
loadSprite('tubo-sup-esq','ReTPiWY.png')
loadSprite('tubo-sup-dir','hj2GK4n.png')
loadSprite('tubo-inf-esq','c1cYSbt.png')
loadSprite('tubo-inf-dir','nqQ79eI.png')

scene("jogo", () =>{ //Criação do cenário do jogo
    layers(['bg', 'obj', 'ui', 'obs'])

    const mapa=[ 
        '                                        ',
        '                                        ',
        '                *                       ',
        '                                        ',
        '            =                           ',
        '                =                       ',
        '         ==                             ',
        '                                        ',
        '            ===                      -+ ',
        '               ^       ^             () ',
        '=================================  =====',
    ]

    const confNivel = {
        width:20,
        height:20,

        '=':[sprite('bloco'), solid()],
        '$':[sprite('moeda')],
        '%':[sprite('surpresa'),solid(),'moeda-surpresa'],
        '*':[sprite('surpresa'),solid(),'cogumelo-surpresa'],
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

    const vel_mov = 120
    const pul_for = 300
    keyDown('left',()=>{
        jogador.move(-vel_mov, 0)
    })
    keyDown('right',()=>{
        jogador.move(vel_mov,0)
    })
    keyDown('space',()=>{
        if(jogador.grounded()){
            jogador.jump(pul_for)
        }        
    })


    const pontuacao = add([
        text('pontos'),
        pos(40, 6),
        layer('ui'),
        
        {
            value:'pontos',
        }
        
    ])

    add([text('Nível ' + 'test',pos(4, 6))])
    
    function big(){
        let timer=0
        let isBig = false
        return{
            update(){
                if(isBig){
                    timer -=dt()
                    if(timer <= 0){
                        this.smallify()
                    }
                }
            },
            isBig(){
                return isBig
            },
            smallify(){
                this.scale = vec2(1)
                timer = 0
                isBig = false
            }
        }
    }

    jogador.on("headbump", (obj)=>{
        if(obj.is('moeda-surpresa')){
            gameLevel.spawn('#', obj.gripPos.sub(0,1))
            destroy(obj)
            gameLevel.spaw('}', obj.gripPos.sub(0,0))
        }
        if(obj.is('cogumelo-surpresa')){
            gameLevel.spawn('#', obj.gripPos.sub(0,1))
            destroy(obj)
            gameLevel.spaw('}', obj.gripPos.sub(0,0))
        }
    })
    action('cogumelo',(c)=>{
        c.move(20,0)
    })
    
})


start("jogo")