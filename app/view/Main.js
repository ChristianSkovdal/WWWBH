Ext.define('WWWBH.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    control: {
        '#': {
            painted: function () {
                let home = this.lookup('publications');
                home.setPressed(true);
            }
        },
        'imgbtn': {
            click: function (btn) {
                Ext.ComponentQuery.query('imgbtn').filter(r => r != btn).forEach(r => r.setPressed(false));
                this.lookup('wrapper').setActiveItem(this.lookup('page' + btn.getItemId()));
            }
        },
    
    },
});

Ext.define('WWWBH.view.HtmlContainer', {
    extend: 'Ext.Container',
    xtype: 'htmlcntr',

    layout: 'fit',
    style:'background:transparent;',

    config: {
        url: false,
        bodyStyle: null
    },

    updateBodyStyle: function (style) {
        this.down('#body').setStyle(style);;
    },

    updateUrl: function (url) {
        if (url) {
            this.setMasked({
                xtype: 'loadmask', message: 'Loading...'
            });
            Ext.Ajax.request({
                url: url,
                scope: this,
                success: function (response) {
                    this.down('#body').setHtml(response.responseText);
                    this.setMasked(false);
                }
            });
        }
    },
    reload: function () {
        this.updateUrl(this.getUrl());
    },

    items: [
        {
            itemId: 'body',
            xtype: 'container',
            margin: 20,        
            shadow: true,
            style: 'background:yellow;',
            scrollable: true,
            padding: 20
        }
    ]
});

Ext.define('WWWBH.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    controller: 'main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Card',
        'WWWBH.controls.ImageButton',
        'WWWBH.view.PublicationViewer'
    ],

    controller: 'main',
    //viewModel: 'main',
    layout: 'fit',

    items: [
        {
            xtype: 'container',
            cls: 'bk-main',
            reference: 'wrapper',
            activeItem: 2,
            
            plugins: 'responsive',

            responsiveConfig: {
                wide: {
                    layout: {
                        type: 'card',
                        animation: {
                            duration: 300,
                            easing: 'ease-in',
                            type: 'slide',
                            direction: 'right'
                        }
                    },
                },
                tall: {
                    layout: {
                        type: 'card',
                        animation: {
                            duration: 300,
                            easing: 'ease-in',
                            type: 'slide',
                            direction: 'bottom'
                        }
                    },
                }
            },


            defaults: {
                xtype: 'htmlcntr',
            },

            items: [
                {
                    xtype: 'container',
                    shadow: false,
                    margin: 0,
                    scrollable: true,
                    plugins: 'responsive',

                    responsiveConfig: {
                        wide: {
                            docked: 'left',
                            cls: 'navi-bar-v',
                            width: 120,
                            layout: 'vbox',
                        },
                        tall: {
                            cls: 'navi-bar-h',
                            docked: 'bottom',
                            layout: 'hbox',
                        }
                    },

                    defaults: {
                        xtype: 'imgbtn',
                        margin: 20,
                        cls: 'ultra-icon normal',
                        normalCls: 'normal',
                        pressedCls: 'pressed',
                        plugins: 'responsive',

                        responsiveConfig: {
                            wide: {

                            },
                            tall: {
                                flex: 1,
                            }
                        },
                    },

                    items: [
                        {
                            itemId: 'A',
                            image: '/images/a.png',
                            reference: 'home',
                        },
                        {
                            itemId: 'B',
                            image: '/images/b.png',
                            reference: 'contact',

                        },
                        {
                            itemId: 'C',
                            image: '/images/c.png',
                            reference: 'publications',

                        },

                    ]
                },
                {
                    reference: 'pageA',
                    bodyStyle: 'background: white;',
                    url: '/html/a.html'
                },
                {
                    reference: 'pageB',
                    bodyStyle: 'background: lightgray;',
                    url: '/html/b.html'
                },
                {
                    xtype: 'pview',
                    reference: 'pageC',

                },
            ]
        }
    ]

});
