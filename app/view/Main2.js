Ext.define('WWWBH.view.Main2Controller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main2',

    control: {
        '*': {
            click: function () {
                debugger;
            }

        }

    },
});

Ext.define('WWWBH.view.Main2', {
    extend: 'Ext.Panel',
    xtype: 'main2',

    controller: 'main2',

    requires: [
        'Ext.MessageBox',
        'Ext.plugin.Responsive',
        'WWWBH.controls.ResponsiveBar'
    ],

    controller: 'main',
    layout: 'fit',

    items: [
        {
            xtype: 'toolbar',
            shadow: true,
            cls: 'topbar',
            height: 50,
            docked: 'top',

            listeners: {
                painted: function () {
                }
            },

            plugins: 'responsive',
            responsiveConfig: {
                'width <= 800': {
                    width: 60,
                    items: [
                        {
                            iconCls: 'x-fa fa-bars',
                            handler: function (btn) {
                                let floater = Ext.ComponentQuery.query('#floatbar')[0];
                                btn.setIconCls(floater.getHidden() ? 'x-fa fa-remove' : 'x-fa fa-bars');
                                floater.setHidden(!floater.getHidden());
                                btn.el.down('.x-icon-el').setStyle({ 'color': 'blue' });
                            },
                        },
                    ],
                },
                'width > 800': {
                    width: '100%',
                    items: [
                        '->',
                        {
                            text: 'Vigtige Fejl',
                            xtype: 'button',
                            cls: 'btn'
                        },
                        {
                            xtype: 'button',
                            cls: 'btn',
                            text: 'Tilg&aelig;ngelighed'
                        },
                        {
                            xtype: 'button',
                            cls: 'btn',
                            text: 'Warning'
                        },
                        {
                            xtype: 'button',
                            cls: 'btn',
                            text: 'Godkendt'
                        },
                        '->',
                        {
                            xtype: 'container',
                            layout: 'hbox',
                            defaults: {
                                xtype: 'button',
                                margin: 5
                            },
                            items: [
                                {
                                    iconCls: 'x-fa fa-facebook social-media',
                                },
                                {
                                    iconCls: 'x-fa fa-twitter social-media',
                                },
                                {
                                    iconCls: 'social-media x-fa fa-instagram',
                                },
                            ]
                        }
                    ],
                }
            }
        },
        {
            xtype: 'toolbar',
            docked: 'left',
            cls: 'topbar',
            hidden: true,
            itemId: 'floatbar',
            plugins: 'responsive',
            responsiveConfig: {
                'width <= 800': {
                },
                'width > 800': {
                    hidden: true
                }
            },
            items: [
                {
                    text: 'Vigtige Fejl',
                    xtype: 'button',
                    cls: 'btn'
                },
                {
                    xtype: 'button',
                    cls: 'btn',
                    text: 'Tilg&aelig;ngelighed'
                },
                {
                    xtype: 'button',
                    cls: 'btn',
                    text: 'Warning'
                },
                {
                    xtype: 'button',
                    cls: 'btn',
                    text: 'Godkendt'
                },
                '->',
                {
                    xtype: 'container',
                    layout: 'hbox',
                    defaults: {
                        xtype: 'button',
                        margin: 5
                    },
                    items: [
                        {                            
                            iconCls: 'x-fa fa-facebook social-media',
                        },
                        {
                            iconCls: 'x-fa fa-twitter social-media',
                        },
                        {
                            iconCls: 'social-media x-fa fa-instagram',
                        },
                    ]
                }
            ],
        },
        {
            xtype: 'container',
            //style: 'background: url(/assets/p/desert.jpg);',
            html: '<div class="container"></div>​'
        }

    ]


});
