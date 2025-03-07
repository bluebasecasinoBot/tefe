import { __c , __SYD, __sC, __p} from "./sydneyLib/sydneyDom.js"



__SYD._p4 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    justifyContent:'flex-start',
                    paddingLeft:'30px',
                    paddingRight:'30px',
                    background:'transparent',
                    padding:'20px 10px'
                }
            }),
            id:'buyGuide'
        },
        [
            __c('h1',{class:"headers_clr" , style:`font-family:sunrise;font-weight:900;padding:10px 0;font-weight:100;font-size:${__p(['_p4','__size'],'4rem')}`},['How To Buy']),
            __SYD.buy_tabs(
                {content:`Make sure you have Solana (SOL) in your wallet. You can buy SOL on exchanges like Binance, Coinbase, or Kraken, then transfer it to your Solana wallet.` ,title:`Get Some SOL`}
            ),
            __SYD.buy_tabs({
                content:`Use a Phantom or Solflare wallet to store your $TEFE tokens. Ensure it’s funded with enough SOL for transactions.`,title:`Set Up a Solana Wallet`
            }),
            __SYD.buy_tabs({
                content:`Visit Raydium or Jupiter Exchange, connect your wallet, and search for $TEFE.`,title:`Go to the Swap Platform`
            }),
            __SYD.buy_tabs({
                content:`Enter the amount of SOL you want to swap, confirm the transaction, and wait for the tokens to appear in your wallet.`,title:` Swap SOL for $TEFE`
            }),
            __SYD.buy_tabs({
                content:`You’re now part of the TEFE army! Hold, meme, and watch TEFE leap to the moon! 🚀🐸💰.`,title:`HODL & Join the Community`
            }),
        ],
        {
            createState:{
                stateName:'_p4',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.buy_tabs = ({title = '' , content = ''}) =>{
    return __c(
        'div',
        {
            style:'width:100%;max-width:1000px;height:fit-content;border-radius:30px;background:#39FF14',
            class:"tabs_3d"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:${__p(['_p4','__flex_child'],'row') === 'row' ? 'center' : 'flex-start'};column-gap:20px;row-gap:20px;flex-direction:${__p(['_p4','__flex_child'],'row')};`
                },
                [
                    __c('div',{style:'min-height:100px;min-width:100px;background-image:url("./assets/tefeLogo.jpeg");border-radius:50%;background-color:#0276D7'},[],{genericStyle:['bg_fit']}),
                    __c(
                        'div',
                        {
                            style:'width:100%'
                        },
                        [
                            __c('p',{style:'font-size:28px;text-align:left;text-transform:capitalize;color:#1b82e9;font-family:sunrise;font-weight:900;margin-bottom:15px;'},[title]),
                            __c('p',{style:'font-size: 1.2rem;line-height: 1.75rem;text-align:left;font-weight:100;color:#171717'},[
                                content
                            ])
                        ]
                    )
                ]
            )
        ]
    )
}
