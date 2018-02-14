Ext.define('WWWBH.view.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    control: {
        'main': {
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

Ext.define('WWWBH.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Card',
        'WWWBH.controls.ImageButton',
        'WWWBH.view.PublicationViewer',
        'WWWBH.controls.HtmlContainer'
    ],

    controller: 'main',
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
                            direction: 'left'
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
                        width: 80,
                        height:80,
                        cls: 'ultra-icon normal',
                        normalCls: 'normal',
                        pressedCls: 'pressed',
                        plugins: 'responsive',

                        responsiveConfig: {
                            wide: {

                            },
                            tall: {
                                //flex: 1,
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
