/**
 * @file   mofron-comp-login/index.js
 * @author simpart
 */
const mf = require('mofron');
/* component */
const Appbase   = require('mofron-comp-appbase');
const Frame     = require('mofron-comp-frame');
const LoginForm = require('mofron-comp-loginform');
/* event */
const Click = require('mofron-event-click');
/* effect */
const SynWin = require('mofron-effect-syncwin');
const HrzPos = require('mofron-effect-hrzpos');
const VrtPos = require('mofron-effect-vrtpos');

/**
 * @class mofron.comp.Login
 * @brief login component for mofron
 */
mf.comp.Login = class extends Appbase {
    
    constructor (po) {
        try {
            super();
            this.name('Login');
            this.prmMap('title');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize vdom
     * 
     * @param prm : (string) text contents
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.addEffect(new SynWin(false, true));
            
            /* add frame */
            this.addChild(this.frame());
            
            /* set form */
            this.frame().addChild(this.form());
            
            this.form().msgEvent(
                (msg, lgn) => {
                    try {
                        lgn.frame().height(
                            lgn.form().height() + 30
                        );
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    frame (frm) {
        try {
            if (undefined === frm) {
                /* getter */
                if (undefined === this.m_frame) {
                    this.frame(
                        new Frame({
                            size      : new mf.Param(450, 240),
                            mainColor : new mf.Color('white')
                        })
                    );
                }
                return this.m_frame;
            }
            /* setter */
            if (false === mofron.func.isInclude(frm, 'Frame')) {
                throw new Error('invalid parameter');
            }
            frm.execOption({
                effect : [
                    new HrzPos('center'),
                    new VrtPos('center')
                ]
            });
            this.m_frame = frm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    form (fom) {
        try {
            if (undefined === fom) {
                /* getter */
                if (undefined === this.m_form) {
                    this.form(new LoginForm({}));
                }
                return this.m_form;
            }
            /* setter */
            if (false === mf.func.isInclude(fom, 'Form')) {
                throw new Error('invalid parameter');
            }
            this.m_form = fom;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    submit (btn) {
        try {
            if (undefined === btn) {
                /* getter */
                return this.form().submitComp();
            }
            /* setter */
            btn.text('Login');
            this.form().submitComp(btn);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    authConf (uri, func) {
        try {
            let ret = this.form().uri(uri);
            this.form().callback(func, this);
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    mainColor (prm) {
        try {
            let ret = super.mainColor(prm);
            if (undefined === ret) {
                this.form().submitComp().mainColor(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Login;
/* end of file */
