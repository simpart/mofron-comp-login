/**
 * @file   mofron-comp-login/index.js
 * @author simpart
 */
let mf = require('mofron');
/* component */
let Appbase   = require('mofron-comp-appbase');
let Frame     = require('mofron-comp-frame');
let LoginForm = require('mofron-comp-loginform');
/* event */
let Click = require('mofron-event-click');
/* effect */
let Center = require('mofron-effect-center');

/**
 * @class mofron.comp.Login
 * @brief login component for mofron
 */
mf.comp.Login = class extends Appbase {
    
    constructor (po) {
        try {
            super();
            this.name('Login');
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
    initDomConts (prm) {
        try {
            super.initDomConts(prm);
            mf.func.addResizeWin(
                (p) => {
                    try {
                        p.height(window.innerHeight - this.header().height());
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                this
            );
            this.height(window.innerHeight - this.header().height());
            
            /* add frame */
            this.contents(this.frame());
            
            /* set form */
            this.frame().addChild(this.form());
            
            this.form().msgEvent(
                (msg, lgn) => {
                    try {
                        lgn.frame().height(
                            lgn.form().height() + 35
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
                            size  : new mf.Param(450, 240),
                            color : new mf.Color(250,250,250)
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
                addEffect : new Center()
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
    
    color (clr) {
        try {
            let ret = super.color(clr);
            if (undefined !== ret) {
                return ret;
            }
            /* set submit color */
            this.submit().color(clr);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Login;
/* end of file */
