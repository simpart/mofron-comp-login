/**
 * @file mofron-comp-login/index.js
 * @brief login component for mofron
 *        it makes easy to build login page
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
     * @param (mixed) title parameter
     *                object: component option
     * @param (mixed) authConf parameter
     * @type private
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
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.effect(new SynWin());
            
            /* add login form */
            this.frame().option({ child : this.form() });
            this.child(this.frame());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * frame component setter/getter
     * 
     * @param (mofron-comp-frame) form frame
     * @return (mofron-comp-frame) form frame
     * @type private
     */
    frame (prm) {
        try {
            let ret = this.innerComp('frame', prm, Frame);
            if (undefined !== prm) {
                prm.option({
                    color: 'white', width: '3.5rem',
		    style: { "position" : "relative" },
                    effect : [
		        new HrzPos('center'),
			new VrtPos('center'),
			new SynHei(this.form(), this.form().marginTop())
		    ]
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
     * @param (mofron-comp-loginform) login form component
     * @return (mofron-comp-loginform) login form component
     * @type private
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
     * @param (string) uri path
     * @param (function) send callback function
     * @return (string) uri
     * @type parameter
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
     * header,form frame color setter/getter
     * 
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @return (string) color value
     * @type parameter
     */
    mainColor (prm, opt) {
        try {
            let ret = super.mainColor(prm, opt);
            if (undefined === ret) {
                this.frame().mainColor(prm, opt);
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
     * @param (mixed (color)) string: color name, #hex
     *                        array: [red, green, blue, (alpha)]
     * @param (option) style option
     * @return (string) color value
     * @type parameter
     */
    accentColor (prm, opt) {
        try { return this.form().submitConts().mainColor(prm, opt); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Login;
/* end of file */
