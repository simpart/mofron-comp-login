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
            super.initDomConts();
            
            /* add frame */
            this.contents().addChild(
                this.frame()
            );
            
            /* set form */
            this.frame().addChild(
                this.form()
            );
            
            this.size(50);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    themeConts () {
        try {
            /* set wrap color */
            let thm_clr = this.theme().color();
            if (null !== thm_clr) {
                this.color(thm_clr);
            }
            
            /* set frame */
            let frm = this.theme().component('mofron-comp-frame');
            if (null !== frm) {
                this.frame(frm);
            }
            
            /* set form */
            let fom = this.theme().component('mofron-comp-form');
            if (null !== fom) {
                this.form(fom);
            }
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    resizeEvent (base) {
        try {
            super.resizeEvent(base);
            let center = base.frame().getConfig('effect', 'Center');
            if (null !== center) {
                center.execute(true);
            }
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
                            color : new mf.Color(255,255,255)
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
                    this.form(new LoginForm());
                }
                return this.m_form;
            }
            /* setter */
            if (false === mf.func.isInclude(fom, 'Form')) {
                throw new Error('invalid parameter');
            }
            this.addFormResizeEvent(fom);
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
            this.form().submitComp(btn);
            this.addFormResizeEvent(this.form());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    addFormResizeEvent (fom) {
        try {
            let login = this;
            fom.submitComp().addEvent(
                new Click(
                    (tgt,p) => {
                        try {
                            //let msg = 
                            if (true === p.visible()) {
                                let size = login.frame().size();
                                login.frame().size(
                                    size[0], login.form().height()
                                );
                                login.resizeEvent(login, false);
                            }
                        } catch (e) {
                            console.error(e.stack);
                            throw e;
                        }
                    },
                    fom.message()
                )
            );
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
    
    size (val) {
        try {
            let ret = this.form().size(val);     // login form size
            if (undefined !== val) {
                this.header().height(val+15);    // header size
                let hei = this.form().height();
                this.frame().size(420, hei);     // frame size
            }
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
