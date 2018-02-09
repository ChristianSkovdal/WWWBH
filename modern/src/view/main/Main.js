Ext.define('ImageButton', {
    extend: 'Ext.Container',
    xtype: 'imgbtn',

    config: {
        image: null,
        pressed: false,
        pressedCls: '',
        normalCls: ''
    },

    applyImage(value) {
        this.setHtml(`<img class="normal" src="${value}"></b>`);
    },

    applyPressed(value) {
        this.removeCls(value ? this._normalCls : this._pressedCls);
        this.addCls(value ? this._pressedCls : this._normalCls);
    },

    listeners: {
        painted: function (c) {
            c.el.on('click', function (e) {
                this.pressed = !this.pressed;
                this.setPressed(this.pressed);
                this.fireEvent('click', c, this.pressed);
            }, c);
        }
    }
});

Ext.define('MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    control: {
        '#': {
            painted: function () {
                let home = this.lookup('home');
                home.setPressed(true);
                this.loadHtml(home);
            }
        },
        'imgbtn': {
            click: function (btn) {
                Ext.ComponentQuery.query('imgbtn').filter(r => r != btn).forEach(r => r.setPressed(false));
                this.loadHtml(btn);
            }
        },
        'htmlcntr': {
            painted: function () {
                //debugger;
            }
        }
    },

    loadHtml(btn) {

        this.lookup('wrapper').setActiveItem({
            xtype: btn.type,
            config: btn.cfg
        });

    }

});

Ext.define('HtmlContainer', {
    extend: 'Ext.Container',
    xtype: 'htmlcntr',

    style:'background-color:transparent;',
    html: 'Dette er en test',

    applySrc(value) {
        debugger;
        this.setLoader({
            autoLoad: true,
            url: value
        });
    }
 
});

Ext.define('WWWBH.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    controller: 'main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Card'
    ],

    controller: 'main',
    viewModel: 'main',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            cls: 'bk-main',
            reference: 'wrapper',

            layout: {
                type: 'card',
                animation: {
                    duration: 100,
                    easing: 'ease-out',
                    type: 'slide',
                    direction: 'left'
                }
            },

            items: [
                {
                    xtype: 'container',
                    docked: 'left',
                    //width: 120,
                    cls: 'navi-bar',
                    scrollable: true,

                    defaults: {
                        xtype: 'imgbtn',
                        margin: 10,
                        cls: 'ultra-icon normal',
                        normalCls: 'normal',
                        pressedCls: 'pressed',
                        height: 92,
                    },

                    items: [
                        {
                            itemId: 'A',
                            image: '/images/a.png',
                            type: 'htmlcntr',
                            reference: 'home',
                            cfg: {
                                src: 'a.htm'
                            }
                        },
                        {
                            itemId: 'B',
                            image: '/images/b.png',
                            type: 'htmlcntr',
                            cfg: {
                                src: 'a.htm'
                            }
                        },
                        {
                            itemId: 'C',
                            image: '/images/c.png',
                            type: 'targetversions',
                        },

                    ]
                }
            ]
        }
    ]
    
});
