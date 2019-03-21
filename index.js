/**
 * @file   mofron-comp-login/index.js
 * @brief  login component for mofron
 * @author simpart
 */
const mf      = require('mofron');
const Appbase = require('mofron-comp-appbase');
const Frame   = require('mofron-comp-frame');
const Form    = require('mofron-comp-loginform');
const Click   = require('mofron-event-click');
const SynWin  = require('mofron-effect-syncwin');
const SynHei  = require('mofron-effect-synchei');
const HrzPos  = require('mofron-effect-hrzpos');
const VrtPos  = require('mofron-effect-vrtpos');

mf.comp.Login = class extends Appbase {
    /**
     * initialize component
     * 
     * @param p1 (object) component option
     * @param p1 (string) app title
     */
    constructor (po) {
        try {
            super();
            this.name('Login');
            this.prmMap(['title', 'authConf']);
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @note private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.effect(new SynWin());
            
            /* add login form */
            this.frame().execOption({ child : this.form() });
            this.child(this.frame());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * frame component setter/getter
     * 
     * @note private method
     */
    frame (prm) {
        try {
            let ret = this.innerComp('frame', prm, Frame);
            if (undefined !== prm) {
                let off = mf.func.sizeSum(
                    this.form().submitConts().height(),
                    this.form().submitConts().sizeValue('margin-top'),
                    '0.4rem'
                );
                prm.execOption({
                    color: 'white', width: '3.5rem',
                    effect : [new HrzPos('center'), new VrtPos('center'), new SynHei(this.form(), off)]
                });
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * login form setter/getter
     * 
     * @note private method
     */
    form (prm) {
        try { return this.innerComp('form', prm, Form); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * authentication config setter/getter
     * 
     * @param p1 (string) uri path
     * @param p2 (function) send callback function
     * @return (string) uri
     */
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
    
    /**
     * main color setter/getter
     * 
     * @param p1 (string) color name
     * @param p1 (array) color value ([red,green,blue])
     * @return (string) color value
     */
    mainColor (prm) {
        try {
            let ret = super.mainColor(prm);
            if (undefined === ret) {
                this.frame().mainColor(prm);
            }
            return ret;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * submit color setter/getter
     *
     * @param p1 (string) color name
     * @param p1 (array) color value ([red,green,blue])
     * @return (string) color value
     */
    accentColor (prm) {
        try { return this.form().submitConts().mainColor(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Login;
/* end of file */
